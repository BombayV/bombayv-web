import { dev } from '$app/environment';
import { PRIVATE_KEY, PRIVATE_NAME } from '$env/static/private';
import type { RequestEvent } from '@sveltejs/kit';

const generateSessionId = () => {
	return `session-${Math.random().toString(36).substring(2, 15)}`;
};

export const loginUser = async (
	email: string,
	password: string,
	platform: RequestEvent['platform'],
	cookies: RequestEvent['cookies']
) => {
	if (email !== PRIVATE_NAME || password !== PRIVATE_KEY) {
		return null;
	}

	if (!platform || !platform.env || !platform.env.CF_KV) {
		throw new Error('Cloudflare KV is not configured properly.');
	}

	const { CF_KV } = platform.env;
	const sessionId = generateSessionId();

	cookies.set('session', sessionId, {
		path: '/',
		maxAge: 60 * 60 * 24,
		secure: !dev,
		sameSite: 'lax'
	});
	await CF_KV.put('session', sessionId, {
		expirationTtl: 60 * 60 * 24
	});
	return sessionId;
};

export const logoutUser = async (
	platform: RequestEvent['platform'],
	cookies: RequestEvent['cookies']
) => {
	if (!platform || !platform.env || !platform.env.CF_KV) {
		throw new Error('Cloudflare KV is not configured properly.');
	}

	const { CF_KV } = platform.env;
	await CF_KV.delete('session');
	cookies.delete('session', {
		path: '/',
		secure: !dev
	});
};

export const getSession = async (
	platform: RequestEvent['platform'],
	cookies: RequestEvent['cookies']
) => {
	if (!platform || !platform.env || !platform.env.CF_KV) {
		throw new Error('Cloudflare KV is not configured properly.');
	}

	const { CF_KV } = platform.env;
	const sessionId = await CF_KV.get('session');
	if (!sessionId) return null;

	const userSession = await cookies.get('session');
	if (!userSession) return null;

	if (sessionId !== userSession) return null;

	return sessionId;
};
