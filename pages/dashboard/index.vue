<script setup type="ts">
definePageMeta({
  title: 'Dashboard',
  layout: 'empty'
})
</script>

<template>
  <div class="w-full h-full flex px-4 items-center flex-col bg-slate-900">
    <Head>
      <Title>{{ $route.meta.title }}</Title>
    </Head>
    <div class="dark:bg-zinc-800 flex items-center h-16 w-5/6">
      <div class="h-12 w-12 object-center rounded-full overflow-hidden">
        <img class="w-full h-full object-cover" src="https://th.bing.com/th/id/OIP.9DuC-A0u1mEYxiGMP5tREQHaEK?pid=ImgDet&rs=1" alt="Main profile logo">
      </div>
    </div>
  </div>
</template>