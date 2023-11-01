<script lang="ts" setup>
defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits(['cancel', 'confirm']);

const handleClose = (): void => {
  emit('cancel');
};
</script>

<template>
  <Transition name="fade-in">
    <div
      v-if="isOpen"
      @click.self="handleClose"
      class="fixed top-0 left-0 bg-black w-full h-full bg-opacity-50 z-10 flex flex-col items-center justify-center px-6"
    >
      <div class="relative w-full max-w-xl h-40 xl:h-56 bg-background-100 ring-8 ring-background-400 transition duration-200 drop-shadow-lg flex flex-col items-center justify-center rounded-xl">
        <p class="max-w-xs text-center">Are you sure you want to delete this image?</p>
        <div class="flex gap-x-4 mt-4">
          <Button className="btn-outline-error" @click="emit('cancel')">Cancel</Button>
          <Button className="btn-primary" @click="emit('confirm', true)">Confirm</Button>
        </div>
      </div>
    </div>
  </Transition>
</template>
