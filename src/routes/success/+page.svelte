<script lang="ts">
	let { data } = $props();
</script>

<div class="relative flex h-dvh w-full flex-col items-center justify-center">
	<h1 class="text-7xl font-bold md:text-8xl">{data.success ? 'Success' : 'Error'}</h1>
	<p class="mt-0.5 text-2xl text-neutral-600 md:text-3xl dark:text-neutral-400">
		{data.message}
	</p>
	<a
		href="/"
		class="mt-4 rounded-md border-b-2 border-emerald-700 bg-emerald-600 px-4 py-2 text-white drop-shadow-md transition-transform duration-300 hover:scale-105"
		>Go Home
	</a>
	<span
		class="absolute left-0 top-0 -z-10 h-full w-full bg-linear-to-br from-transparent to-emerald-300 opacity-50 dark:to-emerald-950"
	></span>
</div>
