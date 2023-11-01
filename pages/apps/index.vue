<script lang="ts" setup>
import { TimelineData } from "~/components/types/common";

definePageMeta({
  layout: 'navbar',
});

const timelineData: TimelineData[] = [
  {
    title: 'Colorpicker from image',
    description: 'A simple yet functional app to take an image and get the color palette from it.',
    path: '/apps/colorpicker',
    date: new Date("2023-11-01"),
  },
];
</script>

<template>
  <NuxtLayout>
    <section class="flex flex-col items-center mx-auto w-full text-center relative max-w-7xl px-6 py-8 md:py-16 h-full grow">
      <h1 class="text-3xl lg:text-4xl 2xl:text-5xl">Applications</h1>
      <span class="block h-0.5 w-20 bg-background-800 my-4"></span>
      <p class="text-base lg:text-lg 2xl:text-xl">Some useful JS applications that I have created.</p>
      <div class="relative flex flex-wrap mx-auto md:py-8 py-16 w-3/4 xl:w-4/6 px-4 md:px-0 before:content-[''] before:absolute before:w-1 before:h-full before:bg-accent-300 md:before:left-1/2 before:left-0 before:rounded-2xl">
        <TimelineItem v-for="(project, idx) in timelineData" :key="project" :timeline="project"/>
      </div>
    </section>
  </NuxtLayout>
</template>
