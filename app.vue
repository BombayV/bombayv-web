<script setup lang="ts">
type Theme = 'light' | 'dark';
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
}

useHead({
  titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} | Bombay` : "Bombay's Blog";
	},
	meta : [
		{ hid: 'og:title', property: 'og:title', content: 'Bombay Blog' },
		{ hid: 'og:og:description', property: 'og:description', content: 'My personal website/blog including portfolio, projects, and photography.' },
		{ hid: "theme-color", property: 'theme-color', name: "theme-color", content: '#6366f1' },
		{ hid: 'og:url', property: 'og:url', content: 'https://imbombay.tech' },
		{ hid: 'og:image', property: 'og:image', content: 'https://i.imgur.com/cjlvzoP.png' },
		{ hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
		{ hid: 'og:image:width', property: 'og:image:width', content: '128' },
		{ hid: 'og:image:height', property: 'og:image:height', content: '128' },
	]
})
</script>

<template>
  <div class="h-screen relative bg-zinc-200 dark:bg-zinc-900 transition duration-150">
		<Meta content="Bombay's Blog" property="og:title"/>
		<Meta content="My personal website/blog including portfolio, projects, and photography." property="og:description"/>
		<Meta content="https://imbombay.tech/" property="og:url"/>
		<Meta content="#6366f1" data-react-helmet="true" name="theme-color"/>
		<Meta property="og:image" content="https://i.imgur.com/cjlvzoP.png" />
		<Meta property="og:image:type" content="image/png" />
		<Meta property="og:image:width" content="128" />
		<Meta property="og:image:height" content="128" />
    <NuxtLoadingIndicator :height="4" color="rgb(99, 102, 241)"/>
		<Navbar/>
    <NuxtPage/>
    <button
        class="fixed bottom-0 mb-2.5 ml-2.5 grid place-items-center text-zinc-200 hover:text-white bg-zinc-700 hover:bg-zinc-800 dark:text-zinc-800 dark:bg-zinc-300 dark:hover:bg-zinc-100 dark:hover:text-black dark:bg-zinc-200 h-9 w-9 duration-200 shadow text-white p-2 rounded"
        @click="setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')"
    >
      <svg v-if="$colorMode.preference === 'light'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>
