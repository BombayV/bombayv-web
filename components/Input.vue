<script lang="ts" setup>
const props = defineProps<{
  id: string;
  label: string;
  placeholder: string;
  modelValue: string | undefined;
}>();
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    if (props.modelValue === undefined) {
      return '';
    }
    return props.modelValue;
  },
  set(value: string) {
    if (value === '') {
      emit('update:modelValue', undefined);
      return;
    }
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <div class="flex flex-col">
    <label :for="id" class="text-sm font-medium text-gray-700 mb-1">{{ label }}</label>
    <input
      :id="id"
      v-model="value"
      :placeholder="placeholder"
      class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      :label="label"
    />
  </div>
</template>
