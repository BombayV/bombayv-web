<script setup lang="ts">
import { Wordle } from '@/classes/Wordle'

interface WordleData {
  tries: number
  letters: number
  total: number
  guesses: string[]
}

const wordleGame = ref(null);
const maxData = ref<WordleData>({
  tries: 6,
  letters: 5,
  total: 20,
  guesses: []
});

const loading = ref<boolean>(true);
const error = ref<string>('');

const keyListener = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    wordleGame.value.checkWord(maxData.value.guesses);
  }

  if (e.key === 'Backspace') {
    wordleGame.value.removeLetter(maxData.value.guesses);
  }

  // Match only letters and spanish accents (á, é, í, ó, ú) or ñ
  if (e.key.length === 1 && e.key.match(/[a-zA-ZáéíóúñÁÉÍÓÚÑ]/)) {
    wordleGame.value.addLetter(e.key, maxData.value.guesses);
  }
};

onMounted(async () => {
  wordleGame.value = new Wordle("Hello");
  maxData.value = {
    tries: wordleGame.value.getMaxTries(),
    letters: wordleGame.value.getMaxLetters(),
    total: wordleGame.value.getSquaresLength(),
    guesses: wordleGame.value.getGuesses()
  };

  window.addEventListener('keyup', keyListener);

  setTimeout(() => {
    loading.value = false;
  }, 50);
});
</script>

<template>
	<div v-if="!loading" class="w-full h-full font-mont relative flex flex-col items-center justify-center relative">
    <div>
      <div class="flex items-center justify-between">
        <h1 class="mb-4 text-4xl xl:text-4xl text-zinc-900 dark:text-zinc-200 font-bold border-b">Wordle</h1>
        <button type="button" aria-label="Wordle settings">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 fill-zinc-700 hover:fill-zinc-800 dark:fill-zinc-500 dark:hover:fill-zinc-600 duration-150 transition-background">
            <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div class="grid gap-2" :style="{
      'grid-template-columns': `repeat(${maxData.letters}, 1fr)`,
      'grid-template-rows': `repeat(${maxData.tries}, 1fr)`,
		}">
        <div
            v-for="data in maxData.guesses"
            class="grid font-black text-zinc-900 dark:text-zinc-300 text-2xl md:text-3xl lg:text-4xl xl:text-5xl place-items-center bg-zinc-400 dark:bg-zinc-800 rounded-sm xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14"
            :class="data.letter !== '' && 'pop border-zinc-500 dark:border-zinc-700 border-2'"
            :style="{
              backgroundColor: data.state === 'correct' && '#a483ef' || data.state === 'wrong' && '#c7b82b',
              animation: data.state !== '' && 'flip 0.3s ease-in-out',
            }"
        >
          <span>{{ data.letter.toUpperCase() }}</span>
        </div>
      </div>
      <p class="font-light dark:text-zinc-400 mt-4 text-sm md:text-md lg:text-lg text-center">All credits to the New York Times.</p>
    </div>
	</div>
  <Loading v-else :loadText="error"/>
</template>

<style>
.pop {
  animation: pop 0.1s ease-in-out;
}

@keyframes pop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes flip {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>