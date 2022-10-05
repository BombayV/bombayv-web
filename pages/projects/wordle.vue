<script setup lang="ts">
const maxTries = ref<number>(6);
const maxLetters = ref<number>(5);
const wordleData = ref<Array<Array<string>>>([[], [], [], [], [], []]);
const simplifiedMax = ref<string>("");
simplifiedMax.value = `grid-cols-5 grid-rows-6`;

</script>

<template>
	<div class="w-full h-full font-mont relative flex flex-col items-center justify-center">
		<h1 class="mb-2 text-3xl dark:text-zinc-200">Wordle</h1>
		<div :class="simplifiedMax" class="grid gap-1">
			<div class="bg-zinc-400 dark:bg-zinc-800 rounded-sm xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-16 md:h-16 w-14 h-14" v-for="data in wordleData.length * maxLetters">

			</div>
		</div>
		<p class="font-light dark:text-zinc-400 mt-4">All credits to the New York Times.</p>
	</div>
</template>