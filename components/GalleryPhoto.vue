<script lang="ts" setup>
defineProps<{
  id: string;
  image: string;
  name?: string;
  description?: string;
}>();
</script>

<template>
  <div class="relative rounded-lg overflow-clip select-none cursor-pointer group">
    <NuxtImg
      :src="`https://mlbpkkmmhrbqxadyssrp.supabase.co/storage/v1/object/public/gallery/${name}`"
      :alt="`${name ? name : `Image ${id}`}`"
    />
    <div
      class="absolute bottom-0 bg-black bg-opacity-50 text-left w-full px-2 py-1 translate-y-full group-hover:translate-y-0 transition-transform duration-200"
    >
      <p v-if="name" class="text-lg font-medium text-text-100">{{ name }}</p>
    </div>
  </div>
</template>
