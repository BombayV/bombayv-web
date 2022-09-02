<script setup lang="ts">
defineProps({
  pages: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="z-50 fixed w-full flex items-center justify-between py-3 bg-zinc-200 transition duration-150 dark:bg-zinc-900 bt-shadow">
    <NuxtLink to="/" class="text-4xl font-semibold italic dark:text-white font-alex ml-4">Bombay</NuxtLink>
    <div class="font-medium flex gap-4 text-lg dark:text-zinc-50">
      <NuxtLink v-for="page in pages" :to="page.path">{{ page.name }}</NuxtLink>
    </div>
    <div class="flex items-center mr-4">
      <NuxtLink to="/login" class="text-zinc-800 dark:text-zinc-50 font-semibold py-2 px-4 transparent">Log In</NuxtLink>
      <NuxtLink to="/register" class="bg-indigo-400 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg duration-150">Sign Up</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.bt-shadow {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}
</style>