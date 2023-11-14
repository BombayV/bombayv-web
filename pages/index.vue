<script setup lang="ts">
import { GalleryImage, ProjectData } from "~/components/types/common";

definePageMeta({
  layout: 'navbar',
});

useSeoMeta({
  title: 'Home',
  ogTitle: 'Home',
});

const images = ref<GalleryImage[] | null>(null);
const { getLatestThree, fetchStatus } = useGallery()
const DISPLAY_PROJECTS = <Array<ProjectData>>[
  {
    name: 'MYoung Initiative',
    description: 'Created for a non-profit organization to help them raise awareness for their cause. Creating using Next 13.0 and Tailwind CSS.',
    image: 'myoung.png',
    link: 'https://www.myounginitiative.org/',
    date: new Date('2021-08-01'),
  },
  {
    name: 'PdImagery',
    description: 'Photography portfolio website created for a friend and teacher of mine.',
    image: 'pdimagery.png',
    link: 'https://www.pdimagery.art/',
    date: new Date('2021-08-01'),
  },
  {
    name: 'Brice Pierce',
    description: 'Artist portfolio website created for a friend of mine. It was created using Nuxt 3.0.',
    image: 'brice.png',
    link: 'https://bricepierce.com/',
    date: new Date('2021-08-01'),
  },
]

onMounted(async () => {
  const fetchedImages = await getLatestThree();
  if (fetchedImages) {
    images.value = fetchedImages as GalleryImage[];
    const fetchedAsArray = Object.values(fetchedImages);
    if (fetchedAsArray.length > 0) {
      fetchStatus.value.status = 'success';
    } else {
      fetchStatus.value.status = 'none';
    }
  }
});
</script>

<template>
  <NuxtLayout>
    <section
      class="relative flex flex-col items-center justify-center h-96 md:h-[32rem] px-6 text-center xl:h-[36rem] bg-background-100"
    >
      <h1 class="text-4xl z-10 drop-shadow-lg text-background-50 md:text-5xl xl:text-6xl">
        Hello, I'm <span class="text-gradient">Mauricio</span>
      </h1>
      <p class="mt-2 z-10 drop-shadow-lg text-background-100">
        Web developer, photographer, and future computer scientist.
      </p>
      <div class="absolute w-full h-full flex items-center justify-center select-none">
        <NuxtImg
          src="/default_photos/intro_bg.jpg"
          alt="Background intro"
          class="absolute object-cover w-full h-full"
          :placeholder="true"
          sizes="100vw"
        />
        <span
          class="absolute block w-full h-full bg-black bg-opacity-30 top-0 left-0 backdrop-blur-sm"
        ></span>
      </div>
    </section>
    <section
      class="relative flex flex-col items-center px-6 py-16 text-center md:px-12"
    >
      <h1 class="text-4xl md:text-5xl">Who am I?</h1>
      <p class="mt-4 leading-7 max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        Hello! My name is Mauricio Rivera. I am a 18 year old teenager currently studying computer
        science at NJIT. I love to code (mostly frontend), take photos, and play video games. I am
        currently working on a few projects, which you can find on my GitHub.
      </p>
      <div class="flex flex-col-reverse items-center lg:flex-row gap-x-16 max-w-7xl mt-12">
        <div class="flex flex-col items-center lg:items-start lg:text-start gap-y-3 mt-6 lg:mt-0">
          <h2 class="text-3xl md:text-4xl font-bold">Bombay Tech</h2>
          <p class="font-semibold text-lg md:text-xl">More than just a blog</p>
          <p class="leading-7 max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            Bombay Tech was created as a blog to share my own thoughts and opinions on various
            topics. However, it has evolved into a place where I can share everything I love, from
            photography to code.
          </p>
        </div>
        <NuxtImg src="/default_photos/who_am_i.jpg" alt="Who am I?" class="rounded-lg drop-shadow w-full object-contain max-w-lg md:max-w-xl xl:max-w-xl" />
      </div>
      <div class="flex flex-col-reverse items-center lg:flex-row-reverse gap-x-16 max-w-7xl mt-12">
        <div class="flex flex-col items-center lg:items-start lg:text-start gap-y-3 mt-6 lg:mt-0">
          <h2 class="text-3xl md:text-4xl font-bold">Open Source Software</h2>
          <p class="font-semibold text-lg md:text-xl">Supporting the community</p>
          <p class="leading-7 max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            I love open source software. I use it everyday, and I try to contribute to it as much as
            I can. Even if it's just a small bug fix, I know that it will help someone out there, just like
            how open source software has helped me.
          </p>
        </div>
        <NuxtImg src="/default_photos/git_hub.jpg" alt="Who am I?" class="rounded-lg drop-shadow w-full object-contain max-w-lg md:max-w-xl xl:max-w-xl" />
      </div>
      <div class="flex flex-col-reverse items-center lg:flex-row gap-x-16 max-w-7xl mt-12">
        <div class="flex flex-col items-center lg:items-start lg:text-start gap-y-3 mt-6 lg:mt-0">
          <h2 class="text-3xl md:text-4xl font-bold">Photography</h2>
          <p class="font-semibold text-lg md:text-xl">Capturing the world</p>
          <p class="leading-7 max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            Being able to capture a moment in time is something that everyone should experience. I
            love to take photos of nature, landscapes, and people. Every photo I take is a memory
            that I can look back on, one that I hope to share with others.
          </p>
        </div>
        <NuxtImg src="/default_photos/photos.webp" alt="Who am I?" class="rounded-lg drop-shadow w-full object-contain max-w-lg md:max-w-xl xl:max-w-xl" />
      </div>
    </section>
    <section
      class="relative flex flex-col items-center px-6 py-16 text-center md:px-12 bg-background-100"
    >
      <h1 class="text-4xl md:text-5xl">Recent Memories</h1>
      <p class="font-semibold text-lg md:text-xl mt-2">To be remembered</p>
      <p class="leading-7 max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mt-3">
        You forget something everything, make sure this isn't one of them. Here the latest photos
        that I have uploaded.
      </p>
      <div v-if="images?.length && images.length > 0" class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 overflow-hidden relative w-full max-w-7xl">
        <NuxtImg
          v-for="photo in images"
          :key="photo"
          :src="photo.src as string"
          :alt="photo.name"
          class="drop-shadow w-full object-cover max-h-96 min-h-[20rem] max-w-full rounded-lg"
        />
      </div>
      <p v-else-if="fetchStatus.status === 'loading'" class="mt-12">Loading...</p>
      <p v-else class="mt-12 font-normal text-2xl md:text-3xl">No photos to display.</p>
    </section>
    <section
      class="relative flex flex-col items-center px-6 pt-16 pb-8 text-center md:px-12"
    >
      <h1 class="text-4xl md:text-5xl">Latest Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 mt-12 gap-x-8 gap-y-6 max-w-7xl">
        <ProjectCard
          v-for="project in DISPLAY_PROJECTS.sort((a, b) => b.date - a.date)"
          :key="project.name"
          :project="project"
        />
      </div>
    </section>
  </NuxtLayout>
</template>
