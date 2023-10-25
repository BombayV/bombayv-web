<script lang="ts" setup>
defineProps<{
  isOpen: boolean
}>();
</script>

<template>
  <Transition name="fade-in">
    <div v-if="isOpen" @click.self="$emit('close', false)" class="fixed top-0 left-0 bg-black w-full h-full bg-opacity-50">

    </div>
  </Transition>
</template>

<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.3s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
</style>