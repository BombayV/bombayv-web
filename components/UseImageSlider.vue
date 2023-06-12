<script lang="ts" setup>
defineProps<{
  currentImage: string;
}>();
</script>

<template>
  <div class="h-screen w-full bg-black fixed top-0 left-0 z-50 flex flex-col justify-center">
    <button @click="$emit('close', '')" type="button" class="top-0 right-0 m-4 absolute btn btn-square z-10">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <div class="grow w-full h-full relative flex items-center justify-center px-8">
      <NuxtImg :src="currentImage" :alt="currentImage" fit="contain" quality="80" loading="lazy" :placeholder="50" class="object-contain max-h-full max-w-full object-center"/>
    </div>
  </div>
</template>