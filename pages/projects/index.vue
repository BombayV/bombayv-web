<script setup lang="ts">
definePageMeta({
  title: 'Projects',
  layout: 'navbar'
})

type Project = {
	title: string
	description: string
	date: string
	url: string
}

const loading = ref<boolean>(true);
const error = ref<string>('');
const projects = ref<Project[]>()

onMounted(async () => {
	const rawData = await fetch('https://ubcdby3t.directus.app/items/projects', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
	const data = await rawData.json()
  // Organize by date oldest to newest
	projects.value = data.data.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  })
	setTimeout(() => {
		if (projects.value) {
			loading.value = false
		} else {
			error.value = 'Could not load projects'
		}
	}, 100)
})
</script>

<template>
	<div v-if="!loading" class="relative pt-24 grad-sm lg:grad-lg bg-back-wt min-h-screen pb-8">
		<Head>
			<Title>{{ $route.meta.title }}</Title>
		</Head>
    <!-- Vertical timeline of events -->
    <div class="relative flex flex-wrap mx-auto w-3/4 xl:w-4/6 px-4 md:px-0 before:content-[''] before:absolute before:w-1 before:h-full before:bg-zinc-400 md:before:left-1/2 before:left-0 before:rounded-xl">
      <TimelineItem v-for="project in projects" :key="project.id" :title="project.title" :description="project.description" :link="project.url" :date="project.date"/>
    </div>
	</div>
	<Loading v-else :loadText="error"/>
</template>

<style scoped>

</style>