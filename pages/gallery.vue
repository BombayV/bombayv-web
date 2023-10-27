<script lang="ts" setup>
definePageMeta({
  layout: 'navbar',
});

const gallery = useGallery();
const images = ref(gallery.getGallery());
</script>

<template>
  <NuxtLayout>
    <section class="flex flex-col items-center mx-auto w-full text-center relative max-w-7xl px-6">
      <h1 class="text-3xl lg:text-4xl 2xl:text-5xl">Photo Gallery</h1>
      <span class="block h-0.5 w-20 bg-background-800 my-4"></span>
      <p class="text-base lg:text-lg 2xl:text-xl">Explore my life through my memories.</p>
      <div class="columns-1 md:columns-2 xl:columns-3 space-y-4 mt-8">
        <GalleryPhoto
          v-for="img in images"
          :key="img"
          :image="`https://picsum.photos/seed/${img}/500/500`"
          :name="`Image ${img}`"
          :description="`Desc ${img}`"
          :id="img.toString()"
        />
      </div>
    </section>
  </NuxtLayout>
</template>
