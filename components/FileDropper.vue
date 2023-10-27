<script lang="ts" setup>
defineProps<{
  files: FileList | null;
}>();

const emit = defineEmits(['changeFiles', 'removeFile']);

const fileInput = ref<HTMLInputElement | null>(null);
const isDragging = ref(false);

const onDrop = (e: DragEvent) => {
  e.stopPropagation()
  if (e.dataTransfer?.files) {
    emit('changeFiles', e.dataTransfer.files);
    isDragging.value = false;
  }
};

const onDragOver = (e: DragEvent) => {
  e.preventDefault();
  isDragging.value = true;
};

const onDragLeave = (e: DragEvent) => {
  e.preventDefault();
  isDragging.value = false;
};
</script>

<template>
  <div
    @drop.prevent="onDrop"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    class="relative w-full max-w-xl h-72 xl:h-80 bg-background-100 ring-8 transition duration-200 ring-opacity-100 drop-shadow-lg flex flex-col items-center justify-center rounded-xl"
    :class="`${isDragging ? 'ring-green-500' : 'ring-background-400'}`"
  >
    <div
        v-if="!files || files.length === 0"
        class="flex flex-col items-center w-full"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
        <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6.905 9.97a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72V18a.75.75 0 001.5 0v-4.19l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clip-rule="evenodd" />
        <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
      </svg>
      <p class="mt-2 font-light">Drop files here</p>
      <div class="relative w-1/6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t-2 border-background-400"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-1 text-sm bg-background-100">or</span>
        </div>
      </div>
      <label for="file-upload" class="text-sm btn-primary rounded-lg px-4 py-2 mt-2 btn">
        Click here
      </label>
      <input
          ref="fileInput"
          id="file-upload"
          type="file"
          @change="$emit('changeFiles', $event.target.files)"
          accept="image/png, image/jpeg, image/jpg, image/webp"
          multiple
      />
    </div>
    <div
        v-else
        class="grid grid-cols-2 md:grid-cols-3 row-auto gap-4 w-full relative px-4 py-4 h-full overflow-y-auto"
    >
      <UploadPreview v-for="file in files" :key="file.name" :file="file" @remove="$emit('removeFile', file.name)" />
    </div>
  </div>
</template>