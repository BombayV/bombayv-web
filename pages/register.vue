<script setup lang="ts">
definePageMeta({
  title: 'Create your account',
})

const data = ref({
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
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
        <p class="font-medium text-xl">Create an account</p>
        <p class="font-light text-sm dark:text-zinc-500">Or <NuxtLink class="font-medium dark:text-zinc-500 dark:hover:text-indigo-300 hover:text-indigo-500 text-zinc-500 transition-colors duration-150" to="/login">login into your account.</NuxtLink></p>
      </div>
      <Input v-model="data.username" placeholder="Username"/>
      <Input v-model="data.email" placeholder="Email"/>
      <Input v-model="data.password" type="password" placeholder="Password"/>
      <Input v-model="data.passwordConfirmation" type="password" placeholder="Confirm password"/>
      <button class="w-full bg-indigo-500 hover:bg-indigo-400 text-zinc-50 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded font-semibold transition-colors duration-200 text-sm py-1 shadow-md">Sign Up</button>
    </div>
  </div>
</template>