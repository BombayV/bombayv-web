<script lang="ts" setup>
const props = defineProps<{
  error: {
    statusCode: number;
    statusMessage: string;
  };
}>();
</script>

<template>
  <div class="relative h-screen flex flex-col items-center justify-center bg-scribble">
    <h1 class="font-black text-9xl text-primary-content">{{props.error.statusCode}}</h1>
    <p class="font-semibold text-primary-content/70 text-2xl text-center">{{props.error.statusMessage}}</p>
    <div class="relative flex items-center justify-center gap-x-4 mt-6">
      <NuxtLink class="border-b border-b-transparent text-blue-100 font-medium text-lg transition-colors duration-200 hover:border-b-blue-300" to="/">Home</NuxtLink>
      <NuxtLink class="border-b border-b-transparent text-blue-100 font-medium text-lg transition-colors duration-200 hover:border-b-blue-300" to="/personal">Personal</NuxtLink>
      <NuxtLink class="border-b border-b-transparent text-blue-100 font-medium text-lg transition-colors duration-200 hover:border-b-blue-300" to="/public">Public</NuxtLink>
      <NuxtLink class="border-b border-b-transparent text-blue-100 font-medium text-lg transition-colors duration-200 hover:border-b-blue-300" to="/support">Support</NuxtLink>
    </div>
  </div>
</template>
