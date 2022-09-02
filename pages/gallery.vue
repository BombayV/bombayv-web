<script setup lang="ts">
const pages : Array<Object> = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Posts',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/projects',
  }
];


const pics = ref([]);

onMounted(() => {
  fetch(
    `https://api.unsplash.com/search/photos?client_id=XdFkXOSc75tYHGqFIFZMJ_8grUbnna7QeTuW7FYeLN0&query=people%40and%30nature`
  )
  .then((res) => res.json())
  .then((data) => {
    pics.value = data.results;
  });
});
</script>

<template>
  <div>
    <Navbar :pages="pages"/>
    <h1 class="text-7xl pt-24 pb-4 font-play font-bold italic border-b-2 border-zinc-500 text-zinc-900 dark:text-zinc-200 text-center mx-auto w-96 duration-150">Gallery</h1>
    <div class="bg-zinc-200 dark:bg-zinc-900 px-14 py-4 columns-sm gap-6">
      <img v-for="image in pics" class="rounded-md img-shadow border dark:border-zinc-800 mt-6 duration-150" :src="image.urls.regular">
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