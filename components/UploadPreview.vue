<script lang="ts" setup>
defineProps<{
  file: File
}>();

const generateUrl = (file: File) => {
  const url = URL.createObjectURL(file);
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);

  return url;
};

const bytesToMb = (bytes: number) => {
  return (bytes / 1024 / 1024).toFixed(2) + ' MB';
};
</script>

<template>
  <div class="relative h-40 drop-shadow-lg rounded-lg overflow-clip">
    <NuxtImg
        :src="generateUrl(file)"
        :alt="file.name"
        class="w-full h-full object-cover"
    />
    <div class="flex justify-between items-center py-1 px-2 w-full bg-black bg-opacity-50 absolute bottom-0 left-0">
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
      class="absolute top-0 right-0 bg-accent-500 mr-2 mt-2 rounded-lg p-1"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    </button>
  </div>
</template>