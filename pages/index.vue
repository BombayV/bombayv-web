<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: 'navbar'
})
</script>

<template>
  <NuxtLayout>
    <div>
      <h1 class="text-red-500 dark:text-white">Nuxt Routing set up successfully!</h1>
      <p>Current route: {{ route.path }}</p>
      <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    </div>
  </NuxtLayout>
</template>
