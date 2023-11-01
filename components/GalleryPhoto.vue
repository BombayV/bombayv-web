<script lang="ts" setup>
import {GalleryImage} from "~/components/types/common";
import { generateUrl } from "~/utils/generateUrl";

defineProps<{
  image: GalleryImage;
}>();
</script>

<template>
  <div class="relative rounded-lg overflow-clip select-none cursor-pointer group drop-shadow-md">
    <NuxtImg
      :src="typeof image.src === 'string' ? image.src : generateUrl(image.src)"
      :alt="`Photo of ${image.name}`"
    />

  </div>
</template>
