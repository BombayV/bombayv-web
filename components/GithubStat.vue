<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	number: {
		type: Number,
		default: 0,
	}
})

const el = ref<Element | null>(null)
const els = ref<Array<Element>>([])
const duration: number = 3000

const options : Object = {
	root: null,
	rootMargin: '0px',
	threshold: 0.5
}

const addToRef = (el: Element) => {
	if (el) {
		els.value.push(el)
	}
}

const increasingNumber = (target: Element) => {
	// Create an increasing number effect
	let startNum: number = Number(target.textContent)
	const endNum: number = props.number
	const counter = setInterval(() => {
		startNum += 1;
		target.textContent = startNum.toString()
		if (startNum === endNum) {
			clearInterval(counter)
		}
	}, Math.floor(duration / endNum))
}

const setupScroll = (target: Element) => {
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const target : Element = entry.target
				setTimeout(() => {
					increasingNumber(target)
				}, 1000)
				observer.disconnect()
			}
		})
	}, options)

	observer.observe(target)
}

onMounted(() => {
	for (const el of els.value) {
		setupScroll(el)
	}
})
</script>

<template>
	<div class="relative md:w-full h-20 px-2 bg-zinc-300 dark:bg-zinc-800 rounded-lg flex items-center shadow-md">
		<div class="sm:w-18 sm:h-18 h-1/2  md:w-auto px-4 grid place-items-center border-r-2 border-zinc-400 dark:border-zinc-600">
			<slot></slot>
		</div>
		<div class="w-5/6 flex items-center justify-between">
			<p class="font-bold text-zinc-900 dark:text-zinc-300 text-lg lg:text-xl pl-4 pr-2">{{ title }}</p>
			<p :ref="addToRef" class="text-xl lg:text-2xl text-zinc-700 dark:text-zinc-50 font-bold pr-4">0</p>
		</div>
	</div>
</template>