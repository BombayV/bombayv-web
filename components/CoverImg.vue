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
	<div class="fixed w-full h-screen flex items-center justify-center bg-black bg-opacity-80 z-30">
		<div class="flex h-4/6 md:h-5/6 items-center justify-center pt-5">
      <button @click="$emit('left')" type="button" aria-label="Slide left">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 stroke-zinc-200 z-50 hover:scale-105">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <div class="relative w-full h-full flex flex-col items-center justify-center">
        <img class="max-h-full max-w-full rounded-md shadow-lg z-50" :src="imgUrl" alt="Big Image">
        <p v-if="title" class="text-xl font-mont font-semibold text-white mt-2 w-[90%]">{{ title }}</p>
      </div>
      <button @click="$emit('right')" type="button" aria-label="Slide right">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 stroke-zinc-200 z-50 hover:scale-105">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
		<button @click="$emit('close')" type="button" class="fixed top-0 right-0 p-4 group">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 stroke-zinc-400 group-hover:scale-105 duration-150">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>
</template>