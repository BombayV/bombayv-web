<script lang="ts" setup>
import { isDark } from '~/utils/isDark';
import { copyText } from '~/utils/copyText';
import { generateShades } from '~/utils/generateShades';

const props = defineProps<{
  color: string | null;
  savedColors: string[];
}>();

const colorShades = computed(() => generateShades(<string>props.color));
</script>

<template>
  <div
    class="ring-8 transition duration-200 ring-background-400 max-w-full max-h-full relative bg-background-100 rounded-xl p-6 drop-shadow flex flex-col items-center"
  >
    <p v-if="!color" class="h-full grid place-items-center">No color has been selected</p>
    <div v-else class="grid grid-cols-2 grid-rows-12 gap-4 w-full relative h-full">
      <button
        @click.self="copyText(color)"
        type="button"
        :style="{
          backgroundColor: color,
        }"
        class="drop-shadow-sm shadow min-h-[6rem] col-span-2 row-span-3 rounded-lg grid place-items-center text-xl font-medium"
        :class="`${isDark(color) ? 'text-text-50' : 'text-text-950'}`"
      >
        {{ color }}
        <button
          :disabled="savedColors.includes(<string>color)"
          @click="$emit('saveColor', color)"
          class="block top-0 right-0 absolute transition-colors duration-200 rounded-lg rounded-tl-none rounded-br-none rounded-bl p-2"
          :class="`${
            savedColors.includes(<string>color)
              ? isDark(color)
                ? 'bg-accent-300 fill-text-900'
                : 'bg-accent-700 fill-text-100'
              : isDark(color)
              ? 'bg-accent-300 fill-text-900 hover:bg-accent-400'
              : 'bg-accent-700 fill-text-100 hover:bg-accent-800'
          }`"
        >
          <svg
            v-if="!savedColors.includes(<string>color)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </button>
      <button
        v-for="color in colorShades"
        :key="color"
        @click.self="copyText(color)"
        :style="{
          backgroundColor: color,
        }"
        class="text-sm px-2 py-2 rounded-lg lg:text-base lg:py-0 hover:opacity-90 duration-200 transition-opacity drop-shadow-sm"
        :class="isDark(color) ? 'text-text-50' : 'text-text-950'"
      >
        {{ color }}
      </button>
    </div>
  </div>
</template>
