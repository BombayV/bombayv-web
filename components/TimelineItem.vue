<script setup>

</script>

<template>
  <div class="mb-5 w-full md:odd:pr-[55%] md:even:pl-[55%] font-mont font-semibold">
    <span class="absolute inline-block w-5 h-5 bg-indigo-400 rounded-full time-dot md:time-dot-md"></span>
    <span class="font-black dark:text-zinc-300 text-lg ml-2">{{ new Date().toDateString() }}</span>
    <div class="glass shadow rounded py-2 px-4 break-words">
      <h3 class="text-xl font-bold dark:text-neutral-100">Project 1</h3>
      <p class="text-sm dark:text-neutral-300 text-neutral-800 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
    </div>
  </div>
</template>

<style scoped>
.glass {
  /* From https://css.glass */
  background: rgba(187, 178, 178, 0.43);
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(187, 178, 178, 0.41);
}
</style>