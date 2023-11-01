<script lang="ts" setup>
defineProps<{
  file: File | null;
}>();

const emit = defineEmits(['changeFile']);

const isDragging = ref(false);

const onDrop = (e: DragEvent) => {
  e.stopPropagation();
  if (e.dataTransfer?.files) {
    emit('changeFile', e.dataTransfer.files[0]);
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

const handlePaste = (e: ClipboardEvent) => {
  e.preventDefault();
  if (e.clipboardData?.files) {
    emit('changeFile', e.clipboardData.files[0]);
  }
};



onMounted(() => window.addEventListener('paste', handlePaste));
onUnmounted(() => window.removeEventListener('paste', handlePaste));
</script>

<template>
  <div
      v-if="file === null"
      @drop.prevent="onDrop"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragLeave"
      :class="`${isDragging ? 'ring-green-500' : 'ring-background-400'}`"
      class="ring-8 transition duration-200 ring-opacity-100 max-w-full max-h-full relative bg-background-200 rounded-xl p-6 drop-shadow flex flex-col items-center justify-center">
    <p class="mt-2 font-light">Drop files here</p>
    <div class="relative w-1/6">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t-2 border-background-400"></div>
      </div>
      <div class="relative flex justify-center text-sm">
        <span class="px-1 text-sm bg-background-200">or</span>
      </div>
    </div>
    <p class="mt-2 font-light">Copy and paste</p>
    <div class="relative w-1/6">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t-2 border-background-400"></div>
      </div>
      <div class="relative flex justify-center text-sm">
        <span class="px-1 text-sm bg-background-200">or</span>
      </div>
    </div>
    <label for="file-upload" class="text-sm btn-primary rounded-lg px-4 py-2 mt-2 btn">
      Click here
    </label>
    <input
        ref="fileInput"
        id="file-upload"
        type="file"
        @change="$emit('changeFile', $event.target.files[0])"
        accept="image/png, image/jpeg, image/jpg, image/webp"
    />
  </div>
  <div v-else class="ring-8 transition duration-200 ring-opacity-100 max-w-full max-h-full relative bg-background-200 rounded-xl p-6 drop-shadow flex flex-col items-center ring-background-400">
    <NuxtImg :src="generateUrl(file)" alt="Temporary image" class="w-full h-full rounded-xl object-contain drop-shadow-sm"/>
    <div class="flex w-full items-center justify-center gap-x-4 mt-6">
      <Button className="btn-outline w-26" @click="emit('openEye', null)">Search again</Button>
      <Button className="btn-outline-error w-24" @click="emit('changeFile', null)">Remove</Button>
    </div>
  </div>
</template>