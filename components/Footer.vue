<template>
  <footer
      class="relative overflow-x-hidden bg-opacity-30 font-outfit">
    <div class="relative flex flex-col items-center py-14 xl:py-20">
      <h1 class="text-3xl font-extrabold md:text-4xl xl:text-5xl">
        Ready to get started?
      </h1>
      <p class="mt-2 text-lg font-light md:text-xl xl:text-2xl xl:mt-4">
        Start sharing your work today.
      </p>
      <div class="mt-6 flex items-center gap-x-4">
        <NuxtLink
            to="/projects"
            class="bg-cyan-600 hover:bg-cyan-700 px-4 rounded-md text-white flex gap-x-2 font-bold btn">
          Register Now
        </NuxtLink>
        <NuxtLink
            to="/"
            class="btn">
          Learn More
        </NuxtLink>
      </div>
    </div>
    <div class="relative bg-base-300 w-full py-6 px-6">
      <div class="flex flex-col md:flex-row md:justify-between max-w-7xl w-full relative mx-auto pb-12 pt-6">
        <div>
          <NuxtLink to="/" class="text-xl font-extrabold text-slate-300 md:text-xl xl:text-2xl">BombayTech</NuxtLink>
          <p class="text-base xl:text-lg font-light mt-2">
            If you can imagine it, you can create it.
          </p>
          <div class="flex gap-x-3 mt-4">
            <NuxtLink
                to="https://www.instagram.com/mau_bomb/"
                target="_blank"
                rel="noopener"
                class="group"
                aria-label="Instagram">
              <InstagramIcon />
            </NuxtLink>
            <NuxtLink
                to="https://github.com/BombayV/"
                target="_blank"
                rel="noopener"
                class="group"
                aria-label="Github">
              <GithubIcon />
            </NuxtLink>
            <NuxtLink
                to="https://www.linkedin.com/in/mauricio-riveraperez/"
                target="_blank"
                rel="noopener"
                class="group"
                aria-label="LinkedIn">
              <LinkedInIcon />
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col md:flex-row md:gap-x-16 text-slate-400 gap-y-4 mt-8 md:mt-0">
          <div class="font-light flex flex-col gap-y-1">
            <p class="font-semibold">MAIN</p>
            <NuxtLink class="transition-colors hover:text-slate-300 duration-200" to="/personal">Personal</NuxtLink>
            <NuxtLink class="transition-colors hover:text-slate-300 duration-200" to="/public">Public</NuxtLink>
            <NuxtLink class="transition-colors hover:text-slate-300 duration-200" to="/support">Support</NuxtLink>
          </div>
          <div class="font-light flex flex-col gap-y-1">
            <p class="font-semibold">SUPPORT</p>
            <NuxtLink class="transition-colors hover:text-slate-300 duration-200" to="/support/abuse">Abuse</NuxtLink>
            <NuxtLink class="transition-colors hover:text-slate-300 duration-200" to="/support/docs">Documentation</NuxtLink>
            <NuxtLink class="transition-colors hover:text-slate-300 duration-200" to="/support/terms">Terms of Service</NuxtLink>
            <NuxtLink class="transition-colors hover:text-slate-300 duration-200" to="/support/privacy">Privacy Policy</NuxtLink>
          </div>
        </div>
      </div>
      <div
        class="flex items-center justify-between border-t border-t-slate-400 border-opacity-30 pt-6 max-w-7xl m-auto"
      >
        <p class="font-light">© 2023 BombayTech</p>
      </div>
    </div>
  </footer>
</template>
<script setup>
</script>