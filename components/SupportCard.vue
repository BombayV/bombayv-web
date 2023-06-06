<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
}>()
</script>

<template>
  <div class="h-56 grow rounded-lg flex flex-col items-center justify-center text-center relative px-4">
    <slot/>
    <p class="text-neutral-200 font-extrabold text-xl mt-4">{{ title }}</p>
    <p class="text-neutral-300 font-light mt-1">{{ description }}</p>
  </div>
</template>