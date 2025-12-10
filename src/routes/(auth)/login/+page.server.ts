import { getSession, loginUser } from '$lib/server/user';
import { error, fail, redirect } from '@sveltejs/kit';

const login_user = async ({ platform, request, cookies }) => {
	const data = (await request.formData()) as FormData;
	const email = data.get('email') as string;
	const password = data.get('password') as string;
	if (!email || !password) {
		return fail(500, {
			email,
			message: 'Email or password missing'
		});
	}

	const loggedIn = await loginUser(email, password, platform, cookies);
	if (!loggedIn) {
		return error(401, 'Invalid email or password');
	}

	return redirect(301, '/dashboard');
};

export const load = async ({ platform, cookies }) => {
	const session = await getSession(platform, cookies);
	if (session) {
		return redirect(301, '/dashboard');
	}
};

export const actions = {
	login_user
};
