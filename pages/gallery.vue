<script setup lang="ts">
const pics = ref<Array<Object>>([]);
const activeData = useState('activeData', () => {
  return {
    title: '',
    src: ''
  }
});

onMounted(async () => {
  // Fetch the data from the API and get the images
  const resp = await fetch('https://ubcdby3t.directus.app/items/gallery');
  const respData = await resp.json();
  for (const pic of respData.data) {
    if (pic.photo) {
      pics.value.push({
				url:`https://ubcdby3t.directus.app/assets/${pic.photo}?&quality=65`,
				title: pic.title
			});
    }
  }
});
</script>

<template>
  <div class="h-auto bg-zinc-200 dark:bg-zinc-900 duration-150">
		<CoverImg @close="activeData.src = ''" v-if="activeData.src !== ''" :title="activeData.title" :imgUrl="activeData.src"/>
    <h1 class="text-6xl pt-24 pb-4 font-mont font-bold border-b-2 border-zinc-500 text-zinc-900 dark:text-zinc-200 text-center mx-auto w-96">Gallery</h1>
    <div v-if="pics.length !== 0" class="px-14 py-6 columns-sm gap-6">
      <img v-for="image in pics" @click="activeData = { title: image.title, src: image.url }" class="cursor-pointer hover:scale-105 rounded-md img-shadow border dark:border-zinc-800 mt-6 duration-150" :src="image.url" alt="Loading image...">
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
}
</style>