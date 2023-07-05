<script lang="ts" setup>
const { data } = await useAsyncData('home', () => queryContent('/blog').find())
</script>

<template>
  <div>
    <NuxtLayout name="navbar">
      <div class="pt-20 max-w-7xl relative mx-auto px-4 mb-4 md:mb-6 flex items-center flex-col">
        <h1 class="text-5xl font-bold text-primary-content/90">Blog</h1>
        <NuxtLink
            to="/personal"
            class="text-lg font-light mt-2 border-b border-b-transparent hover:border-b-primary-content transition duration-200"
        >Back to Personal</NuxtLink
        >
      </div>
      <div
          class="w-full relative h-full max-w-7xl mx-auto grid gap-x-16 lg:gap-y-8 gap-y-4 grid-cols-1 md:grid-cols-2 px-4 pb-20">
        <div v-for="post in data" class="card bg-base-300 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">{{ post.headline }}</h2>
            <p>{{ post.excerpt }}</p>
            <div class="card-actions justify-between items-end">
              <span class="text-sm">By: {{ post.author }}</span>
              <NuxtLink :to="`/personal${post._path}`" class="btn btn-primary btn-sm">Read more</NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div
          v-if="false"
          class="absolute top-1/2 left-1/2 max-w-7xl -translate-x-1/2 -translate-y-1/2">
        <p class="text-3xl text-primary-content/50 font-extralight">Loading...</p>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
</style>
