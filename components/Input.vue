<script setup lang="ts">
  const props = defineProps({
    label: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    placeholder: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
      default: ""
    }
  })
  const emit = defineEmits(['update:modelValue'])
  const updateValue = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
  }
</script>

<template>
  <div class="flex flex-col w-full h-full mb-0.5">
    <input :value="modelValue" @input="updateValue" :type="type" :placeholder="placeholder" class="rounded py-1.5 px-3 dark:bg-[#1c1c1c] shadow-md border-zinc-600 w-full border text-sm font-mont duration-150" :class="!label && 'mb-2' || 'mb-0'">
    <label v-if="label" class="text-[13px] font-light mt-1 text-red-300 font-light text-zinc-500 mb-2">{{ label }}</label>
  </div>
</template>