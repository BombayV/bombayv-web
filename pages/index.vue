<script lang="ts" setup>
</script>

<template>
  <div>
    <NuxtLayout name="navbar">
      <div
        class="relative flex min-h-screen flex-col items-center justify-center gap-y-2 px-4">
        <div class="absolute z-[1] h-full w-full backdrop-blur-sm lg:backdrop-blur-md"></div>
        <NuxtImg
          src="/IMG_3218.jpg"
          class="pointer-events-none absolute z-0 h-full w-full select-none object-cover blur-sm"
          alt="Background image underwater"
          format="webp"
          quality="70"
          :placeholder="50"
        />
        <h1 class="z-10 text-center text-5xl lg:text-6xl font-black text-primary-content">
          Hello, I'm Mauricio
        </h1>
        <p class="z-10 text-center text-xl font-base text-primary-content/60">
          UX designer, photographer, and future computer scientist.
        </p>
      </div>
      <div class="relative flex min-h-screen w-full flex-col items-center px-4 py-8 bg-base-200 z-10">
        <div class="flex flex-col items-center text-center max-w-7xl w-full">
          <p class="text-lg font-medium text-slate-300">What is this?</p>
          <h2 class="text-2xl md:text-3xl font-bold text-primary-content/80">A public place to share your work</h2>
          <p class="mt-2 text-lg">
            Share your artwork, create your own blog, or checkout useful projects created by the
            community.
          </p>
        </div>
        <div class="flex flex-col items-center text-center max-w-7xl w-full">
          <p class="text-lg font-medium text-slate-300">Why was this created?</p>
          <h2 class="text-2xl md:text-3xl font-bold text-primary-content/80">Personal site</h2>
          <p class="mt-2 text-lg">
            At first, this was meant to be a site for my own projects. However, I decided to turn my
            personal site into a public one for people to share their creativity through art, blogs, and more.
          </p>
          <div class="flex flex-col md:flex-row mt-8">
            <NuxtImg class="rounded shadow-md drop-shadow-md w-full md:w-1/2 h-full object-cover" src="/oldbombay.jpg" alt="Old Bombay Tech"/>
            <div class="md:ml-8 md:mt-0 mt-6">
              <h3 class="text-2xl font-bold text-left text-primary-content/90">Old BombayTech</h3>
              <p class="text-lg text-left mt-1">BombayTech was created as a personal website where I could learn more about web technologies. It hosted some projects I had created along with my portfolio and a gallery for my work as an artist. However, after my database got taken down, I decided to learn about Supabase and recreate what once was supposed to be my blog.</p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row mt-12">
            <div class="md:mr-8 md:mt-0 mt-6 order-2 md:order-1 flex flex-col">
              <NuxtLink to="https://bombayv.github.io/" target="_blank" class="text-2xl font-bold text-left text-primary-content/90 border-b border-b-transparent w-fit hover:border-b-primary-content/80 transition-colors duration-200">MPhotography</NuxtLink>
              <p class="text-lg text-left mt-1">I wanted to learn about web design, development, and how to host a website. MPhotography was a page created to show all the photos I have taken throughout my career as a photographer. However, due to it being hardcoded, it became very difficult to keep adding more and more images. I soon left it as an abandoned project which remains in the limbo with the last images I uploaded at the time.</p>
            </div>
            <NuxtImg class="rounded shadow-md drop-shadow-md w-full md:w-1/2 h-full object-cover order-1 md:order-2 pl-4 git st" src="/mphotography.jpg" alt="Old Bombay Tech"/>
          </div>
          <div class="flex flex-col md:flex-row mt-12">
            <NuxtImg class="rounded shadow-md drop-shadow-md w-full md:w-1/2 h-full object-cover" src="/entityevolution.jpg" alt="Old Bombay Tech"/>
            <div class="md:ml-8 md:mt-0 mt-6 flex flex-col">
              <NuxtLink to="https://entityevolution.github.io/" target="_blank" class="text-2xl font-bold text-left text-primary-content/90 border-b border-b-transparent w-fit hover:border-b-primary-content/80 transition-colors duration-200">Entity Evolution</NuxtLink>
              <p class="text-lg text-left mt-1">Entity Evolution was an organization I created as a teenager with a couple of friends in order to create open source projects for the FiveM ecosystem. It started as one where we would create innovate resources such as <NuxtLink to="https://github.com/EntityEvolution/ev-hud/" target="_blank" class="text-blue-100 hover:underline">HUDs</NuxtLink>, <NuxtLink to="https://github.com/EntityEvolution/ev-carhud/" target="_blank" class="text-blue-100 hover:underline">scoreboards</NuxtLink>, and other types of <NuxtLink to="https://github.com/BombayV/anims" target="_blank" class="text-blue-100 hover:underline">panels</NuxtLink>. However, it soon became a place where we would recreate poorly made paid scripts which would bring the open source community together.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer class="bg-base-200 z-50"/>
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
