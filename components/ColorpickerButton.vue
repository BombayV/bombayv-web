<script lang="ts" setup>
import { isDark } from '~/utils/isDark';
import { copyText } from '~/utils/copyText';

defineProps<{
  color: string;
}>();

const timeout = ref<ReturnType<typeof setTimeout> | null>(null);
const isHovering = ref<boolean>(false);
const copiedText = ref<string>('Copy color');

const copyColor = (color: string): void => {
  if (timeout.value !== null) return;

  copyText(color);
  copiedText.value = 'Copied color!';
  timeout.value = setTimeout(() => {
    copiedText.value = 'Copy color';
    timeout.value = null;
  }, 2000);
};
</script>

<template>
  <button
    @mouseover.self="isHovering = true"
    @mouseleave.self="isHovering = false"
    @click.self="copyColor(color)"
    :style="{
      backgroundColor: color,
    }"
    class="drop-shadow-sm shadow h-8 grow min-w-[12rem] text-sm font-medium rounded-lg relative"
    :class="`${isDark(color) ? 'text-text-50' : 'text-text-950'}`"
  >
    {{ color }}
    <button
      type="button"
      @click="$emit('removeColor', color, true)"
      class="right-0 h-full bg-error-200 hover:bg-error-100 transition-colors duration-200 min-w-[12%] absolute top-0 rounded-r-lg grid place-items-center"
    >
      <Icon icon="delete" class="!w-4 !h-4 fill-text-200" />
    </button>
    <Transition name="fade">
      <span
        v-if="timeout || isHovering"
        class="block absolute top-0 left-1/2 -translate-x-1/2 bg-primary-400 transition duration-200 px-4 w-40 py-1 rounded text-background-50 -translate-y-10 text-base after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-primary-400"
        >{{ copiedText }}</span
      >
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
