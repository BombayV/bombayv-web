<script lang="ts" setup>
import { GalleryImage } from '~/components/types/common';
import { generateUrl } from '~/utils/generateUrl';

defineProps<{
  image: GalleryImage;
}>();
</script>

<template>
  <div class="bg-accent-200 drop-shadow px-2 p-2 rounded-xl">
    <div
      @click="$emit('view', image.id)"
      class="grid place-items-center group relative rounded-t-lg overflow-hidden cursor-pointer"
    >
      <NuxtImg
        :src="typeof image.src === 'string' ? image.src : generateUrl(image.src)"
        :alt="image.description"
        class="object-cover w-full h-36 rounded-md bg-accent-300"
        :placeholder="true"
      />
      <span
        class="absolute grid place-items-center w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-200"
      >
        <Icon
          icon="view"
          class="w-8 h-8 !fill-background-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        />
      </span>
    </div>
    <div class="flex items-center justify-between mt-2">
      <div>
        <p class="font-semibold text-base">{{ image.name }}</p>
        <p class="text-sm">{{ image.description }}</p>
      </div>
      <div class="flex gap-x-2">
        <Button
          @click="$emit('edit', image.id)"
          className="btn-icon bg-accent-500 hover:bg-accent-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="fill-background-50 w-5 h-5"
          >
            <path
              d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z"
            />
            <path
              d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z"
            />
          </svg>
        </Button>
        <Button
          @click="$emit('delete', image.id, image.src)"
          className="btn-icon bg-error-100 hover:bg-error-200"
        >
          <Icon icon="delete" />
        </Button>
      </div>
    </div>
  </div>
</template>
