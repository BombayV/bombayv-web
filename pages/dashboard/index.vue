<script setup lang="ts">
import {User} from "@supabase/supabase-js";

const { auth } = useSupabaseAuthClient();
const user = useSupabaseUser() as unknown as User
const userData = new UseUserData(user)
const blogPosts = userData.blogPosts
const images = userData.images

definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <div>
    <NuxtLayout name="authnavbar">
      <div class="relative flex flex-col py-20 min-h-screen w-full px-4 max-w-7xl mx-auto">
        <div class="h-20 bg-base-300 w-full rounded-full relative flex items-center justify-between px-4 shadow-md drop-shadow-md">
          <div class="flex items-center gap-x-4">
            <NuxtImg :src="userData.avatarUrl" class="rounded-full w-16 h-16 border-2 border-blue-300" />
            <div class="flex flex-col">
              <span class="text-xl font-bold text-primary-content/90">{{userData.username}}</span>
              <span class="text-sm">{{userData.email}}</span>
            </div>
          </div>
          <div class="flex gap-x-2">
            <button type="button" class="bg-info/60 hover:bg-info/70 rounded-full grid place-items-center btn btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-primary-content/80">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
            </button>
            <button @click="userData.signOut(auth, navigateTo)" type="button" class="bg-error/60 hover:bg-error/70 rounded-full grid place-items-center btn btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-primary-content/60">
                <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div class="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none grow mt-8 gap-y-4 md:gap-x-8">
          <div class="bg-base-300 rounded-xl min-h-[20rem] px-4 py-4 flex flex-col justify-center">
            <div class="w-full relative flex items-center justify-between">
              <p class="text-2xl font-bold text-primary-content/90 ml-4">Blog Posts</p>
              <button type="button" class="btn bg-info/60 hover:bg-info/70 text-cyan-50 gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                Upload
              </button>
            </div>
            <div class="grid grow" :class="blogPosts.length > 0 ? '' : 'place-items-center'">
              <p v-if="blogPosts.length < 1" class="text-4xl font-bold text-primary-content/60">No Blog Posts</p>
            </div>
          </div>
          <div class="bg-base-300 rounded-xl min-h-[20rem] px-4 py-4 flex flex-col justify-center">
            <div class="w-full relative flex items-center justify-between">
              <p class="text-2xl font-bold text-primary-content/90 ml-4">All Images</p>
              <button type="button" class="btn bg-info/60 hover:bg-info/70 text-cyan-50 gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                Upload
              </button>
            </div>
            <div class="grid grow" :class="images.length > 0 ? '' : 'place-items-center'">
              <p v-if="images.length < 1" class="text-4xl font-bold text-primary-content/60">No Images</p>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>