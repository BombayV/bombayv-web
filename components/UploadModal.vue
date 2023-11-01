<script lang="ts" setup>
defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits(['close', 'sync']);
const { uploadGallery, uploadSingleGallery } = useGallery();
const currentFiles = ref<FileList | null>(null);

const handleFileChange = (files: FileList | null): void => {
  currentFiles.value = files;
};

const removeFileByName = (name: string): void => {
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

const handleGalleryUpload = async (): Promise<void> => {
  if (!currentFiles.value) return;

  if (Object.values(currentFiles.value).length > 1) {
    await uploadGallery(currentFiles.value);
  } else {
    await uploadSingleGallery(currentFiles.value[0]);
  }
  emit('sync', currentFiles.value);
  handleClose();
};

const handleClose = (): void => {
  emit('close');
  handleFileChange(null);
};
</script>

<template>
  <Transition name="fade-in">
    <div
      v-if="isOpen"
      @click.self="handleClose"
      class="fixed top-0 left-0 bg-black w-full h-full bg-opacity-50 z-10 flex flex-col items-center justify-center px-6"
    >
      <FileDropper
        :files="currentFiles as FileList | null"
        @changeFiles="handleFileChange"
        @removeFile="removeFileByName"
      />
      <Button
        v-if="currentFiles && currentFiles.length > 0"
        className="btn-primary mt-4"
        @click="handleGalleryUpload"
        >Upload</Button
      >
    </div>
  </Transition>
</template>
