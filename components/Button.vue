<script lang="ts" setup>
defineProps<{
  type?: 'button' | 'submit' | 'reset',
  className?: string
}>()
</script>

<template>
  <button
    @click="$emit('click')"
    :type="type || 'button'"
    :class="[
      'btn',
      className
    ]">
    <slot />
  </button>
</template>