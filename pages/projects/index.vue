<script setup lang="ts">
definePageMeta({
  title: 'Projects'
})
</script>

<template>
	<div class="relative pt-24 grad-sm lg:grad-lg bg-back-wt pb-8">
		<Head>
			<Title>{{ $route.meta.title }}</Title>
		</Head>
    <!-- Vertical timeline of events -->
    <div class="relative flex flex-wrap mx-auto w-3/4 xl:w-4/6 px-4 md:px-0 before:content-[''] before:absolute before:w-1 before:h-full before:bg-zinc-400 md:before:left-1/2 before:left-0 before:rounded-xl">
      <TimelineItem v-for="i in 10" :key="i" />
    </div>
	</div>
</template>

<style scoped>

</style>