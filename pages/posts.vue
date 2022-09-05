<script setup lang="ts">
const pages : Array<Object> = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Gallery',
    path: '/gallery',
  },
  {
    name: 'Projects',
    path: '/projects',
  }
];


const posts = ref([]);

onMounted(async () => {

});
</script>

<template>
  <div>
    <Navbar :pages="pages"/>
    <h1 class="text-5xl pt-24 pb-4 font-mont font-bold border-b-2 border-zinc-500 text-zinc-900 dark:text-zinc-200 text-center mx-auto w-96 duration-150">Latest Posts</h1>
    <div class="flex flex-col items-center py-6 bg-zinc-200 dark:bg-zinc-900 gap-y-6">
      <div v-for="test in 1" class="w-4/6 h-96 bg-zinc-300 dark:bg-zinc-800 rounded-lg shadow-lg flex flex-col items-center font-mont">
        <img src="https://picsum.photos/1920/1080" alt="Post image" class="h-48 rounded-md mt-4">
        <div class="flex items-center justify-between w-full text-zinc-900 dark:text-zinc-200 mt-2 px-6">
          <h1 class="text-xl font-mont font-bold">Test</h1>
          <p class="text-sm text-zinc-600 self-start">August 9, 2022</p>
        </div>
        <p class="text-zinc-900 dark:text-zinc-200 text-left mt-4 text-sm mx-6 break-all">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <NuxtLink to="/posts/test" class="font-bold w-full text-center bg-indigo-400 rounded py-1.5 px-6">Read More</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-shadow {
  box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
;
  object-fit: cover;
}
</style>