<script setup lang="ts">
import {useSupabaseClient} from "#imports";

defineProps({
  providerType: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: false
  }
})

const supabase = useSupabaseClient()

const login = async (provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: 'http://localhost:3000'
    }
  })
  console.log(data, error)
}
</script>

<template>
  <button @click="login(providerType)" type="button" data-mbd-ripple="true" class="h-8 active:bg-zinc-500 dark:active:bg-zinc-800 grid place-items-center grow bg-zinc-500 hover:bg-zinc-400 dark:hover:bg-zinc-700 shadow-md border-r-2 border-b-2 border-zinc-400 dark:border-0 dark:bg-zinc-800 rounded px-4 transition-colors duration-150">
    <img class="h-4" :src="logo" alt="Small icon"/>
  </button>
</template>