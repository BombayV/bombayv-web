<script lang="ts">
	import ImageViewer from '$lib/components/global/enhanced-image-viewer.svelte';
	import EnhancedImageFrame from '$lib/components/global/enhanced-image-frame.svelte';
	import type { R2Image } from '$lib/types';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { PUBLIC_CDN_URL } from '$env/static/public';

	interface Props {
		data: {
			images: R2Image[];
		};
	}

	let { data }: Props = $props();

	let currentImage: string | null = $state(null);

	const setupImages = (images: R2Image[] = []) => {
		const newImages: R2Image[][] = [];
		let currentIdx = 0;
		for (let i = 0; i < images.length; i++) {
			if (i % 3 === 0 && i !== 0) {
				currentIdx++;
			}
			if (!newImages[currentIdx]) {
				newImages[currentIdx] = [];
			}

			newImages[currentIdx].push(images[i]);
		}

		return newImages;
	};

	let maxRow = $state(2);
	let LIST_IMAGES = $derived(setupImages(data.images));
	let showImages = $derived(LIST_IMAGES.slice(0, maxRow));

	const handleScroll = () => {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
			maxRow += 2;
		}
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<svelte:head>
	<title>Gallery | Mauricio Sebastian Rivera Perez</title>
	<meta
		name="description"
		content="Personal photo gallery that showcases my photography skills and my love for nature. These include photos of landscapes, animals, private sessions, and more."
	/>
	<meta property="og:title" content="Gallery | Mauricio Sebastian Rivera Perez" />
	<meta
		property="og:description"
		content="Personal photo gallery that showcases my photography skills and my love for nature. These include photos of landscapes, animals, private sessions, and more."
	/>
</svelte:head>

<main class="relative flex w-full flex-col">
	<div class="flex items-center gap-x-2">
		<span
			class="block size-2.5 animate-pulse rounded-full bg-gradient-to-br from-emerald-200 to-emerald-500 shadow-2xl drop-shadow-lg"
		></span>
		<p
			class="text-xs font-semibold uppercase tracking-tight text-neutral-600 drop-shadow dark:text-neutral-400"
		>
			Gallery
		</p>
	</div>
	<h1 class="mt-4 text-5xl font-medium drop-shadow-lg md:mt-6 md:text-6xl">
		Expressive Art<br />
		<span class="text-emerald-500">Captures Memories</span>
	</h1>
	<p class="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
		Explore my personal photo gallery of memories I've collected over the years as a photographer.
	</p>
	{#if !LIST_IMAGES.length || !LIST_IMAGES[0].length}
		<p
			class="mt-4 flex min-h-[calc(100dvh-28rem)] grow items-center justify-center gap-x-6 text-lg text-neutral-600 md:text-xl dark:text-neutral-400"
		>
			<span class="flex flex-col gap-y-2">
				<span class="flex justify-between">
					<span class="animate-eyeclose h-3 w-1 bg-neutral-600 dark:bg-neutral-400"></span>
					<span class="animate-eyeclose h-3 w-1 bg-neutral-600 dark:bg-neutral-400"></span>
				</span>
				<span
					class="h-3 w-8 rounded-t-full border-x-2 border-t-2 border-neutral-600 dark:border-neutral-400"
				></span>
			</span>
			No images available
		</p>
	{:else}
		<div class="relative mt-12 flex w-full flex-col gap-y-4">
			{#each showImages as row, i}
				<div
					transition:fade
					class="relative grid w-full grid-cols-1 gap-4 md:h-144 md:grid-cols-2 md:grid-rows-2"
				>
					{#each row as image, j}
						{@const odd = i % 2 === 0}
						{#if j === 0}
							<div
								in:fade={{ duration: 500 }}
								out:fade={{ duration: 500 }}
								class={`relative aspect-square md:aspect-auto md:h-full ${odd ? 'md:row-span-2' : 'md:col-start-2 md:row-span-2 md:row-start-1'}`}
							>
								<EnhancedImageFrame
									onclick={() => (currentImage = image.src)}
									alt={`Click to view image #${image.id}`}
								>
									<img
										src={`${PUBLIC_CDN_URL}/${image.src}`}
										alt={'Copyright @Mauricio Rivera #' + image.id}
										class="h-full w-full object-cover"
									/>
								</EnhancedImageFrame>
							</div>
						{:else if j === 1}
							<div
								in:fade={{ duration: 500 }}
								out:fade={{ duration: 500 }}
								class={`relative aspect-square h-full md:aspect-auto md:h-auto ${odd ? '' : 'md:col-start-1 md:row-start-1'}`}
							>
								<EnhancedImageFrame
									onclick={() => (currentImage = image.src)}
									alt={`Click to view image #${image.id}`}
								>
									<img
										src={`${PUBLIC_CDN_URL}/${image.src}`}
										alt={'Copyright @Mauricio Rivera #' + image.id}
										class="h-full w-full object-cover"
									/>
								</EnhancedImageFrame>
							</div>
						{:else}
							<div
								in:fade={{ duration: 500 }}
								out:fade={{ duration: 500 }}
								class={`aspect-square md:aspect-auto md:h-auto ${odd ? 'md:col-start-2' : ''}`}
							>
								<EnhancedImageFrame
									onclick={() => (currentImage = image.src)}
									alt={`Click to view image #${image.id}`}
								>
									<img
										src={`${PUBLIC_CDN_URL}/${image.src}`}
										alt={'Copyright @Mauricio Rivera #' + image.id}
										class="h-full w-full object-cover"
									/>
								</EnhancedImageFrame>
							</div>
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</main>

<ImageViewer src={currentImage} onclick={() => (currentImage = null)}>
	<img
		src={`${PUBLIC_CDN_URL}/${currentImage}`}
		alt="Viewer"
		class="h-full w-full object-contain"
	/>
</ImageViewer>
