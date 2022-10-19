<script setup lang="ts">
interface Path {
  name: string;
  path: string;
}

const route = useRoute();
const pages = computed(() => {
  const paths :Array<Path> = [
    { path: '/', name: 'Home' },
    { path: '/blog', name: 'Blog' },
    { path: '/projects', name: 'Projects' },
    { path: '/gallery', name: 'Gallery' },
  ]
  // Add active property to each path
  return paths.map((path) => {
    return {
      ...path,
      active: route.path === path.path || path.path.includes('/blog') && route.path.includes('/blog') || path.path.includes('/projects') && route.path.includes('/projects'),
    }
  })
});

const formattedPath = computed(() =>{
  const name = route.name.toString();
  if (name === 'index') return 'Home'
  if (name === 'blog-id') return 'Blog Post'

  return name.charAt(0).toUpperCase() + name.slice(1)
})

const sidebar = useState<boolean>('sidebar', () => false)
</script>

<template>
  <div class="z-30 absolute w-full flex items-center justify-between py-4 transition duration-150">
    <NuxtLink to="/" class="text-3xl italic font-alex ml-4" :class="route.name === 'index' ? 'text-zinc-200 dark:text-white' : 'text-zinc-900 dark:text-zinc-200'">Bombay</NuxtLink>
    <div class="hidden md:flex font-semibold gap-4 text-lg dark:text-zinc-50 font-mont">
      <NuxtLink v-for="page in pages" :to="page.path" :class="page.active && 'underline text-indigo-600 dark:text-indigo-500'">{{ page.name }}</NuxtLink>
    </div>
    <div class="hidden md:flex items-center mr-4 font-mont font-semibold">
      <NuxtLink to="/login" class="text-zinc-800 dark:text-zinc-50 py-2 px-4 transparent">Log In</NuxtLink>
      <NuxtLink to="/register" class="bg-indigo-600 hover:bg-indigo-500 text-zinc-50 font-bold py-2 shadow-md px-4 rounded-lg duration-150">Sign Up</NuxtLink>
    </div>
		<button type="button" @click="sidebar = true" aria-label="Sidebar" class="md:hidden block mr-4 hover:bg-zinc-700 p-1.5 rounded focus:ring-2 focus:ring-indigo-500 hover:bg-shadow duration-200">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-black dark:stroke-zinc-50">
				<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
		</button>
  </div>
	<Transition name="slide">
		<div v-if="sidebar" class="fixed z-30 w-full px-2 flex flex-col md:hidden">
			<div class="w-full flex justify-between mt-4 items-center font-semibold text-lg pr-full bg-zinc-300 dark:bg-zinc-800 py-2 rounded-t-lg pl-4 shadow">
				<span class="font-bold underline font-mont pl-1 dark:text-white">{{ formattedPath }}</span>
				<button type="button" @click="sidebar = false" aria-label="Sidebar" class="mr-4 p-1.5 bg-zinc-400 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-900 hover:bg-zinc-500 focus:ring-[3px] focus:ring-indigo-400 outline-none rounded duration-200">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex flex-col font-mont font-semibold w-full bg-zinc-300 pb-4 rounded-b-lg dark:bg-zinc-800 dark:text-zinc-50">
				<NuxtLink @click="sidebar = false" class="mx-3 py-1.5 px-2.5 rounded hover:bg-zinc-400 dark:hover:bg-zinc-900 duration-150" v-for="page in pages" v-show="!page.active" :to="page.path">{{ page.name }}</NuxtLink>
				<NuxtLink class="mx-3 py-1.5 px-2.5 text-indigo-500 rounded hover:bg-zinc-400 dark:hover:bg-zinc-900 duration-150">Log in</NuxtLink>
				<NuxtLink class="mx-3 py-1.5 px-2.5 text-indigo-500 rounded hover:bg-zinc-400 dark:hover:bg-zinc-900 duration-150">Register</NuxtLink>
			</div>
		</div>
	</Transition>
  <div v-if="sidebar" @click="sidebar = false" class="h-full w-full fixed"></div>
</template>

<style scoped>
.bt-shadow {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
}

.dark .bt-shadow {
	box-shadow: 0 0 12px rgba(0, 0, 0, 0.7);

}
</style>