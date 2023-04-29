<script lang="ts" setup>
const { auth } = useSupabaseAuthClient()
defineProps<{
  user: any
}>()

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Private',
    path: '/private',
  },
  {
    name: 'Public',
    path: '/public',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]
</script>

<template>
  <aside class="fixed drawer flex flex-col justify-between bg-base-200 px-2 py-4 bg-base-200 z-50">
    <div class="flex-1">
      <h3 class="h-fit w-fit font-bold text-lg mb-6 mx-4">BombayTech</h3>
      <button class="fixed top-0 right-0 mr-2 mt-2 btn btn-square btn-ghost" @click="$emit('close', false)">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="h-7 w-7 opacity-80 stroke-bush-900">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="flex flex-col items-start gap-y-2 text-lg">
        <NuxtLink @click="$emit('close', false)" class="text-neutral-content btn btn-ghost w-full justify-start font-semibold" v-for="route in routes" :to="route.path" :key="`route_${route.path}`">{{ route.name }}</NuxtLink>
        <NuxtLink v-if="!user" class="text-neutral-content btn btn-ghost w-full justify-start font-semibold" to="/auth/login">Log in</NuxtLink>
        <NuxtLink v-if="!user" class="text-neutral-content btn btn-ghost w-full justify-start font-semibold" to="/auth/register">Register</NuxtLink>
        <NuxtLink v-if="user" class="text-neutral-content btn btn-ghost w-full justify-start font-semibold hover:bg-neutral" to="/dashboard">Dashboard</NuxtLink>
        <button @click="auth.signOut()" v-if="user" class="text-neutral-content btn btn-ghost w-full justify-start font-semibold hover:bg-error/80 hover:text-white">Log out</button>
      </div>
    </div>
    <div class="text-center flex flex-col">
      <span>Made with ❤️ by <NuxtLink to="https://github.com/BombayV" target="_blank" rel="noopener">Bombay</NuxtLink></span>
      <span class="font-light">© 2023
        <NuxtLink>BombayTech</NuxtLink>
      </span>
    </div>
  </aside>
</template>