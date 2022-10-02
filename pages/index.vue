<script setup lang="ts">
interface GithubProps {
	commits: number;
	issues: number;
	other: number;
}

const loaded = ref<boolean>(false)
const githubData = ref<GithubProps>({
	commits: 0,
	issues: 0,
	other: 0,
})
const els = ref<Array<Element>>([])

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

const setupScroll = (target: Element) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target : Element = entry.target
        target.classList.add('fade-in')
        observer.disconnect()
      }
    })
  }, options)

  observer.observe(target)
}

const orderData = (data: object[]) => {
	data.filter(<T extends { type: string }>(item: T) => {
		if (item.type === 'PushEvent' || item.type === 'PullRequestEvent') {
			githubData.value.commits += 1
		} else if (item.type === 'IssuesEvent' || item.type === 'IssueCommentEvent') {
			githubData.value.issues += 1
		} else {
			githubData.value.other += 1
		}
	})
}


definePageMeta({
  title: 'Home'
})

onMounted(async () => {
	loaded.value = true
	for (const el of els.value) {
		setupScroll(el)
	}
	const rawData = await fetch('https://api.github.com/users/BombayV/events?per_page=100',
	{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/vnd.github.v3+json'
		}
	})
	orderData(await rawData.json())
})
</script>

<template>
	<div class="w-full font-mont h-screen">
		<Head>
			<Title>{{ $route.meta.title }}</Title>

		</Head>
		<main class="h-screen w-full px-4 grad-sm lg:grad-lg dark:bg-small-pt lg:dark:bg-big-pt bg-small-wt lg:bg-big-wt flex items-center justify-center flex-col">
      <Transition name="title">
        <h1 v-if="loaded" class="text-5xl text-center font-bold md:text-7xl lg:text-8xl dark:text-zinc-200 px-6">Hello, I'm <span class="text-grad">Mauricio</span></h1>
      </Transition>
      <Transition name="desc">
        <div v-if="loaded"  class="pt-2 flex flex-col items-center justify-center">
          <p class="text-lg font-medium text-center dark:text-neutral-500 text-neutral-600 md:text-xl lg:text-2xl text-left">Student, photographer, and future computer scientist.</p>
          <span class="animate-bounce pt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-8 h-8 stroke-indigo-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </span>
        </div>
      </Transition>
		</main>
    <div class="min-h-[83.3%] grid lg:grid-cols-2 py-14 px-14 md:px-20 lg:px-28 xl:px-36 mx-auto">
      <div class="lg:pr-8 xl:pr-16 2xl:pr-24">
        <div :ref="addToRef" class="opacity-0">
          <h2 class="font-bold text-4xl md:text-5xl lg:text-6xl lg:pb-2 dark:text-zinc-50">About Me</h2>
          <p class="text-md lg:text-xl xl:text-2xl font-medium text-zinc-700 pt-2 dark:text-zinc-300 leading-loose lg:mb-5">
            Hello! My name is <span class="text-grad font-semibold">Mauricio Rivera</span>. I am a 17 year old teenager currently residing in <span class="text-grad font-semibold">New York, United States.</span>
            I am a <span class="text-grad font-semibold">WIP developer</span>, working both with backend and frontend technologies. Additionally, I do <span class="text-grad font-semibold">photography</span> and <span class="text-grad font-semibold">UX design</span>
            as a hobby. I am currently working on a few projects, including this website which I am using to learn more about frontend development.
          </p>
        </div>
        <div class="mt-5 xl:mt-8 2xl:mt-12">
          <h2 :ref="addToRef" class="opacity-0 font-bold text-4xl md:text-5xl lg:text-6xl lg:pb-2 dark:text-zinc-50">OSS Community</h2>
          <p :ref="addToRef" class="opacity-0 text-md lg:text-xl font-medium text-zinc-700 xl:text-2xl pt-2 dark:text-zinc-300 leading-loose mb-4">
            I am a firm believer in the <span class="text-grad font-semibold">open-source software community</span>, and I am always looking to contribute to said community in any way I can.
            <span class="hidden lg:inline-block">To the right </span>
            <span class="inline-block lg:hidden">Below </span>
            you will find some of my latest contributions to the community or my own projects done through with
            my Github account.
          </p>
        </div>
      </div>
			<div>
				<h2 :ref="addToRef" class="opacity-0 font-bold text-4xl md:text-5xl lg:text-6xl lg:pb-2 dark:text-zinc-50">Statistics</h2>
				<div :ref="addToRef" class="opacity-0 mt-2">
					<p class="text-zinc-500 font-medium text-sm">Last 90 Days</p>
					<p class="text-md lg:text-xl font-medium text-zinc-700 xl:text-2xl dark:text-zinc-300 leading-loose">I have created <span class="text-grad font-bold">{{ githubData.issues }} issues</span>, pushed <span class="text-grad font-bold">{{ githubData.commits }} commits</span> and done an extra <span class="text-grad font-bold">{{ githubData.other }} public contributions.</span></p>
				</div>
				<div :ref="addToRef" class="opacity-0 mt-4">
					<p class="text-zinc-500 font-medium text-sm mb-3">All Time Data (approximate)</p>
					<div class="columns-1 sm:columns-2 lg:columns-1">
						<GithubStat title="Commits" :number="1700">
							<svg class="w-full h-full fill-indigo-500 dark:fill-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
								<path fill-rule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
							</svg>
						</GithubStat>
						<GithubStat class="mt-4" title="Stars" :number="71">
							<svg class="w-full h-full fill-indigo-500 dark:fill-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
								<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
							</svg>
						</GithubStat>
						<GithubStat class="mt-4" title="Issues" :number="9">
							<svg class="w-full h-full fill-indigo-500 dark:fill-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
								<path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
								<path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
							</svg>
						</GithubStat>
						<GithubStat class="mt-4" title="Pull Requests" :number="82">
							<svg class="w-full h-full fill-indigo-500 dark:fill-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
								<path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clip-rule="evenodd" />
							</svg>
						</GithubStat>
						<GithubStat class="mt-4" title="Repos" :number="65">
							<svg class="w-full h-full fill-indigo-500 dark:fill-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
								<path fill-rule="evenodd" d="M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z" clip-rule="evenodd" />
							</svg>
						</GithubStat>
						<GithubStat class="mt-4" title="Followers" :number="52">
							<svg class="w-full h-full fill-indigo-500 dark:fill-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
								<path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
								<path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />							</svg>
						</GithubStat>
					</div>
				</div>
			</div>
    </div>
    <Footer/>
	</div>
</template>

<style scoped>
.text-grad {
	background: rgb(161,88,255);
	background: linear-gradient(90deg, rgba(161,88,255,1) 0%, rgba(195,115,255,1) 100%);

	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.fade-in {
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>