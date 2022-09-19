<script setup lang="ts">
definePageMeta({
  title: 'Home',
})

const loaded = ref(false)
onMounted(() => {
  loaded.value = true
})
</script>

<template>
	<div class="w-full font-mont h-screen">
		<Head>
			<Title>{{ $route.meta.title }}</Title>
		</Head>
		<main class="h-screen w-full px-4 grad-sm lg:grad-lg dark:bg-small-pt lg:dark:bg-big-pt bg-small-wt lg:bg-big-wt flex items-center justify-center flex-col">
      <Transition name="title">
        <h1 v-if="loaded" class="text-5xl text-center font-bold md:text-7xl lg:text-8xl dark:text-zinc-200 px-6">Hello, I'm <span class="text-grad">Mauricio</span></h1>
      </Transition>
      <Transition name="desc">
        <div v-if="loaded"  class="pt-2 flex flex-col items-center justify-center">
          <p class="text-lg font-medium text-center dark:text-neutral-500 text-neutral-600 md:text-xl lg:text-2xl text-left">Student, photographer, and future computer scientist.</p>
          <span class="animate-bounce pt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-8 h-8 stroke-indigo-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </span>
        </div>
      </Transition>
		</main>
    <div class="min-h-[83.3%] flex flex-col py-8 px-14 md:px-20 lg:px-28 xl:px-36 mx-auto">
      <div>
        <h2 class="font-bold text-4xl md:text-5xl lg:text-6xl lg:pb-2 dark:text-zinc-50">About Me</h2>
        <p class="text-md lg:text-xl font-medium text-zinc-700 pt-2 dark:text-zinc-300 leading-10 xl:pr-64 2xl:pr-96">
          Hello! My name is <span class="text-grad font-semibold">Mauricio Rivera</span>. I am a 17 year old teenager currently residing in <span class="text-grad font-semibold">New York, United States.</span>
          I am a <span class="text-grad font-semibold">WIP developer</span>, working both with backend and frontend technologies. Additionally, I do photography and UX design
          as a hobby. I am currently working on a few projects, and I am always looking for new opportunities to learn
          and grow.
        </p>
      </div>
      <div class="mt-4 md:mt-8">
        <h2 class="font-bold text-4xl md:text-5xl lg:text-6xl lg:pb-2 dark:text-zinc-50">Github Statistics</h2>
        <p class="text-md lg:text-xl font-medium text-zinc-700 pt-2 dark:text-zinc-300 leading-10 xl:pr-64 2xl:pr-96">
          I am a firm believer in the <span class="text-grad font-semibold">open-source software community</span>, and I am always looking to contribute to said community.
          Here are some statistics about my Github account displayed in a cool way.
        </p>
      </div>
    </div>
    <Footer />
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