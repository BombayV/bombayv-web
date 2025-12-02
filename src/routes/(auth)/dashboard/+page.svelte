<script lang="ts">
	import ImageViewer from '$lib/components/global/enhanced-image-viewer.svelte';
	import DataPanel from '$lib/components/auth/data-panel.svelte';
	import type { R2Image, UserForm } from '$lib/types';
	import FileDropper from '$lib/components/auth/file-dropper.svelte';
	import EnhancedImageFrame from '$lib/components/global/enhanced-image-frame.svelte';
	import { onMount } from 'svelte';
	import { PUBLIC_CDN_URL } from '$env/static/public';

	interface Props {
		data: {
			images: R2Image[];
			forms: UserForm[];
		};
	}

	let { data } = $props() as Props;
	let images = $state(data.images);
	let unreadForms = $derived(() => data.forms.filter((form) => !form.read));
	let loadTo = $state(8);
	let loadMore = () => (loadTo = Math.min(images.length, loadTo + 8));
	let loadedImages = $derived(images.slice(0, loadTo));
	let scrollContainer: HTMLElement | null = $state(null);

	let currentImage: string | null = $state(null);
	let toBeUploaded = $state<FileList | null>(null);

	const handleScroll = () => {
		if (
			scrollContainer &&
			scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight
		) {
			loadMore();
		}
	};

	onMount(() => {
		if (scrollContainer) {
			scrollContainer.addEventListener('scroll', handleScroll);
		}
		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener('scroll', handleScroll);
			}
		};
	});
</script>

<main class="relative flex w-full flex-col px-6 py-16 md:px-8 lg:px-12">
	<div class="flex w-full items-center justify-between">
		<div class="flex items-center gap-x-2">
			<span
				class="block size-2.5 animate-pulse rounded-full bg-linear-to-br from-emerald-200 to-emerald-500 shadow-2xl drop-shadow-lg"
			></span>
			<p
				class="text-xs font-semibold uppercase tracking-tight text-neutral-600 drop-shadow dark:text-neutral-400"
			>
				Online
			</p>
		</div>
		<form action="?/logout" method="post">
			<button
				type="submit"
				class="btn bg-rose-400/30 py-1.5 text-xs font-medium hover:bg-rose-400/40"
			>
				Logout
			</button>
		</form>
	</div>
	<h1 class="mt-4 text-5xl font-medium drop-shadow-lg md:mt-6 md:text-6xl">
		Dashboard for
		<br />
		<span class="text-emerald-500">Images & Forms</span>
	</h1>
	<div class="relative mt-8 grid grid-cols-1 gap-y-6">
		<DataPanel title="Messages">
			{#snippet header()}
				<span
					class={`block size-2.5 animate-pulse rounded-full bg-linear-to-br shadow-2xl drop-shadow-lg ${
						data.forms.length > 0
							? unreadForms.length <= 0
								? 'from-emerald-200 to-emerald-500'
								: 'from-amber-200 to-amber-500'
							: 'from-neutral-200 to-neutral-500'
					}`}
				></span>
			{/snippet}
			{#if data.forms.length <= 0}
				<p
					class="grid h-52 grow place-items-center text-base text-neutral-600 dark:text-neutral-400"
				>
					No messages found.
				</p>
			{:else}
				<div class="relative grid grid-cols-1 gap-y-3">
					{#each data.forms as form, i (form.id)}
						<div
							class="glass flex flex-col gap-y-2 rounded-xl border border-neutral-400/50 bg-neutral-300/30 p-4 text-text transition-colors duration-300 dark:border-neutral-400/30 dark:bg-neutral-800/60"
						>
							<div class="flex items-center justify-between gap-x-6">
								<div class="flex items-center gap-x-2">
									<span
										class={`block size-2.5 animate-pulse rounded-full bg-linear-to-br shadow-2xl drop-shadow-lg ${form.read ? 'from-neutral-200 to-neutral-500' : 'from-amber-200 to-amber-500'}`}
									></span>
									<p
										class="text-xs font-semibold uppercase tracking-tight text-neutral-600 drop-shadow dark:text-neutral-400"
									>
										{form.name}
									</p>
								</div>
								{#if !form.read}
									<form action="?/mark_read" method="post">
										<input type="hidden" name="id" value={form.id} />
										<button
											type="submit"
											class="btn w-full bg-emerald-400/30 py-1.5 text-xs font-medium"
										>
											Mark as Read
										</button>
									</form>
								{/if}
							</div>
							<div class="flex flex-col gap-y-2">
								<p class="text-sm text-neutral-600 dark:text-neutral-400">{form.email}</p>
								<p class="text-sm text-neutral-600 dark:text-neutral-400">{form.message}</p>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</DataPanel>

		<form action="?/upload_images" method="post" enctype="multipart/form-data">
			<DataPanel title="Upload">
				{#snippet header()}
					{#if toBeUploaded !== null}
						<div class="flex gap-x-1.5">
							<input type="file" name="file" multiple class="hidden" bind:files={toBeUploaded} />
							<button
								onclick={() => (toBeUploaded = null)}
								class="btn bg-rose-400/30 py-1.5 text-xs font-medium"
							>
								Clear
							</button>
							<button type="submit" class="btn bg-emerald-400/30 py-1.5 text-xs font-medium">
								Upload
							</button>
						</div>
					{/if}
				{/snippet}
				{#if toBeUploaded === null}
					<div class="relative flex h-52 flex-col gap-y-2">
						<FileDropper bind:files={toBeUploaded} />
					</div>
				{:else}
					<div class="grid grid-cols-2 gap-x-4 gap-y-3">
						{#each toBeUploaded as file, i (file.name)}
							<div
								class="glass relative flex justify-between gap-x-4 rounded-xl border border-neutral-400/50 bg-neutral-300/30 p-4 text-text transition-colors duration-300 dark:border-neutral-400/30 dark:bg-neutral-800/60"
							>
								<div class="relative flex grow flex-col gap-y-2 overflow-hidden">
									<p
										class="w-full overflow-hidden text-ellipsis text-sm text-neutral-600 dark:text-neutral-400"
									>
										{file.name}
									</p>
									<p class="text-sm text-neutral-600 dark:text-neutral-400">
										{file.size / 1024 / 1024} MB
									</p>
								</div>
								<img
									src={URL.createObjectURL(file)}
									alt={file.name}
									class="aspect-square size-16 rounded-lg object-cover"
								/>
							</div>
						{/each}
					</div>
				{/if}
			</DataPanel>
		</form>

		<DataPanel title="Images" bind:scrollEl={scrollContainer}>
			{#snippet header()}
				<p
					class="text-xs font-semibold uppercase tracking-tight text-neutral-600 drop-shadow dark:text-neutral-400"
				>
					{data.images.length} images found
				</p>
			{/snippet}
			{#if data.images.length <= 0}
				<p
					class="grid h-52 grow place-items-center text-base text-neutral-600 dark:text-neutral-400"
				>
					Upload some images to get started.
				</p>
			{:else}
				<div class="relative grid grid-cols-1 gap-x-4 gap-y-3 py-3 sm:grid-cols-2 md:grid-cols-3">
					{#each loadedImages as image, i (image.id)}
						<div class="aspect-square">
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
					{/each}
				</div>
			{/if}
		</DataPanel>
	</div>
</main>

<ImageViewer src={currentImage} onclick={() => (currentImage = null)}>
	<img
		src={`${PUBLIC_CDN_URL}/${currentImage}`}
		alt="Viewer"
		class="h-full w-full object-contain"
	/>
</ImageViewer>
