<script lang="ts" setup>
defineProps<{
  isOpen: boolean;
}>();

const { uploadGallery } = useGallery();
const currentFiles = ref<FileList | null>(null);

const handleFileChange = (files: FileList | null) => {
  currentFiles.value = files;
};

const removeFileByName = (name: string) => {
  const files = currentFiles.value;
  if (!files) return;

  const newFiles = new DataTransfer();
  for (let i = 0; i < files.length; i++) {
    if (files[i].name !== name) {
      newFiles.items.add(files[i]);
    }
  }

  currentFiles.value = newFiles.files;
};
</script>

<template>
  <Transition name="fade-in">
    <div
      v-if="isOpen"
      @click.self="$emit('close', false)"
      class="fixed top-0 left-0 bg-black w-full h-full bg-opacity-50 z-10 flex flex-col items-center justify-center px-6"
    >
      <FileDropper
        :files="currentFiles as FileList | null"
        @changeFiles="handleFileChange"
        @removeFile="removeFileByName"
      />
      <Button v-if="currentFiles && currentFiles.length > 0" className="btn-primary mt-4" @click="uploadGallery()">Upload</Button>
    </div>
  </Transition>
</template>

<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.3s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
</style>
