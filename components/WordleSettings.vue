<script setup lang="ts">
const props = defineProps({
  currentDifficulty: {
    type: String,
    required: true
  },
  currentLanguage: {
    type: String,
    required: true
  },
  currentWordLength: {
    type: Number,
    required: true
  },
  restartGame: {
    boolean: Boolean,
    required: false
  }
})

interface Settings {
  difficulty: string
  language: string
  wordLength: number
}

const newSettings = ref<Settings>({
  difficulty: props.currentDifficulty,
  language: props.currentLanguage,
  wordLength: props.currentWordLength
})

const setDifficulty = (difficulty: string) => {
  newSettings.value.difficulty = difficulty
}

const setLanguage = (language: string) => {
  newSettings.value.language = language
}

const setWordLength = (wordLength: number) => {
  newSettings.value.wordLength = wordLength
}
</script>

<template>
  <div class="dark:bg-zinc-800 rounded-xl flex flex-col p-4">
    <div class="flex items-center justify-between">
      <h3 class="text-3xl font-semibold dark:text-zinc-200">Settings</h3>
      <button @click="$emit('close')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 dark:text-zinc-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click="restartGame"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div class="mt-2">
      <p class="font-medium dark:text-zinc-400 text-lg mb-2">Difficulty</p>
      <div class="flex items-center justify-start gap-x-2">
        <button
          @click="setDifficulty('easy')"
          class="dark:bg-zinc-700 rounded focus:ring-1 grow focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 xl:py-3 xl:px-3.5 transition-colors duration-200"
          :class="newSettings.difficulty === 'easy' ? 'dark:bg-indigo-600 bg-indigo-500 text-zinc-50' : ''"
        >
          Easy
        </button>
        <button
          @click="setDifficulty('medium')"
          class="dark:bg-zinc-700 rounded focus:ring-1 grow focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 xl:py-3 xl:px-3.5 transition-colors duration-200"
          :class="newSettings.difficulty === 'medium' ? 'dark:bg-indigo-600 bg-indigo-500 text-zinc-50' : ''"
        >
          Medium
        </button>
        <button
          @click="setDifficulty('hard')"
          class="dark:bg-zinc-700 rounded focus:ring-1 grow focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 xl:py-3 xl:px-3.5 transition-colors duration-200"
          :class="newSettings.difficulty === 'hard' ? 'dark:bg-indigo-600 bg-indigo-500 text-zinc-50' : ''"
        >
          Hard
        </button>
        <button
          @click="setDifficulty('extreme')"
          class="dark:bg-zinc-700 rounded focus:ring-1 grow focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 xl:py-3 xl:px-3.5 transition-colors duration-200"
          :class="newSettings.difficulty === 'extreme' ? 'dark:bg-indigo-600 bg-indigo-500 text-zinc-50' : ''"
        >
          Extreme
        </button>
      </div>
      <div class="mt-4">
        <p class="font-medium dark:text-zinc-400 text-lg mb-2">Tries</p>
        <div class="flex items-center justify-start gap-x-2">
          <button
              @click="setWordLength(5)"
              class="dark:bg-zinc-700 rounded focus:ring-1 grow focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 xl:py-3 xl:px-3.5 transition-colors duration-200"
              :class="newSettings.wordLength === 5 ? 'dark:bg-indigo-600 bg-indigo-500 text-zinc-200' : ''"
          >
            Easy
          </button>
          <button
              @click="setWordLength(6)"
              class="dark:bg-zinc-700 rounded focus:ring-1 grow focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 xl:py-3 xl:px-3.5 transition-colors duration-200"
              :class="newSettings.wordLength === 6 ? 'dark:bg-indigo-600 bg-indigo-500 text-zinc-200' : ''"
          >
            Medium
          </button>
          <button
              @click="setWordLength(7)"
              class="dark:bg-zinc-700 rounded focus:ring-1 grow focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 xl:py-3 xl:px-3.5 transition-colors duration-200"
              :class="newSettings.wordLength === 7 ? 'dark:bg-indigo-600 bg-indigo-500 text-zinc-200' : ''"
          >
            Hard
          </button>
          <button
              @click="setWordLength(8)"
              class="dark:bg-zinc-700 rounded focus:ring-1 grow focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 xl:py-3 xl:px-3.5 transition-colors duration-200"
              :class="newSettings.wordLength === 8 ? 'dark:bg-indigo-600 bg-indigo-500 text-zinc-200' : ''"
          >
            Extreme
          </button>
        </div>
        <div class="mt-4">
          <p class="font-medium dark:text-zinc-400 text-lg mb-2">Language</p>
          <div class="flex items-center justify-start gap-x-2">
            <button
              @click="setLanguage('en')"
              class="dark:bg-zinc-700 rounded focus:ring-1 focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 xl:py-3 xl:px-3.5 transition-colors duration-200 grow"
              :class="newSettings.language === 'en' ? 'dark:bg-indigo-600 bg-indigo-500 text-zinc-200' : ''"
            >
              English
            </button>
            <button
              @click="setLanguage('es')"
              class="dark:bg-zinc-700 rounded focus:ring-1 focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 xl:py-3 xl:px-3.5 transition-colors duration-200 grow"
              :class="newSettings.language === 'es' ? 'dark:bg-indigo-600 bg-indigo-500 text-zinc-200' : ''"
            >
              Spanish
            </button>
          </div>
        </div>
        <div class="mt-4 flex">
          <button
            @click="$emit('newGame', newSettings)"
            class="dark:bg-zinc-700 dark:hover:bg-green-600 rounded focus:ring-1 focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 xl:py-3 xl:px-3.5 transition-colors grow"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  </div>
</template>