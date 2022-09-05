<script setup lang="ts">
const pages : Array<Object> = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Posts',
    path: '/posts',
  },
  {
    name: 'Projects',
    path: '/projects',
  }
];


const pics = ref([]);

onMounted(async () => {
  // Fetch the data from the API and get the images
  const resp = await fetch('https://ubcdby3t.directus.app/items/gallery');
  const respData = await resp.json();
  for (const pic of respData.data) {
    if (pic.photo) {
      pics.value.push(`https://ubcdby3t.directus.app/assets/${pic.photo}?&quality=65`);
    }
  }
});
</script>

<template>
  <div>
    <Navbar :pages="pages"/>
    <h1 class="text-7xl pt-24 pb-4 font-play font-bold italic border-b-2 border-zinc-500 text-zinc-900 dark:text-zinc-200 text-center mx-auto w-96 duration-150">Gallery</h1>
    <div v-if="pics.length !== 0" class="bg-zinc-200 dark:bg-zinc-900 px-14 py-4 columns-sm gap-6">
      <img v-for="image in pics" class="rounded-md img-shadow border dark:border-zinc-800 mt-6 duration-150" :src="image" alt="Loading image..." >
    </div>
    <p v-else class="text-3xl text-zinc-900 font-mont font-semibold mt-5 dark:text-zinc-200 text-center mx-auto w-96 duration-150">No images to show :(</p>
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