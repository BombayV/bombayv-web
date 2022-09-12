<script setup lang="ts">
defineProps({
	title: {
		type: String,
		required: false
	},
	imgUrl: {
		type: String,
		required: true
	}
})
</script>

<template>
	<div @click="$emit('close')" class="fixed w-full h-screen flex items-center justify-center bg-black bg-opacity-80 z-50">
		<div class="flex flex-col h-5/6 items-center justify-center pt-5">
			<img class="h-full rounded-xl shadow-lg" :src="imgUrl" alt="Big Image">
			<p class="text-xl font-mont font-semibold text-white mt-2 self-start">{{ title }}</p>
		</div>
		<button class="fixed top-0 right-0 p-4 group">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 stroke-zinc-400 group-hover:scale-105 duration-150">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>
</template>