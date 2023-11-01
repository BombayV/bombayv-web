<script lang="ts" setup>
import { GalleryImage } from '~/components/types/common';

definePageMeta({
  layout: 'navbar',
});

const { getGallery, fetchStatus } = useGallery();
const images = ref<GalleryImage[]>([]);

onMounted(async () => {
  const fetchedImages = await getGallery();
  if (fetchedImages) {
    images.value = fetchedImages as GalleryImage[];
    const fetchedAsArray = Object.values(fetchedImages);
    if (fetchStatus.value.status === 'error') return;

    if (fetchedAsArray.length > 0) {
      fetchStatus.value.status = 'success';
    } else {
      fetchStatus.value.status = 'none';
    }
  }
});
</script>

<template>
  <NuxtLayout>
    <section
      class="flex flex-col items-center mx-auto w-full text-center relative max-w-7xl px-6 py-8 md:py-16 h-full grow"
    >
      <h1 class="text-3xl lg:text-4xl 2xl:text-5xl">Photo Gallery</h1>
      <span class="block h-0.5 w-20 bg-background-800 my-4"></span>
      <p class="text-base lg:text-lg 2xl:text-xl">Explore my life through my memories.</p>
      <div
        v-if="fetchStatus.status === 'success'"
        class="columns-1 md:columns-2 xl:columns-3 space-y-4 mt-16"
      >
        <GalleryPhoto v-for="img in images" :key="img" :image="img" :id="img.toString()" />
      </div>
      <div v-else class="grow relative grid place-items-center mt-6">
        <p v-if="fetchStatus.status === 'none'" class="text-center font-medium text-2xl">
          There are no images to display.
        </p>
        <p v-else-if="fetchStatus.status === 'loading'" class="text-center font-medium text-2xl">
          Loading...
        </p>
        <p v-else-if="fetchStatus.status === 'error'" class="text-center font-medium text-2xl">
          There was an error while fetching the images.
        </p>
      </div>
    </section>
  </NuxtLayout>
</template>
