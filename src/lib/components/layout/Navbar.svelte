<!-- @migration-task Error while migrating Svelte code: Unexpected token
https://svelte.dev/e/js_parse_error -->
<!-- @migration-task Error while migrating Svelte code: Unexpected token
https://svelte.dev/e/js_parse_error -->
<script lang="ts">
	import { sidebar } from '$lib/stores/stores';
	import { Sticker, Folder, Github, FileUser, Linkedin, FolderOpen } from '@lucide/svelte';
	import Sidebar from '$lib/components/layout/sidebar.svelte';
	import type { RouteData } from '$lib/types';
	import MenuNavigation from '$lib/components/layout/menu-navigation.svelte';
	import { fade } from 'svelte/transition';

	const toggleSidebar = () => sidebar.update((state) => !state);

	const routes: RouteData[] = [
		{ name: 'Github', path: 'https://github.com/BombayV', icon: Github },
		{
			name: 'Linkedin',
			path: 'https://www.linkedin.com/in/mauriveraperez/',
			icon: Linkedin
		},
		{ name: 'Resume', path: '/resume', icon: FileUser }
	];
</script>

<header
	class="fixed top-0 z-50 flex h-20 w-full items-center justify-between px-6 md:px-8 lg:px-12"
>
	<div class="flex items-center gap-x-2">
		<Sticker class="size-10 drop-shadow-sm" />
		<div class="flex flex-col">
			<h1 class="text-base font-semibold">Mauricio Rivera</h1>
			<p class="text-xs text-neutral-500 dark:text-neutral-400">
				AI + Software Engineer + IT Student
			</p>
		</div>
	</div>
	<div class="relative flex items-center gap-x-2">
		<MenuNavigation />
		<div class="relative">
			<button
				class="btn-icon relative flex size-11"
				class:btn-icon-active={$sidebar}
				on:click={toggleSidebar}
			>
				{#if $sidebar}
					<span transition:fade={{ duration: 200 }}>
						<FolderOpen class="absolute size-6" />
					</span>
				{:else}
					<span transition:fade={{ duration: 200 }}>
						<Folder class="absolute size-6" />
					</span>
				{/if}
			</button>
			{#if $sidebar}
				<Sidebar {routes} />
			{/if}
		</div>
	</div>
</header>
