<script lang="ts" setup>
import { TimelineData } from '~/components/types/common';

defineProps<{
  timeline: TimelineData;
}>();
</script>

<template>
  <div class="mb-5 w-full md:odd:pr-[55%] md:even:pl-[55%] font-semibold flex flex-col items-start">
    <span
      class="absolute inline-block w-4 h-4 bg-primary-300 rounded-full time-dot md:time-dot-md"
    ></span>
    <span class="font-light text-sm mb-2 ml-2">{{ timeline.date.toDateString() }}</span>
    <div
      class="bg-[#f1d5c5] drop-shadow-lg rounded-lg py-3 px-4 w-full border-b-2 border-r-4 border-orange-900 border-opacity-10 relative"
    >
      <h3 class="text-xl font-semibold text-left">{{ timeline.title }}</h3>
      <p class="text-sm font-light text-left mt-1">{{ timeline.description }}</p>
      <NuxtLink :to="timeline.path" class="btn btn-primary py-1.5 mt-4 text-sm lg:text-base w-fit">
        Try it out
      </NuxtLink>
    </div>
  </div>
</template>
