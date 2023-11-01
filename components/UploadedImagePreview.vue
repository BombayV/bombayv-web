<script lang="ts" setup>
import { GalleryImage } from '~/components/types/common';
import { generateUrl } from '~/utils/generateUrl';

const props = defineProps<{
  image: GalleryImage | null;
}>();

const emit = defineEmits(['close']);

const handleKeydown = (e: KeyboardEvent) => {
  if (!props.image) return;

  if (e.key === 'Escape') {
    emit('close', -1);
  } else if (e.key === 'ArrowRight') {
    emit('close', props.image.id + 1);
  } else if (e.key === 'ArrowLeft') {
    emit('close', props.image.id - 1);
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <Transition name="fade-in">
    <div
      v-if="image"
      @click.self="$emit('close', -1)"
      class="fixed top-0 left-0 bg-black w-full h-full bg-opacity-95 z-10 flex flex-col items-center justify-center px-6"
    >
      <div class="max-w-full max-h-full relative lg:px-12 2xl:px-8">
        <NuxtImg
          :src="typeof image.src === 'string' ? image.src : generateUrl(image.src)"
          :alt="image.name"
          class="object-contain max-w-full max-h-full text-white"
        />
      </div>
      <Button
        @click="$emit('close', -1)"
        class="btn-outline absolute right-0 top-0 btn-icon group mr-4 mt-4"
      >
        <Icon icon="close" class="!fill-primary-400 group-hover:!fill-background-50" />
      </Button>
    </div>
  </Transition>
</template>
