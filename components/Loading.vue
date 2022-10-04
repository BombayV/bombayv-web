<script setup>
defineProps({
	loadText: {
		type: String,
		default: ''
	},
	path: {
		type: String,
		default: ''
	}
})
</script>

<template>
	<div class="w-full h-full bg-transparent flex flex-col items-center justify-center">
		<div class="flex items-end" v-if="loadText !== ''">
			<p class="text-4xl font-mont font-light dark:text-zinc-300">{{ loadText }}</p>
		</div>
		<svg v-else class="h-24 md:h-32 opacity-70 dark:stroke-zinc-100 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
		</svg>
		<NuxtLink v-if="loadText !== '' && path !== ''" :to="path" class="font-mont font-semibold underline mt-1 text-zinc-200 cursor-pointer">Go back</NuxtLink>
	</div>
</template>

<style>
.anim-bounce-s {
	-moz-animation: bounce 3s infinite ease-in-out;
	-webkit-animation: bounce 3s infinite ease-in-out;
	animation: bounce 3s infinite ease-in-out;
	-webkit-animation-delay: 0.5s;
	animation-delay: 0.5s;
}

.anim-bounce-m {
	-moz-animation: bounce 3s infinite ease-in-out;
	-webkit-animation: bounce 3s infinite ease-in-out;
	animation: bounce 3s infinite ease-in-out;
	-webkit-animation-delay: 1s;
	animation-delay: 1s;
}

.anim-bounce-l {
	-moz-animation: bounce 3s infinite ease-in-out;
	-webkit-animation: bounce 3s infinite ease-in-out;
	animation: bounce 3s infinite ease-in-out;
	-webkit-animation-delay: 1.5s;
	animation-delay: 1.5s;
}

@keyframes bounce {
	0%,15% {
		transform: translate(0, 0);
	}
	50% {
		transform: translate(0, -10px);
	}
	85%, 100% {
		transform: translate(0, 0);
	}
}

@-moz-keyframes bounce {
	0%,15% {
		transform: translate(0, 0);
	}
	50% {
		transform: translate(0, -10px);
	}
	85%, 100% {
		transform: translate(0, 0);
	}
}
@-webkit-keyframes bounce {
	0%,15% {
		transform: translate(0, 0);
	}
	50% {
		transform: translate(0, -10px);
	}
	85%, 100% {
		transform: translate(0, 0);
	}
}
</style>