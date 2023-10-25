<template>
  <section class="flex flex-col items-center py-16">
    <h1 class="font-semibold text-2xl sm:text-4xl">Want to explore more?</h1>
    <p class="font-light text-sm mt-2 sm:text-lg">Learn more about me, myself and I.</p>
    <div class="flex sm:flex-row gap-4 mt-4">
      <NuxtLink class="btn btn-primary" to="/gallery"> View Photos </NuxtLink>
      <NuxtLink class="btn btn-outline" to="/projects"> Read Projects </NuxtLink>
    </div>
  </section>
  <footer class="relative w-full bg-background-100">
    <div class="mx-auto max-w-7xl px-6 md:px-8 py-12">
      <div class="flex flex-col md:flex-row md:justify-between">
        <div class="flex flex-col">
          <h1>BombayTech</h1>
          <p class="mt-0.5">If you can imagine it, you can create it.</p>
          <div class="flex items-center gap-x-3 mt-2 fill-primary-800">
            <NuxtLink to="/" target="_blank">
              <InstagramIcon
                class="fill-primary-800 hover:fill-primary-700 transition-colors duration-200"
              />
            </NuxtLink>
            <NuxtLink to="/" target="_blank">
              <GithubIcon
                class="fill-primary-800 hover:fill-primary-700 transition-colors duration-200"
              />
            </NuxtLink>
            <NuxtLink to="/" target="_blank">
              <LinkedInIcon
                class="fill-primary-800 hover:fill-primary-700 transition-colors duration-200"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:gap-x-12 gap-y-2 mt-6 md:mt-0">
          <div class="flex flex-col">
            <h2>MAIN</h2>
            <TextLink to="/apps">Apps</TextLink>
            <TextLink to="/gallery">Gallery</TextLink>
            <TextLink to="/contact">Contact</TextLink>
          </div>
          <div class="flex flex-col">
            <h2>OTHER</h2>
            <TextLink to="/apps">Apps</TextLink>
            <TextLink to="/gallery">Gallery</TextLink>
            <TextLink to="/contact">Contact</TextLink>
          </div>
        </div>
      </div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <p class="border-t border-t-background-950 mx-8 py-6">&copy; 2023 BombayTech</p>
    </div>
  </footer>
</template>
