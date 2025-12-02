<script lang="ts">
	import { fade } from 'svelte/transition';

	let { children } = $props();
</script>

<div class="flex flex-col">
	<div
		in:fade={{ duration: 500, delay: 250 }}
		out:fade={{ duration: 250, delay: 0 }}
		class="relative mx-auto h-auto min-h-dvh w-full max-w-5xl px-6 md:px-8 lg:px-12"
	>
		{@render children()}
	</div>
</div>
