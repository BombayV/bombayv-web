<script setup lang="ts">
const route = useRoute();

definePageMeta({
  layout: 'navbar',
});

useSeoMeta({
  title: "Home",
  ogTitle: "Home",
})
</script>

<template>
  <NuxtLayout>
    <section
      class="relative flex flex-col items-center justify-center h-96 md:h-[32rem] xl:h-[36rem] bg-background-100"
    >
      <h1 class="text-4xl z-10 drop-shadow-lg text-background-50 md:text-5xl xl:text-6xl">
        Hello, I'm <span class="text-gradient">Mauricio</span>
      </h1>
      <p class="mt-2 z-10 drop-shadow-lg text-background-100 lg:text-lg xl:text-xl">
        Web developer, photographer, and future computer scientist.
      </p>
      <div class="absolute w-full h-full flex items-center justify-center select-none">
        <NuxtImg
          src="/default_photos/intro_bg.jpg"
          alt="Background intro"
          class="absolute object-cover w-full h-full"
          :placeholder="true"
          sizes="100vw"
        />
        <span
          class="absolute block w-full h-full bg-black bg-opacity-30 top-0 left-0 backdrop-blur-sm"
        ></span>
      </div>
    </section>
  </NuxtLayout>
</template>
