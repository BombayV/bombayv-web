<script lang="ts" setup>
import { generateUrl } from "~/utils/generateUrl";

defineProps<{
  file: File;
}>();

const bytesToMb = (bytes: number): string => {
  return (bytes / 1024 / 1024).toFixed(2) + ' MB';
};
</script>

<template>
  <div class="relative h-40 drop-shadow-lg rounded-lg overflow-clip border-2 border-background-200">
    <NuxtImg :src="generateUrl(file)" :alt="file.name" class="w-full h-full object-cover" />
    <div
      class="flex justify-between items-center py-1 px-2 w-full bg-black bg-opacity-50 absolute bottom-0 left-0"
    >
      <p class="text-xs text-background-50">
        {{ file.name.length > 20 ? file.name.substring(0, 20) + '...' : file.name }}
      </p>
      <p class="text-xs text-background-50">
        {{ bytesToMb(file.size) }}
      </p>
    </div>
    <button
      @click="$emit('remove')"
      type="button"
      class="absolute top-0 right-0 bg-error-100 hover:bg-error-200 transition-colors duration-200 mr-2 mt-2 rounded-lg h-8 w-8 grid place-items-center"
    >
      <Icon icon="delete" className="fill-background-50 w-4 h-4" />
    </button>
  </div>
</template>
