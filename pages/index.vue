<script setup lang="ts">
definePageMeta({
  title: 'Home',
})
</script>

<template>
	<div class="w-full font-mont h-full">
		<Head>
			<Title>{{ $route.meta.title }}</Title>
		</Head>
		<main class="h-screen w-full px-4 grad-sm lg:grad-lg dark:bg-small-pt lg:dark:bg-big-pt bg-small-wt lg:bg-big-wt flex items-center justify-center flex-col">
			<h1 class="text-5xl text-center font-bold md:text-7xl lg:text-8xl dark:text-zinc-200 px-6">Welcome, I'm <span class="text-grad">Mauricio</span></h1>
			<p class="text-lg font-medium dark:text-neutral-500 text-neutral-600 pt-2 md:text-xl lg:text-2xl text-left">A teenager who trying to become a developer.</p>
		</main>
	</div>
</template>

<style scoped>
.text-grad {
	background: rgb(161,88,255);
	background: linear-gradient(90deg, rgba(161,88,255,1) 0%, rgba(195,115,255,1) 100%);

	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>