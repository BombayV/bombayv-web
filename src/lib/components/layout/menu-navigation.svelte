<script lang="ts">
	import type { RouteData } from '$lib/types';
	import { AtSign, Image, UserRound } from '@lucide/svelte';
	import { currentRoute, currentRouteState } from '$lib/stores/stores';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let changedRouteTimeout: ReturnType<typeof setTimeout> | null = $state(null);
	const setRoute = (routeT: string) => {
		if ($currentRoute === routeT) return;

		currentRouteState.set('loading');
		currentRoute.set(routeT);
		if (changedRouteTimeout) clearTimeout(changedRouteTimeout);
		changedRouteTimeout = setTimeout(() => {
			goto(routeT);
			window.scrollTo({ top: 0, behavior: 'smooth' });
			setTimeout(() => {
				currentRouteState.set('loaded');
			}, 100);
		}, 1000);
	};

	const routes: RouteData[] = [
		{ name: 'About', icon: UserRound, path: '/' },
		{ name: 'Gallery', icon: Image, path: '/gallery' },
		{ name: 'Portfolio', icon: Image, path: '/portfolio' },
		{ name: 'Contact', icon: AtSign, path: '/contact' }
	];

	let activeNavigation = $state(true);
	let footerEl = $state<HTMLElement | null>(null);

	const scrollListener = () => {
		const windowWidth = window.innerWidth;
		if (windowWidth < 768) {
			if (!footerEl) footerEl = document.querySelector('footer') as HTMLElement;
			const newVal =
				window.scrollY + window.innerHeight < document.body.scrollHeight - footerEl.clientHeight;
			if (newVal !== activeNavigation) activeNavigation = newVal;
		}

		if (windowWidth >= 768 && !activeNavigation) {
			activeNavigation = true;
		}
	};

	onMount(() => {
		scrollListener();
		window.addEventListener('scroll', scrollListener);
		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	});
</script>

{#if activeNavigation}
	<div
		transition:fly={{ y: 15, duration: 300, delay: 0 }}
		class="glass fixed bottom-0 left-1/2 z-50 mx-auto mb-4 flex -translate-x-1/2 rounded-full border border-neutral-400/50 bg-neutral-300/30 p-1 text-sm text-text transition-colors duration-300 md:relative md:left-auto md:m-auto md:translate-x-0 dark:border-neutral-400/30 dark:bg-neutral-800/60"
	>
		<div
			class="glass relative flex w-full rounded-full transition-colors duration-300 hover:bg-neutral-400/10 dark:hover:bg-neutral-500/5"
		>
			{#each routes as { name, icon, path }}
				<button
					aria-label={`Navigate to ${name}`}
					onclick={() => setRoute(path)}
					class={`z-50 flex h-9 w-16 items-center justify-center transition duration-300 xs:w-20`}
				>
					<p
						class="hidden transition-all duration-300 xs:flex"
						class:font-medium={$currentRoute === path}
					>
						{name}
					</p>
				</button>
			{/each}
			<span
				class={`pointer-events-none absolute block h-9 rounded-full bg-emerald-400/30 transition duration-500 ease-out dark:bg-emerald-300/20`}
				style={`transform: translateX(${routes.findIndex((r) => r.path === $currentRoute) * 100}%); width: ${100 / routes.length}%`}
			></span>
		</div>
	</div>
{/if}
