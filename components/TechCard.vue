<script lang="ts" setup>
import { TechItemData } from '~/components/types/common';

defineProps<{
  tech: TechItemData;
}>();
</script>

<template>
  <NuxtLink
    :to="tech.link"
    class="flex flex-col items-center justify-center gap-y-2 bg-background-100 w-full h-40 rounded-xl drop-shadow-lg hover:bg-accent-200 transition-colors duration-200"
    target="_blank"
    rel="noopener"
  >
    <Icon
      v-if="tech.icon && tech.svg === undefined"
      :icon="tech.icon"
      class-name="!w-12 !h-12 fill-background-600"
    />
    <span
      v-else-if="tech.svg !== false"
      v-html="tech.svg"
      class="relative w-12 h-12 fill-background-600"
    ></span>
    <NuxtImg
      v-else
      :src="`/icons/${tech.icon}.png`"
      class="h-12 w-12 object-contain"
      :class="tech.burn ? 'mix-blend-color-burn' : ''"
      :alt="tech.name"
    />
    <p class="text-xl lg:text-2xl font-medium text-background-700">{{ tech.name }}</p>
  </NuxtLink>
</template>
