<script lang="ts" setup>
</script>

<template>
  <div>
    <NuxtLayout name="navbar">
      <div class="relative grid place-items-center min-h-screen w-full px-4 max-w-7xl mx-auto py-20">
        <div class="w-full h-full flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:gap-10 gap-y-4">
          <NuxtLink class="relative bg-base-300 rounded-3xl min-h-[10rem] flex flex-col items-center justify-center overflow-clip border-[6px] md:border-8 border-base-300 drop-shadow-lg shadow-md">
            <NuxtImg class="absolute left-0 top-0 h-full w-full object-cover" src="/oldbombay.jpg"/>
            <div class="absolute top-0 left-0 h-full w-full backdrop-blur-lg"></div>
            <h1 class="font-extrabold text-4xl md:text-6xl z-10 text-primary-content">Apps</h1>
            <p class="md:text-lg mt-2 z-10 text-center">Read blog posts related to tips, <br/>my journey, and more.</p>
          </NuxtLink>
          <NuxtLink class="relative bg-base-300 rounded-3xl min-h-[10rem] flex flex-col items-center justify-center overflow-clip border-[6px] md:border-8 border-base-300 drop-shadow-lg shadow-md">
            <NuxtImg class="absolute left-0 top-0 h-full w-full object-cover" src="/oldbombay.jpg"/>
            <div class="absolute top-0 left-0 h-full w-full backdrop-blur-lg"></div>
            <h1 class="font-extrabold text-4xl md:text-6xl z-10 text-primary-content">Blog</h1>
            <p class="md:text-lg mt-2 z-10 text-center">Read blog posts related to tips, <br/>my journey, and more.</p>
          </NuxtLink>
          <NuxtLink class="relative bg-base-300 col-span-2 rounded-3xl min-h-[10rem] flex flex-col items-center justify-center overflow-clip border-[6px] md:border-8 border-base-300 drop-shadow-lg shadow-md">
            <NuxtImg class="absolute left-0 top-0 h-full w-full object-cover" src="/oldbombay.jpg"/>
            <div class="absolute top-0 left-0 h-full w-full backdrop-blur-lg"></div>
            <h1 class="font-extrabold text-4xl md:text-6xl z-10 text-primary-content">Gallery</h1>
            <p class="md:text-lg mt-2 z-10 text-center">Read blog posts related to tips, <br/>my journey, and more.</p>
          </NuxtLink>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
