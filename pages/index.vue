<script lang="ts" setup>

</script>

<template>
  <div>
    <NuxtLayout name="navbar">
      <div class="relative min-h-screen w-full flex flex-col items-center justify-center px-4 gap-y-2">
        <div class="absolute w-full h-full backdrop-blur-sm z-10 lg:backdrop-blur-md"></div>
        <img src="/IMG_3218.jpg" class="fixed object-cover w-full h-full z-0 select-none pointer-events-none" alt="Background image underwater"/>
        <h1 class="text-center text-5xl font-black text-primary-content z-10">Hello, I'm Mauricio</h1>
        <p class="font-base text-xl text-center text-primary-content/60 z-10">UX designer, photographer, and future computer scientist.</p>
      </div>
      <div class="relative min-h-screen w-full bg-base-200 px-4 flex flex-col items-center py-8">
        <div class="text-center flex flex-col items-center">
          <p class="text-lg font-medium">What is this?</p>
          <h2 class="text-2xl font-bold text-primary-content">A public place to share your work</h2>
          <p class="text-base mt-2">Share your artwork, create your own blog, or checkout useful projects created by the community.</p>
        </div>
        <div class="text-center flex flex-col items-center">
          <p class="text-lg font-medium">Why was this created?</p>
          <h2 class="text-2xl font-bold text-primary-content">Personal site</h2>
          <p class="text-base mt-2">At first, this was meant to be a site for my own projects. However, I decided to turn my personal site into a public one for people to share their creativity.</p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style>
.bg-test {
  background-image: url('/IMG_3218.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>