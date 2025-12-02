<script lang="ts">
	import type { RouteData } from '$lib/types';
	import Link from '$lib/components/global/link.svelte';
	import { scale } from 'svelte/transition';

	let { routes }: { routes: RouteData[] } = $props();
</script>

<div
	transition:scale={{ duration: 300, start: 0.5, opacity: 0 }}
	class="btn-icon-active glass absolute right-0 w-40 origin-top-right translate-y-2 rounded-lg border px-6 py-4 text-text transition duration-300"
>
	<nav class="w-full">
		<ul class="relative flex w-full flex-col space-y-2">
			{#each routes as { name, path, icon }}
				{@const Icon = icon}
				<li class="w-full self-end">
					<Link href={path} transformOrigin="origin-right" class="w-full">
						<span class="flex w-full items-center justify-between gap-x-2 text-sm drop-shadow-sm">
							{name}
							<Icon class="size-4 drop-shadow-sm" />
						</span>
					</Link>
				</li>
			{/each}
		</ul>
	</nav>
</div>
