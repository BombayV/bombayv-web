<script lang="ts" setup></script>

<template>
  <div>
    <NuxtLayout name="navbar">
      <div
        class="relative flex min-h-screen w-full flex-col items-center justify-center gap-y-2 px-4">
        <div class="absolute z-10 h-full w-full backdrop-blur-sm lg:backdrop-blur-md"></div>
        <img
          src="/IMG_3218.jpg"
          class="pointer-events-none fixed z-0 h-full w-full select-none object-cover"
          alt="Background image underwater" />
        <h1 class="z-10 text-center text-5xl font-black text-primary-content">
          Hello, I'm Mauricio
        </h1>
        <p class="z-10 text-center text-xl font-base text-primary-content/60">
          UX designer, photographer, and future computer scientist.
        </p>
      </div>
      <div class="relative flex min-h-screen w-full flex-col items-center px-4 py-8 bg-base-200">
        <div class="flex flex-col items-center text-center">
          <p class="text-lg font-medium">What is this?</p>
          <h2 class="text-2xl font-bold text-primary-content">A public place to share your work</h2>
          <p class="mt-2 text-base">
            Share your artwork, create your own blog, or checkout useful projects created by the
            community.
          </p>
        </div>
        <div class="flex flex-col items-center text-center">
          <p class="text-lg font-medium">Why was this created?</p>
          <h2 class="text-2xl font-bold text-primary-content">Personal site</h2>
          <p class="mt-2 text-base">
            At first, this was meant to be a site for my own projects. However, I decided to turn my
            personal site into a public one for people to share their creativity.
          </p>
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
