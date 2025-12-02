import type { RequestEvent } from '@sveltejs/kit';

export const getImages = async (platform: RequestEvent['platform']) => {
	if (!platform || !platform.env || !platform.env.CF_DB || !platform.env.CF_KV) {
		throw new Error('Cloudflare environment is not configured properly.');
	}
	const { CF_DB, CF_KV } = platform.env;
	const cached = await CF_KV.get('images');
	if (cached) return JSON.parse(cached);
	const result = await CF_DB.prepare('SELECT id, src FROM images ORDER BY created_at DESC').all();

	const data = result?.results;
	if (!data || data.length === 0) return [];

	await CF_KV.put('images', JSON.stringify(data), { expirationTtl: 60 * 60 * 24 });
	return data;
};
