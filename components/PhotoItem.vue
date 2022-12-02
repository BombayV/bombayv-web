<script setup type="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
})
</script>

<template>
  <div class="flex items-center h-16 shrink-0 w-full border-y">
    <div class="flex gap-x-2 items-center">
      <div class="h-12 w-12 object-center rounded-full overflow-hidden">
        <img class="w-full h-full object-cover rounded-full border-2 border-indigo-500" src="https://th.bing.com/th/id/OIP.9DuC-A0u1mEYxiGMP5tREQHaEK?pid=ImgDet&rs=1" alt="Main profile logo">
      </div>
      <div class="flex flex-col">
        <p class="text-base font-mont dark:text-zinc-50">{{ title }}</p>
        <p class="text-xs font-mont dark:text-zinc-400">{{ new Date().toDateString() }}</p>
      </div>
    </div>
  </div>
</template>