import { getImages } from '$lib/server/images';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ platform }) => {
	const images = await getImages(platform);
	return {
		images
	};
};
