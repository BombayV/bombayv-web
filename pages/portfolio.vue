<script lang="ts" setup>
definePageMeta({
  layout: 'navbar',
});

useSeoMeta({
  title: 'Portfolio',
  description: 'Mauricio Rivera (Bombay) is a self-taught full-stack web developer with experience in JavaScript, TypeScript, Vue, Nuxt, React, Next, Node, and more. Currently working as a freelance web developer and studying Computer Science at NJIT.',
});

</script>

<template>
  <NuxtLayout>
    <section
      class="flex flex-col items-center mx-auto w-full text-center relative max-w-7xl px-6 pt-8 md:py-16 md:pb-8 h-full grow"
    >
      <h1 class="text-3xl lg:text-4xl 2xl:text-5xl">Portfolio</h1>
      <span class="block h-0.5 w-20 bg-background-800 my-4"></span>
      <p class="text-base lg:text-lg 2xl:text-xl">
        Here are some of my projects, current technologies I am using, and technologies I am learning.
      </p>
    </section>
  </NuxtLayout>
</template>