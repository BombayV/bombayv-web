<script lang="ts">
	import Navbar from '$lib/components/layout/navbar.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';
	import { currentRoute, currentRouteState } from '$lib/stores/stores';
	import { onMount } from 'svelte';
	import { LoaderCircle } from '@lucide/svelte';

	let { children } = $props();

	onMount(() => {
		if ($currentRoute !== page.url.pathname) {
			currentRouteState.set('loading');
			currentRoute.set(page.url.pathname);
			setTimeout(() => {
				currentRouteState.set('loaded');
			}, 250);
		} else {
			currentRouteState.set('loaded');
		}
	});
</script>

<div class="flex flex-col">
	<Navbar />
	{#if $currentRouteState === 'loading'}
		<div
			in:fade={{ duration: 500, delay: 100 }}
			out:fade={{ duration: 250, delay: 0 }}
			class="flex h-dvh items-center justify-center"
		>
			<LoaderCircle class="size-20 animate-spin text-neutral-500 dark:text-neutral-400" />
		</div>
	{:else}
		<div
			in:fade={{ duration: 500, delay: 250 }}
			out:fade={{ duration: 250, delay: 0 }}
			class="relative mx-auto h-auto min-h-dvh w-full max-w-5xl px-6 pb-16 pt-32 md:px-8 lg:px-12"
		>
			{@render children()}
		</div>
	{/if}
	<Footer />
</div>
