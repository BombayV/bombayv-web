<script lang="ts">
	import { scale, fade } from 'svelte/transition';

	interface Props {
		src: string | null;
		onclick: (e: MouseEvent) => void;
		children: () => any;
	}

	let { src, onclick, children }: Props = $props();

	function self(fn: (e: MouseEvent) => void) {
		return (e: MouseEvent) => {
			const target = e.target as HTMLElement | null;
			if (
				target === e.currentTarget ||
				(target && e.currentTarget === target.parentElement) ||
				target?.parentElement?.tagName === 'PICTURE'
			) {
				fn(e);
			}
		};
	}
</script>

{#if src}
	<div
		in:fade
		out:fade={{ duration: 300, delay: 250 }}
		class="fixed inset-0 z-50 flex max-h-full max-w-full select-none items-center justify-center bg-black/50"
	>
		<div class="relative h-full max-h-full w-full max-w-full bg-black/50">
			<button
				onclick={self(onclick)}
				aria-label="Close image viewer"
				type="button"
				in:scale={{ duration: 300, delay: 100, start: 0.7 }}
				out:scale={{ duration: 250, delay: 0, start: 0.6 }}
				class="relative h-full max-h-full w-full max-w-full"
			>
				{@render children()}
			</button>
		</div>
	</div>
{/if}
