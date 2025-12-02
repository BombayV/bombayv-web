<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="relative flex h-dvh w-full flex-col items-center justify-center">
	<h1 class="text-7xl font-bold md:text-8xl">{page.status}</h1>
	<p class="mt-0.5 text-2xl text-neutral-600 md:text-3xl dark:text-neutral-400">
		{page.error ? page.error.message : 'An unexpected error occurred.'}
	</p>
	<button
		class="mt-4 rounded-md border-b-2 border-emerald-700 bg-emerald-600 px-4 py-2 text-white drop-shadow-md transition-transform duration-300 hover:scale-105"
		onclick={() => history.back()}>Go back</button
	>
	<span
		class="absolute left-0 top-0 -z-10 h-full w-full bg-linear-to-br from-transparent to-emerald-300 opacity-50 dark:to-emerald-950"
	></span>
</div>
