<script setup lang="ts">
interface Picture {
  title: string;
  url: string;
}

const loading = ref<boolean>(true);
const error = ref<string>('');
const pics = ref<Array<Picture>>([]);
const max = ref<number>(8);
const activeData = useState<Picture>('activeData', () => {
  return {
    title: '',
    url: ''
  }
});

const activePics = computed(() => pics.value.slice(0, max.value));
const picHandler = (e) => {
  const photos = activePics.value;
  // Use the left and right arrow keys to navigate between photos
  const index = photos.findIndex((pic) => pic.url === activeData.value.url);
  if (e.key === 'ArrowLeft') {
    if (index === 0) {
      activeData.value = photos[photos.length - 1];
    } else {
      activeData.value = photos[index - 1];
    }
  } else if (e.key === 'ArrowRight') {
    if (index === photos.length - 1) {
      activeData.value = photos[0];
    } else {
      activeData.value = photos[index + 1];
    }
  } else if (e.key === 'Escape' || e.key === 'Backspace') {
    activeData.value = {
      title: '',
      url: ''
    };
  }
};

const handleClose = () => {
  activeData.value = {
    title: '',
    url: ''
  };
}

onMounted(async () => {
  // Fetch the data from the API and get the images
  const resp = await fetch('https://ubcdby3t.directus.app/items/gallery', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const respData = await resp.json();
  // Randomize the order of the images
  const random = respData.data.sort(() => Math.random() - 0.5);
  // Set the data
  for (const pic of random) {
    if (pic.photo) {
      pics.value.push({
				url:`https://ubcdby3t.directus.app/assets/${pic.photo}?&quality=50`,
				title: pic.title
			});
    }
  }
	setTimeout(() => {
		if (pics.value.length > 0) {
			loading.value = false;
      window.addEventListener('keyup', picHandler);
		} else {
			error.value = 'Could not load images';
		}
	}, 100);
});

definePageMeta({
  title: 'Gallery'
})
</script>

<template>
  <div v-if="!loading" class="h-auto bg-zinc-200 pb-8 dark:bg-zinc-900 duration-150">
		<Head>
			<Title>{{ $route.meta.title }}</Title>
		</Head>
		<CoverImg @close="handleClose" :useArrows="true" @left="picHandler({key: 'ArrowLeft'})" @right="picHandler({key: 'ArrowRight'})" v-if="activeData.url !== ''" :title="activeData.title" :imgUrl="activeData.url"/>
    <h1 class="text-5xl md:text-6xl pt-24 pb-4 font-mont font-bold border-b-2 border-zinc-500 text-zinc-900 dark:text-zinc-200 text-center mx-auto w-72" :class="activeData.url !== '' && 'blur'">Gallery</h1>
    <div v-if="pics.length !== 0" class="px-16 pt-6 pb-2 columns-xs 2xl:columns-sm gap-6" :class="activeData.url !== '' && 'blur'">
      <img v-for="image in activePics" @click="activeData = { title: image.title, url: image.url }" class="cursor-pointer hover:opacity-90 duration-150 transition-opacity rounded-md img-shadow border border-8 border-white dark:border-zinc-800 mt-6 duration-150" :src="image.url" loading="lazy" alt="Loading image...">
    </div>
		<button type="button" v-if="max < pics.length" @click="max += 7" class="mx-auto relative grid mt-6 place-items-center font-mont font-semibold dark:text-zinc-50 bg-indigo-400 text-zinc-50 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-600 px-4 rounded py-1.5 duration-200">Load More</button>
  </div>
	<Loading v-else :loadText="error"/>
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

img[data-src] {
	filter: blur(0.2em);
}

img {
	filter: blur(0em);
	transition: filter 0.5s;
}
</style>