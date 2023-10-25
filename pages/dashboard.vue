<script lang="ts" setup>
definePageMeta({
  title: 'Dashboard',
  ogTitle: 'Dashboard',
  middleware: ['user'],
  layout: 'navbar',
});
</script>

<template>
  <NuxtLayout>
    <div>
      <h1 class="">Dashboard</h1>
    </div>
  </NuxtLayout>
</template>
