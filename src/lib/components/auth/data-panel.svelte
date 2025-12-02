<script lang="ts">
	interface Props {
		title: string;
		header?: () => any;
		children: () => any;
		scrollEl?: HTMLElement | null;
	}

	let { children, title, header, scrollEl = $bindable() }: Props = $props();
</script>

<div
	class="glass relative z-50 mx-auto flex min-h-72 w-full flex-col rounded-xl border border-neutral-400/50 bg-neutral-300/30 text-text transition-colors duration-300 dark:border-neutral-400/30 dark:bg-neutral-800/60"
>
	<div class="flex h-10 w-full items-center justify-between border-b border-b-neutral-400/30 px-4">
		<h2 class="text-base text-text-foreground">{title}</h2>
		{@render header?.()}
	</div>
	<section bind:this={scrollEl} class="flex max-h-96 flex-col overflow-y-auto px-4 py-3">
		{@render children()}
	</section>
</div>
