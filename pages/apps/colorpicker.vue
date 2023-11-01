<script lang="ts" setup>
import { FetchStatusStr } from "~/components/types/common";

definePageMeta({
  layout: 'navbar',
});

const eyeDropper = ref<any | null>(null);
const currentFile = ref<File | null>(null);
const savedColors = ref<string[]>([]);
const loadingColorsState = ref<FetchStatusStr>('loading');

const handleFileChange = (file: File | null) => {
  if (file) {
    currentFile.value = file
    setTimeout(() => {
      handleEyeDropper();
    }, 100);
  } else {
    currentFile.value = null;
  }
}

const handleEyeDropper = () => {
  if (!eyeDropper.value) return;

  eyeDropper.value.open()
  .then((color: {
    sRGBHex: string;
  }) => {
    navigator.clipboard.writeText(color.sRGBHex);
  })
  .catch((err: Error) => {
    console.error(err);
  });
}

onMounted(() => {
  if (!window.EyeDropper) {
    alert('EyeDropper not found!');
    loadingColorsState.value = 'none';
    return;
  }

  eyeDropper.value = new EyeDropper();
  const savedColorsString = localStorage.getItem('savedColors');
  if (process.dev) {
    savedColors.value = ['#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff','#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff','#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff','#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff','#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff','#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff'];
    loadingColorsState.value = 'success';
    return;
  }

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
    <section class="flex flex-col items-center mx-auto w-full text-center relative gap-y-10 max-w-7xl px-6 py-8 md:py-16 h-full grow">
      <h1 class="text-3xl lg:text-4xl 2xl:text-5xl">Colorpicker</h1>
      <div class="grid lg:grid-cols-2 relative w-full gap-y-6 mt-8">
        <ColorpickerUploadDropper @changeFile="handleFileChange" @openEye="handleEyeDropper" :file="currentFile"/>
        <ColorpickerData/>
      </div>
      <div v-if="loadingColorsState === 'success'" class="ring-8 ring-background-400 relative flex flex-wrap w-full min-h-[14rem] gap-2 drop-shadow bg-background-200 p-4 rounded-xl">
        <ColorpickerButton v-for="(color, idx) in savedColors" :key="`${idx}_color`" :color="color"/>
      </div>
      <div v-else class="ring-8 ring-background-400 relative grid place-items-center w-full min-h-[14rem] bg-background-200 p-4 rounded-xl drop-shadow">
        <p v-if="loadingColorsState === 'loading'" class="text-center font-medium text-2xl">Loading saved colors...</p>
        <p v-else-if="loadingColorsState === 'none'" class="text-center font-medium text-2xl">No saved colors</p>
      </div>
    </section>
  </NuxtLayout>
</template>
