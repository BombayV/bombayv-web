<script setup lang="ts">
const { $gsap } = useNuxtApp()
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

const recursiveInc = (i, target) => {
	if (i <= props.number) {
		target.textContent = i
		setTimeout(() => {
			recursiveInc(i + 1, target)
		}, Math.floor(duration / props.number))
	}
}

const setupScroll = (target: Element) => {
	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const target : Element = entry.target
        $gsap.from(target, {
          textContent: 0,
          duration: 4,
          ease: 'power1.out',
          snap: {
            textContent: 1
          },
          stagger: {
            each: 0.8,
            onUpdate: function () {
              target.textContent = Math.floor(target.textContent).toLocaleString()
            }
          }
        })
				observer.disconnect()
			}
		})
	}, options)

	observer.observe(target)
}

onMounted(() => {
  setupScroll(els.value[0])
})
</script>

<template>
	<div class="relative md:w-full h-20 px-2 bg-zinc-300 dark:bg-zinc-800 rounded-lg flex items-center shadow-md">
		<div class="relative h-1/2 w-18 py-0.5 px-4 grid place-items-center border-r-2 border-zinc-400 dark:border-zinc-600">
			<slot></slot>
		</div>
		<div class="w-5/6 flex items-center justify-between">
			<p class="font-bold text-zinc-900 dark:text-zinc-300 text-lg lg:text-xl pl-4 pr-2">{{ title }}</p>
			<p :ref="addToRef" class="text-xl lg:text-2xl text-zinc-700 dark:text-zinc-50 font-bold pr-4">{{ number }}</p>
		</div>
	</div>
</template>