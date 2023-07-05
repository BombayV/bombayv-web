<script lang="ts" setup>
const allImages = ref<string[]>([]);
const currentImage = ref<string>('');
const glob = import.meta.glob('/public/gallery/*.jpg', { eager: true });
allImages.value = await UseImages(glob);

const setImageSlider = (image: string) => {
  currentImage.value = image;
  if (image === '') {
    document.body.classList.remove('overflow-hidden');
  } else {
    document.body.classList.add('overflow-hidden');
  }
};

let loadedImages = ref<number[]>([]);
const showImages = ref<boolean>(false);
const handleLoad = (index: number) => {
  loadedImages.value.push(index);
  for (let i = 0; i < 12; i++) {
    if (!loadedImages.value.includes(i)) return;
    showImages.value = true;
  }
};

onMounted(() => {
  document.body.classList.add('overflow-hidden');
});
</script>

<template>
  <div>
    <NuxtLayout name="navbar">
      <div class="pt-20 max-w-7xl relative mx-auto px-4 mb-4 md:mb-6 flex items-center flex-col">
        <h1 class="text-5xl font-bold text-primary-content/90">Gallery</h1>
        <NuxtLink
          to="/personal"
          class="text-lg font-light mt-2 border-b border-b-transparent hover:border-b-primary-content transition duration-200"
          >Back to Personal</NuxtLink
        >
      </div>
      <div
        class="w-full relative min-h-screen max-w-7xl mx-auto colums-1 md:columns-2 xl:columns-3 space-y-4 px-4">
        <NuxtImg
          v-for="(image, id) in allImages"
          :key="image"
          @load="handleLoad(id)"
          @click="setImageSlider(image)"
          :src="image"
          :alt="image"
          fit="cover"
          quality="80"
          loading="lazy"
          format="webp"
          :placeholder="50"
          class="cursor-pointer object-cover max-h-full max-w-full object-center rounded-sm drop-shadow-lg shadow-md bg-neutral-content/50 transition duration-300"
          :class="showImages && loadedImages.includes(id) ? 'opacity-100 hover:opacity-80' : 'opacity-0'"
        />
      </div>
      <div
        v-if="!showImages"
        class="absolute top-1/2 left-1/2 max-w-7xl -translate-x-1/2 -translate-y-1/2">
        <p class="text-3xl text-primary-content/50 font-extralight">Loading...</p>
      </div>
      <Transition name="fade-in">
        <UseImageSlider :currentImage="currentImage" @close="setImageSlider" v-if="currentImage" />
      </Transition>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
</style>
