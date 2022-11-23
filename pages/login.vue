<script setup lang="ts">
definePageMeta({
	title: 'Sign in to your account',
  layout: 'empty'
})

const data = ref({
  username: '',
  password: '',
})
</script>

<template>
  <div class="w-screen h-screen relative grid place-items-center">
    <Head>
      <Title>{{ $route.meta.title }}</Title>
    </Head>
    <NuxtLink to="/" class="fixed top-0 left-0 ml-4 mt-4 text-lg hover:underline duration-150 cursor-pointer font-bold dark:text-zinc-50">Go Home</NuxtLink>
    <div class="flex flex-col items-center font-mont dark:text-zinc-300 w-80 rounded-lg px-4 py-4">
      <div class="flex flex-col items-center mb-3">
        <p class="font-medium text-xl">Sign in to your account</p>
        <p class="font-light text-sm dark:text-zinc-500">Or <NuxtLink to="/register" class="font-medium dark:text-zinc-500 dark:hover:text-indigo-300 transition-colors duration-150">create a new account.</NuxtLink></p>
      </div>
      <Input v-model="data.username" placeholder="Email/Username"/>
      <Input v-model="data.password" placeholder="Password"/>
      <p class="mb-2">or</p>
      <div class="flex flex-wrap items-center gap-1.5 w-full mb-3">
        <LoginButton logo="assets/images/discord-mark-white.svg" providerType="discord"/>
      </div>
      <div class="flex items-center justify-between w-full gap-x-4">
        <button class="bg-indigo-500 hover:bg-indigo-400 text-zinc-50 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors duration-200 rounded py-1 grow font-semibold text-sm shadow-md">Login</button>
        <button class="text-sm font-medium dark:text-zinc-500 hover:underline dark:hover:text-red-400 duration-200">Forgot your password?</button>
      </div>
    </div>
  </div>
</template>