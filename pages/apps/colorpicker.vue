<script lang="ts" setup>
import { FetchStatusStr } from '~/components/types/common';
import { copyText } from '~/utils/copyText';

definePageMeta({
  layout: 'navbar',
});

useSeoMeta({
  title: 'Colorpicker',
  description: 'A simple yet functional app to take an image and get the color palette from it.',
});

const imageLoading = ref<boolean>(false);
const eyeDropper = ref<any | null>(null);
const currentFile = ref<File | null>(null);
const currentColor = ref<string | null>(null);
const savedColors = ref<string[]>([]);
const loadingColorsState = ref<FetchStatusStr>('loading');

const handleFileChange = (file: File | null) => {
  if (file) {
    currentFile.value = file;
    let triesLoading: number = 0;
    const interval = setInterval(() => {
      triesLoading++;
      if (imageLoading.value) {
        if (triesLoading >= 20) {
          alert('Image failed to load');
          currentFile.value = null;
          imageLoading.value = false;
        }
      } else {
        console.log('Image loaded');
        imageLoading.value = false;
        handleEyeDropper();
        clearInterval(interval);
      }
    }, 500);
  } else {
    currentFile.value = null;
  }
};

const handleImageLoading = () => {
  imageLoading.value = true;
};

const handleEyeDropper = () => {
  if (!eyeDropper.value) return;

  eyeDropper.value
    .open()
    .then((color: { sRGBHex: string }) => {
      copyText(color.sRGBHex);
      currentColor.value = color.sRGBHex;
    })
    .catch((err: Error) => {
      console.error(err);
    });
};

const handleSaveColor = (color: string, removeColor: boolean = false) => {
  if (removeColor) {
    savedColors.value = savedColors.value.filter((savedColor) => savedColor !== color);
    localStorage.setItem('savedColors', JSON.stringify(savedColors.value));
    if (savedColors.value.length === 0) {
      loadingColorsState.value = 'none';
    }
    return;
  }

  if (savedColors.value.includes(color)) return;
  if (savedColors.value.length === 0) {
    loadingColorsState.value = 'success';
  }

  savedColors.value = [...savedColors.value, color];
  localStorage.setItem('savedColors', JSON.stringify(savedColors.value));
};

onMounted(() => {
  // @ts-ignore
  if (!window.EyeDropper) {
    alert('EyeDropper not found!');
    loadingColorsState.value = 'none';
    return;
  }

  // @ts-ignore
  eyeDropper.value = new EyeDropper();
  const savedColorsString = localStorage.getItem('savedColors');
  if (!savedColorsString || savedColorsString === '[]') {
    loadingColorsState.value = 'none';
    return;
  }

  savedColors.value = JSON.parse(savedColorsString);
  loadingColorsState.value = 'success';
});
</script>

<template>
  <NuxtLayout>
    <section
      class="flex flex-col items-center mx-auto w-full text-center relative gap-y-10 max-w-7xl px-6 py-6 md:py-16 h-full grow"
    >
      <div class="flex flex-col items-center">
        <h1 class="text-3xl lg:text-4xl 2xl:text-5xl">Colorpicker</h1>
        <TextLink to="/apps" className="mt-2"> Back to apps </TextLink>
      </div>
      <div class="grid lg:grid-cols-2 relative w-full gap-y-8 gap-x-12">
        <ColorpickerUploadDropper
          @changeFile="handleFileChange"
          @openEye="handleEyeDropper"
          :file="currentFile"
        />
        <ColorpickerData
          @loadedImage="handleImageLoading"
          :color="currentColor"
          :savedColors="savedColors"
          @saveColor="handleSaveColor"
        />
      </div>
      <div
        v-if="loadingColorsState === 'success'"
        class="ring-8 ring-background-400 relative flex flex-wrap justify-start items-start w-full gap-2 drop-shadow bg-background-100 p-4 rounded-xl"
      >
        <ColorpickerButton
          v-for="(color, idx) in savedColors"
          :key="`${idx}_color`"
          :color="color"
          @removeColor="handleSaveColor"
        />
      </div>
      <div
        v-else
        class="ring-8 ring-background-400 relative grid place-items-center w-full min-h-[14rem] bg-background-100 p-4 rounded-xl drop-shadow"
      >
        <p v-if="loadingColorsState === 'loading'" class="text-center font-medium text-2xl">
          Loading saved colors...
        </p>
        <p v-else-if="loadingColorsState === 'none'" class="text-center font-medium text-2xl">
          No saved colors
        </p>
      </div>
    </section>
  </NuxtLayout>
</template>
