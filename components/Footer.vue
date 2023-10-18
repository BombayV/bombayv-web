<template>
  <section class="flex flex-col items-center py-16">
    <h1 class="font-semibold text-2xl sm:text-4xl">Want to explore more?</h1>
    <p class="font-light text-sm mt-2 sm:text-lg">Learn more about myself as a person.</p>
    <div class="flex flex-col sm:flex-row gap-4 mt-4">
      <NuxtLink class="btn" to="/gallery">
        Gallery
      </NuxtLink>
      <NuxtLink class="btn" to="/projects">
        Old Projects
      </NuxtLink>
    </div>
  </section>
  <footer class="relative w-full">
    <div class="mx-auto max-w-7xl">

    </div>
  </footer>
</template>
<script setup lang="ts">
</script>