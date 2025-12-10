import { getImages } from '$lib/server/images';
import { getSession, logoutUser } from '$lib/server/user';
import { error, redirect } from '@sveltejs/kit';
import type { RequestEvent } from './$types.js';

const slugify = (str: string) => {
	return str
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');
};

const updateRead = async (id: number, read: boolean, platform: RequestEvent['platform']) => {
	if (!platform || !platform.env || !platform.env.CF_DB || !platform.env.CF_KV) {
		throw new Error('Cloudflare environment is not configured properly.');
	}

	const { CF_DB } = platform.env;
	const result = await CF_DB.prepare('UPDATE user_forms SET read = ? WHERE id = ?')
		.bind(read, id)
		.run();

	if (!result.meta.changed_db) return false;

	await platform.env.CF_KV.delete('forms');
	return true;
};

const insertImage = async (file: File, platform: RequestEvent['platform']) => {
	if (
		!platform ||
		!platform.env ||
		!platform.env.CF_DB ||
		!platform.env.CF_R2 ||
		!platform.env.CF_KV
	) {
		throw new Error('Cloudflare environment is not configured properly.');
	}

	const { CF_DB, CF_R2 } = platform.env;
	const { name, type } = file;
	// Remove file extension
	const src = `${slugify(name.split('.')[0])}-${Date.now()}`;
	const result = await CF_DB.prepare('INSERT INTO images (src) VALUES (?)').bind(src).run();

	if (!result.meta.last_row_id) return false;
	const arrayBuffer = await file.arrayBuffer();
	const image = await CF_R2.put(src, arrayBuffer, {
		customMetadata: {
			'Content-Type': type
		}
	});

	if (!image) return false;

	await platform.env.CF_KV.delete('images');
	return true;
};

const mark_read = async ({ platform, request, cookies }) => {
	const session = await getSession(platform, cookies);
	if (!session) {
		return redirect(301, '/login');
	}

	const form = await request.formData();
	const id = form.get('id');
	if (!id)
		return error(400, {
			message: 'Invalid form id'
		});

	try {
		const result = await updateRead(parseInt(id), true, platform);
		if (!result)
			return error(404, {
				message: 'Form not found'
			});
	} catch (e) {
		return error(500, {
			message: 'An error occurred while updating the form'
		});
	}
};

const logout = async ({ platform, cookies }) => {
	const session = await getSession(platform, cookies);
	if (!session) {
		return redirect(301, '/login');
	}

	await logoutUser(platform, cookies);
	redirect(301, '/login');
};

const upload_images = async ({ platform, request, cookies }) => {
	const session = await getSession(platform, cookies);
	if (!session) {
		return redirect(301, '/login');
	}

	const form = await request.formData();
	const files = form.getAll('file');

	if (files.length === 0)
		return error(400, {
			message: 'No files uploaded'
		});

	try {
		for (const file of files) {
			const result = await insertImage(file, platform);
			if (!result)
				return error(500, {
					message: 'An error occurred while uploading the image ' + file.name
				});
		}
	} catch (e) {
		return error(500, {
			message: 'An error occurred while uploading the image'
		});
	}
};

const getForms = async (platform: RequestEvent['platform']) => {
	if (!platform || !platform.env || !platform.env.CF_DB || !platform.env.CF_KV) {
		throw new Error('Cloudflare environment is not configured properly.');
	}

	const { CF_DB, CF_KV } = platform.env;
	const cached = await CF_KV.get('forms');
	if (cached) return JSON.parse(cached);
	const result = await CF_DB.prepare(
		'SELECT id, name, email, subject, message, read FROM user_forms ORDER BY created_at DESC'
	).all();

	const data = result?.results;
	if (!data || data.length === 0) return [];

	await CF_KV.put('forms', JSON.stringify(data), { expirationTtl: 60 * 60 * 24 });
	return data;
};

export const actions = {
	mark_read,
	upload_images,
	logout
};

export const load = async ({ platform, cookies }) => {
	const session = await getSession(platform, cookies);
	if (!session) {
		return redirect(301, '/login');
	}

	const forms = await getForms(platform);
	const images = await getImages(platform);

	return {
		images,
		forms
	};
};
