<script setup lang="ts">
const user = useSupabaseUser()

definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <div>
    <NuxtLayout name="authnavbar">
      <div class="relative grid place-items-center min-h-screen w-full px-4 max-w-7xl mx-auto py-20">
        {{user}}
      </div>
    </NuxtLayout>
  </div>
</template>
