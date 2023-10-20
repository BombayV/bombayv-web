<script lang="ts" setup>
defineProps<{
  isActive: boolean
}>()
</script>

<template>
  <Transition name="slide-right" mode="out-in">
    <aside v-show="isActive">
      <button @click="$emit('toggle')">close</button>
    </aside>
  </Transition>
</template>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>