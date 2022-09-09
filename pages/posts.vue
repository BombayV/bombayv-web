<script setup lang="ts">
const posts = ref([]);

onMounted(async () => {

});
</script>

<template>
  <div>
    <h1 class="text-5xl pt-24 pb-4 font-mont font-bold border-b-2 border-zinc-500 text-zinc-900 dark:text-zinc-200 text-center mx-auto w-96 duration-150">Latest Posts</h1>
    <div class="flex flex-col items-center py-6 bg-zinc-200 dark:bg-zinc-900 gap-y-6">
      <div v-for="test in 1" class="w-4/6 bg-zinc-300 dark:bg-zinc-800 rounded-lg shadow-lg flex flex-col items-center font-mont px-6 py-5">
        <img src="https://picsum.photos/1920/1080" alt="Post image" class="h-48 rounded-md">
        <div class="flex items-end justify-between w-full text-zinc-900 dark:text-zinc-200 mt-2">
          <h1 class="text-xl font-mont font-bold">Test</h1>
          <p class="text-sm text-zinc-600 self-start">August 9, 2022</p>
        </div>
        <p class="text-zinc-900 dark:text-zinc-200 text-left text-sm break-all">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <NuxtLink to="/posts/" class="font-bold w-full text-center text-zinc-100 bg-indigo-400 border-b-[2px] border-r-[3px] border-indigo-500 hover:border-indigo-600 rounded mt-3 py-1.5 hover:bg-indigo-500 duration-200">Read More</NuxtLink>
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