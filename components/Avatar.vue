<script lang="ts" setup>
defineProps<{
  image: string,
  description: string,
}>();
</script>

<template>
  <div class="relative w-14 h-14 bg-background-700 rounded-full overflow-hidden grid place-items-center ring-4 ring-accent-400">
    <NuxtImg v-if="image && image.includes('https://')" :src="image" :alt="description" class="rounded-full object-cover w-full h-full" />
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 fill-background-200">
      <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
    </svg>
  </div>
</template>