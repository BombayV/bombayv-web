<script lang="ts" setup>
import { ProjectData } from '~/components/types/common';

defineProps<{
  project: ProjectData;
}>();
</script>

<template>
  <div class="relative px-4 py-4 bg-background-100 rounded-xl drop-shadow-lg w-full">
    <NuxtLink
      :to="project.link"
      target="_blank"
      class="relative w-full group h-44 overflow-hidden rounded-lg flex items-center justify-center"
    >
      <NuxtImg
        :src="`/projects/${project.image}`"
        :alt="project.name"
        class="min-w-full object-cover object-center"
      />
      <span
        class="bg-black bg-opacity-0 group-hover:bg-opacity-50 w-full h-full absolute transition duration-200"
      ></span>
    </NuxtLink>
    <div class="flex justify-between pt-4 px-1">
      <p class="text-xl font-semibold text-background-700">{{ project.name }}</p>
      <p class="text-base font-light text-accent-700">{{ project.date.toDateString() }}</p>
    </div>
    <p class="text-lg text-background-700 text-left px-1 pb-2">{{ project.description }}</p>
  </div>
</template>
