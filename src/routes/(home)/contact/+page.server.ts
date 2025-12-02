import { dev } from '$app/environment';
import { error, redirect, type Action, type Actions, type RequestEvent } from '@sveltejs/kit';

const uploadForm = async (
	name: string,
	email: string,
	subject: string,
	message: string,
	platform: RequestEvent['platform']
): Promise<number> => {
	if (!platform || !platform.env) return -1;

	const { CF_DB, CF_KV } = platform.env;
	const result = await CF_DB.prepare(
		`INSERT INTO user_forms (name, email, subject, message) VALUES (?, ?, ?, ?)`
	)
		.bind(name, email, subject, message)
		.run();

	if (!result.meta.changed_db) return -1;

	await CF_KV.delete('forms');
	return result.meta.last_row_id;
};

const send_form: Action = async ({ request, platform, cookies }) => {
	const alreadySent = cookies.get('form_sent');
	if (alreadySent) {
		return error(400, {
			message: 'You have already sent a form within the last 24 hours'
		});
	}

	const data = await request.formData();
	const { name, email, subject, message } = Object.fromEntries(data) as {
		name: string;
		email: string;
		subject: string;
		message: string;
	};

	if (!name || !email || !subject || !message) {
		return error(400, {
			message: 'All fields are required'
		});
	}

	let id = -1;
	try {
		const result = await uploadForm(name, email, subject, message, platform);
		if (result === -1) {
			return error(500, {
				message: 'Failed to upload form data'
			});
		}

		cookies.set('form_sent', String(result), {
			maxAge: 60 * 60 * 24,
			path: '/',
			secure: !dev
		});
		id = result;
	} catch (e) {
		console.log('Error: ', e);
	}

	if (id !== -1) {
		redirect(301, `/success?form_id=${id}`);
	}
};

export const actions: Actions = {
	send_form
};
