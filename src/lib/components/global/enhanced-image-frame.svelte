<script lang="ts">
	interface Props {
		alt: string;
		class?: string;
		onclick?: () => void;
		href?: string;
		target?: string;
		children: () => any;
	}

	let { alt, class: className, onclick, href, target, children }: Props = $props();
</script>

{#if href}
	<a
		{href}
		{target}
		rel={target === '_blank' ? 'noopener noreferrer' : undefined}
		aria-label={`View ${alt}`}
		class={`relative block h-full w-full rounded-lg border border-black/10 bg-linear-to-tr from-neutral-50 to-neutral-100 p-2 shadow-2xl shadow-neutral-500/30 drop-shadow-lg dark:border-white/20 dark:from-neutral-700 dark:to-neutral-800 dark:shadow-black/40 ${className}`}
	>
		<span
			class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-400 bg-neutral-50 dark:border-neutral-500 dark:bg-neutral-900"
		>
			{@render children()}
		</span>
	</a>
{:else}
	<button
		aria-label={`View ${alt}`}
		type="button"
		{onclick}
		class={`relative h-full w-full rounded-lg border border-black/10 bg-linear-to-tr from-neutral-50 to-neutral-100 p-2 shadow-2xl shadow-neutral-500/30 drop-shadow-lg dark:border-white/20 dark:from-neutral-700 dark:to-neutral-800 dark:shadow-black/40 ${className}`}
	>
		<span
			class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-400 bg-neutral-50 dark:border-neutral-500 dark:bg-neutral-900"
		>
			{@render children()}
		</span>
	</button>
{/if}
