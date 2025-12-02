import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ url, cookies }) => {
	const formId = url.searchParams.get('form_id');
	if (!formId) return redirect(301, '/contact');

	const formSent = cookies.get('form_sent');
	if (formSent != formId) {
		return {
			success: false,
			message: `Form "#${formId}" does not belong to you`
		};
	}

	return {
		success: true,
		message: `Form "#${formId}" has been sent!`
	};
};
