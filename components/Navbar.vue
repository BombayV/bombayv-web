<script setup lang="ts">
const route = useRoute()
defineProps({
  pages: {
    type: Array,
    required: true,
  },
})

const sidebar = useState<boolean>('sidebar', () => false)
</script>

<template>
  <div class="z-50 fixed w-full flex items-center justify-between py-3 bg-zinc-200 transition duration-150 dark:bg-zinc-900 bt-shadow">
    <NuxtLink to="/" class="text-4xl font-semibold italic dark:text-white font-alex ml-4">Bombay</NuxtLink>
    <div class="hidden md:flex font-medium gap-4 text-lg dark:text-zinc-50">
      <NuxtLink v-for="page in pages" :to="page.path">{{ page.name }}</NuxtLink>
    </div>
    <div class="hidden md:flex items-center mr-4">
      <NuxtLink to="/login" class="text-zinc-800 dark:text-zinc-50 font-semibold py-2 px-4 transparent">Log In</NuxtLink>
      <NuxtLink to="/register" class="bg-indigo-400 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg duration-150">Sign Up</NuxtLink>
    </div>
		<button @click="sidebar = true" class="md:hidden block mr-4 hover:bg-zinc-700 p-1.5 rounded focus:ring-2 focus:ring-indigo-500 hover:bg-shadow duration-200">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-black dark:stroke-zinc-50">
				<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
		</button>
  </div>
	<Transition name="slide">
		<div v-if="sidebar" class="fixed z-50 w-full px-2 flex flex-col">
			<div class="w-full flex justify-between mt-4 items-center font-semibold text-lg pr-full bg-zinc-300 py-2 rounded-t-lg pl-4">
				<span class="font-bold underline font-mont pl-1">{{ `${route.name.charAt(0).toUpperCase()}${route.name.slice(1)}` }}</span>
				<button @click="sidebar = false" class="mr-4 p-1.5 bg-zinc-400 hover:bg-zinc-500 focus:ring-[3px] focus:ring-indigo-400 outline-none rounded duration-200">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex flex-col font-mont font-semibold w-full bg-zinc-300 pb-4 rounded-b-lg">
				<NuxtLink class="mx-3 py-1.5 px-2.5 rounded hover:bg-zinc-400 duration-150" v-for="page in pages" :to="page.path">{{ page.name }}</NuxtLink>
				<NuxtLink class="mx-3 py-1.5 px-2.5 text-indigo-500 rounded hover:bg-zinc-400 duration-150">Log in</NuxtLink>
				<NuxtLink class="mx-3 py-1.5 px-2.5 text-indigo-500 rounded hover:bg-zinc-400 duration-150">Register</NuxtLink>
			</div>
		</div>
	</Transition>
</template>

<style scoped>
.bt-shadow {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}
</style>