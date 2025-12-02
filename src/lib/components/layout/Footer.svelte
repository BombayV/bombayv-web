<script lang="ts">
	import { ExternalLink, Github, Instagram, Linkedin, Sticker } from '@lucide/svelte';
	import Link from '$lib/components/global/link.svelte';

	const lastUpdated = '2025-12-02T12:00:00Z';
</script>

<footer
	class="flex w-full flex-col gap-y-8 border-t border-t-black/10 px-6 py-8 md:px-10 md:pt-16 dark:border-t-white/10"
>
	<div class="mx-auto w-full max-w-5xl px-6 md:px-8 lg:px-12">
		<div class="flex w-full justify-between">
			<div>
				<Sticker class="size-14 drop-shadow-sm" />
				<p class="mt-2 text-base font-medium tracking-wide md:text-lg">
					Mauricio Sebastian Rivera Perez
				</p>
				<p class="text-sm text-neutral-600 drop-shadow-sm md:text-base dark:text-neutral-400">
					If you can imagine it, you can create it.
				</p>
			</div>
			<div class="flex gap-x-16">
				<div class="flex flex-col gap-y-4">
					<h2 class="text-xs font-medium uppercase text-neutral-500">Contact</h2>
					<Link href="mailto:me@bombayv.com">
						<span class="flex items-center justify-center gap-x-1">
							Email
							<ExternalLink class="mb-0.5 size-4" />
						</span>
					</Link>
				</div>
				<div class="flex flex-col gap-y-4">
					<h2 class="text-xs font-medium uppercase text-neutral-500">Main</h2>
					<Link href="/">About</Link>
					<Link href="/gallery">Gallery</Link>
					<Link href="/portfolio">Portfolio</Link>
					<Link href="/contact">Contact</Link>
				</div>
			</div>
		</div>
		<div class="mt-16 flex flex-col items-center">
			<span
				class="mb-6 h-0.5 max-w-sm rounded-full bg-neutral-400/50 md:w-40 dark:bg-neutral-400/50"
			></span>
			<p class="text-sm dark:text-neutral-300">
				&copy; 2021 - {new Date().getFullYear()} Mauricio Sebastian Rivera Perez. All rights reserved.
			</p>
			<p class="text-xs text-neutral-500 dark:text-neutral-400">
				Last updated: {new Date(lastUpdated).toLocaleDateString()}
			</p>
		</div>
	</div>
</footer>
