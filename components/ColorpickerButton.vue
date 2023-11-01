<script lang="ts" setup>
defineProps<{
  color: string;
}>()

const timeout: any | null = ref(null);
const isHovering = ref<boolean>(false);
const copiedText = ref<string>('Copy color');

const copyColor = (color: string) => {
  if (timeout.value !== null) return;

  navigator.clipboard.writeText(color);
  copiedText.value = 'Copied color!';
  timeout.value = setTimeout(() => {
    copiedText.value = 'Copy color';
    timeout.value = null;
  }, 2000);
}

const getLightness = (r: number, g: number, b: number) => 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
const isDark = (r: number, g: number, b: number) => getLightness(r, g, b) < 90;
const hexToRgb = (hex: any | number | number[] | string | string[]) => ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];


</script>

<template>
  <button
    @mouseover.self="isHovering = true"
    @mouseleave.self="isHovering = false"
    @click="copyColor(color)"
    :style="{
      backgroundColor: color,
    }"
    class="border-background-100 border-b-2 border-r-2 border-opacity-5 h-8 grow min-w-[12rem] text-sm font-medium rounded relative group" :class="`${isDark(...hexToRgb(color)) ? 'text-text-50' : 'text-text-950'}`"
  >
    {{ color }}
    <Transition name="fade">
      <span v-if="timeout || isHovering" class="block py-0.5 absolute top-0 left-1/2 -translate-x-1/2 bg-background-300 group-hover:bg-background-400 transition duration-200 px-4 w-3/4 rounded text-background-50 -translate-y-10 text-base after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-background-400">{{ copiedText }}</span>
    </Transition>
  </button>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>