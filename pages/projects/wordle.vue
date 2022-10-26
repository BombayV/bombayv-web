<script setup lang="ts">
import { Wordle } from '@/classes/Wordle'

interface WordleData {
  tries: number
  letters: number
	lang: string
  guesses: string[]
}

interface Settings {
  difficulty: string
  language: string
  tries: number
}

const wordleGame = ref(null);
const keyboard = ref([
  [
    { letter: 'q', state: null },
    { letter: 'w', state: null },
    { letter: 'e', state: null },
    { letter: 'r', state: null },
    { letter: 't', state: null },
    { letter: 'y', state: null },
    { letter: 'u', state: null },
    { letter: 'i', state: null },
    { letter: 'o', state: null },
    { letter: 'p', state: null },
  ],
  [
    { letter: 'a', state: null },
    { letter: 's', state: null },
    { letter: 'd', state: null },
    { letter: 'f', state: null },
    { letter: 'g', state: null },
    { letter: 'h', state: null },
    { letter: 'j', state: null },
    { letter: 'k', state: null },
    { letter: 'l', state: null },
    { letter: 'ñ', state: null },
  ],
  [
    { letter: 'z', state: null },
    { letter: 'x', state: null },
    { letter: 'c', state: null },
    { letter: 'v', state: null },
    { letter: 'b', state: null },
    { letter: 'n', state: null },
    { letter: 'm', state: null },
  ],
])
const maxData = ref<WordleData>({
  tries: 6,
  letters: 5,
	lang: 'en',
  guesses: []
});

const settingsTitle = ref<boolean>(false);
const activeSettings = ref<boolean[]>([false, false]);
const loading = ref<boolean>(true);
const error = ref<string>('');
const getRow = (index: number) => keyboard.value[index];
const getDifficulty = computed(() => {
  if (maxData.value.letters === 4) return 'easy';
  if (maxData.value.letters === 5) return 'medium';
  if (maxData.value.letters === 6) return 'hard';
  if (maxData.value.letters === 7) return 'extreme';
})

const keyListener = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    wordleGame.value.checkWord(maxData.value.guesses, keyboard.value, (resp) => {
      settingsTitle.value = resp;
      setTimeout(() => {
        setSettings(resp);
      }, 500);
    });
  }

  if (e.key === 'Backspace') {
    wordleGame.value.removeLetter(maxData.value.guesses);
  }

  // Match only letters and spanish accents (á, é, í, ó, ú) or ñ
  if (e.key.length === 1 && e.key.match(/[a-zA-ZáéíóúñÁÉÍÓÚÑ]/)) {
    wordleGame.value.addLetter(e.key, maxData.value.guesses);
  }
};

const keyHandler = (letter: string) => {
  if (letter === 'enter') {
    wordleGame.value.checkWord(maxData.value.guesses, keyboard.value, (resp) => {
      settingsTitle.value = resp;
      setTimeout(() => {
        setSettings(resp);
      }, 1000);
    });
  } else if (letter === 'backspace') {
    wordleGame.value.removeLetter(maxData.value.guesses);
  } else {
    wordleGame.value.addLetter(letter, maxData.value.guesses);
  }
};

const newGame = (data: Settings) => {
  if (!data) return;
  wordleGame.value.restartGame(data.difficulty, data.language, data.tries, maxData.value);
  // Reset keyboard
  keyboard.value.forEach((row) => {
    row.forEach((key) => {
      key.state = null;
    });
  });
  settingsTitle.value = false;
  setSettings(false);
};

const setSettings = (active: boolean) => {
  if (active) {
    activeSettings.value[0] = active;
    setTimeout(() => {
      activeSettings.value[1] = active;
    }, 20);
  } else {
    activeSettings.value[1] = active;
    setTimeout(() => {
      activeSettings.value[0] = active;
    }, 200);
  }
}

onMounted(async () => {
	const rawWords = await fetch('https://raw.githubusercontent.com/BombayV/blog-data/master/words/en5.json')
	const words = await rawWords.json()

	wordleGame.value = new Wordle(words);
  maxData.value = {
		lang: 'en',
    tries: wordleGame.value.getMaxTries(),
    letters: wordleGame.value.getMaxLetters(),
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
    <div id="noti-container" class="absolute flex flex-col items-center justify-center shrink mt-12 top-0 z-50 [&>div]:bg-zinc-400 [&>div]:slideDown text-sm md:text-md lg:text-lg"></div>
    <div v-if="activeSettings[0]" class="fixed top-0 left-0 w-screen bg-black bg-opacity-40 z-50 h-screen grid place-items-center">
      <Transition name="scaleUp">
        <WordleSettings v-if="activeSettings[1]" @close="setSettings(false) " @newGame="newGame" :restartGame="settingsTitle" :currentDifficulty="getDifficulty" :currentLanguage="maxData.lang" :currentTries="maxData.tries"/>
      </Transition>
    </div>
    <div class="relative mb-20">
      <div class="flex items-center justify-between">
        <h1 class="mb-4 text-3xl text-zinc-900 dark:text-zinc-200 font-bold border-b">Wordle</h1>
        <button @click="setSettings(true)" type="button" aria-label="Wordle settings">
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
            class="grid font-black text-zinc-900 dark:text-zinc-300 duration-500 transition-colors text-3xl lg:text-4xl xl:text-[2.5rem] place-items-center bg-zinc-400 dark:bg-zinc-800 rounded-sm xl:w-16 xl:h-16 lg:w-14 lg:h-14 w-12 h-12"
            :class="data.state === 'correct' && 'dark:bg-[#a483ef] bg-[#a483ef]' || data.state === 'incorrect' && 'dark:bg-[#c7b82b] bg-[#c7b82b]'"
            :style="{
              animation: data.state !== '' && 'flip 0.5s ease-in-out' || data.letter !== '' && 'pop 0.3s ease-in-out',
              animationDelay: data.delay !== '' && data.state !== '' && `${data.delay}ms` || data.letter !== '' && '0ms',
            }"
        >
          <span>{{ data.letter.toUpperCase() }}</span>
        </div>
      </div>
      <div class="fixed flex flex-col items-center justify-center mt-4 h-18 bottom-0 left-1/2 -translate-x-1/2 mb-8">
        <div class="flex items-center justify-center mb-2 gap-x-1.5">
          <button
            v-for="data in getRow(0)"
            @click="keyHandler(data.letter)"
            type="button"
            class="dark:bg-zinc-700 bg-[#c4c4c8] rounded-sm focus:ring-1 focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 xl:py-3 xl:px-3.5 transition-colors duration-500"
            :class="data.state === 'correct' && 'dark:bg-[#a483ef] bg-[#a483ef]' || data.state === 'incorrect' && 'dark:bg-[#c7b82b] bg-[#c7b82b]'"
          >
            {{ data.letter }}
          </button>
        </div>
        <div class="flex items-center justify-center mb-2 gap-x-1.5">
          <button
            v-for="data in getRow(1)"
            @click="keyHandler(data.letter)"
            type="button"
            class="dark:bg-zinc-700 bg-[#c4c4c8] rounded-sm focus:ring-1 focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 xl:py-3 xl:px-3.5 transition-colors duration-500"
            :class="data.state === 'correct' && 'dark:bg-[#a483ef] bg-[#a483ef]' || data.state === 'incorrect' && 'dark:bg-[#c7b82b] bg-[#c7b82b]'"
            :style="data.letter === 'ñ' && maxData.lang === 'es' && 'display: block' || data.letter === 'ñ' && maxData.lang !== 'es' && 'display: none'"
          >
            {{ data.letter }}
          </button>
        </div>
        <div class="flex items-center justify-center gap-x-1.5">
          <button @click="keyHandler('backspace')" class="dark:bg-zinc-700 bg-[#c4c4c8] rounded-sm focus:ring-1 focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 lg:py-3 lg:px-3.5 transition-colors duration-500">Del</button>
          <button
              v-for="data in getRow(2)"
              @click="keyHandler(data.letter)"
              type="button"
              class="dark:bg-zinc-700 bg-[#c4c4c8] rounded-sm focus:ring-1 focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 xl:py-3 xl:px-3.5 transition-colors duration-500"
              :class="data.state === 'correct' && 'dark:bg-[#a483ef] bg-[#a483ef]' || data.state === 'incorrect' && 'dark:bg-[#c7b82b] bg-[#c7b82b]'"
          >
            {{ data.letter }}
          </button>
          <button @click="keyHandler('enter')" class="dark:bg-zinc-700 bg-[#c4c4c8] rounded-sm focus:ring-1 focus:ring-indigo-500 text-zinc-900 dark:text-zinc-200 font-bold shadow py-2 px-2.5 md:py-2.5 md:px-3 lg:py-3 lg:px-3.5 transition-colors duration-500">Enter</button>
        </div>
      </div>
    </div>
	</div>
  <Loading v-else :loadText="error"/>
</template>

<style>
.pop {
  animation: pop 0.1s ease-in-out infinite;
	-moz-animation: pop 0.1s ease-in-out infinite;
}

.slideDown {
  animation: slideDown 0.5s ease-in-out;
  -moz-animation: slideDown 0.5s ease-in-out;
}

@keyframes pop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
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

@keyframes slideDownOpacity {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
