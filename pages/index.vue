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
		<div class="h-screen w-full px-4 grad-sm lg:grad-lg dark:bg-small-pt lg:dark:bg-big-pt bg-small-wt lg:bg-big-wt flex items-center justify-center flex-col">
			<h1 class="text-5xl text-center font-bold dark:text-zinc-200">Welcome, I'm <span class=" font-s text-grad">Mauricio</span></h1>
			<h2 class="text-lg font-medium dark:text-neutral-500 text-neutral-600 pt-2">A teenager who trying to become a developer.</h2>
		</div>
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