<script lang="ts" setup>
const { params } = useRoute()

</script>

<template>
  <main class="prose mx-auto py-16">
    <NuxtLink
      to="/personal/blog"
      class="top-0 right-0 m-4 absolute btn btn-square z-10">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="w-5 h-5 fill-primary-content/90">
        <path fill-rule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clip-rule="evenodd" />
      </svg>
    </NuxtLink>
    <ContentDoc :path="`/blog/${params.slug}`" />
  </main>
</template>
