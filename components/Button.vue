<script lang="ts" setup>
defineProps<{
  type?: 'button' | 'submit' | 'reset',
  className?: string
}>()
</script>

<template>
  <button
    :type="type || 'button'"
    :class="`${className || ''} btn`">
    <slot />
  </button>
</template>