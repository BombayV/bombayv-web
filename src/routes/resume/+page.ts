import { redirect } from '@sveltejs/kit';

export const load = () => {
	redirect(302, 'https://cdn.bombayv.com/Rivera_Mauricio_Resume.pdf');
};
