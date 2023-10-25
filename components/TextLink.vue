<script lang="ts" setup>
defineProps<{
  to: string;
  target?: string;
  className?: string;
}>();
</script>

<template>
  <NuxtLink
    :to="to"
    :target="target || '_self'"
    class="w-fit group grid place-items-center"
    :class="className"
  >
    <slot />
    <span
      class="block h-[1px] w-full bg-primary-800 scale-x-0 transition-transform group-hover:scale-x-100"
    ></span>
  </NuxtLink>
</template>
