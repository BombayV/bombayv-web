<script lang="ts" setup>
defineProps<{
  isActive: boolean;
}>();
</script>

<template>
  <Transition name="slide-right" mode="out-in">
    <aside
      v-show="isActive"
      class="block md:hidden fixed top-0 left-0 w-full h-full bg-background-50 z-50"
    >
      <Button
        className="btn-icon btn-outline p-2 right-0 mt-4 mr-4 absolute"
        type="button"
        @click="$emit('toggle')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.3"
          stroke="currentColor"
          class="w-7 h-7"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Button>
      <div class="flex flex-col"></div>
    </aside>
  </Transition>
</template>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
