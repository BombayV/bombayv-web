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
  <div class="flex flex-col items-start">
    <label :for="id" class="text-sm lg:text-base font-medium text-gray-700 mb-1 ml-2">{{
      label
    }}</label>
    <textarea
      oninput="this.style.height = ''; this.style.height = this.scrollHeight +'px';"
      :id="id"
      v-model="value"
      :placeholder="placeholder"
      :name="id"
      class="w-full input input-outline resize-none h-[2.4rem] min-h-[2.4rem] md:h-[2.6rem] md:min-h-[2.6rem] max-h-[14rem]"
      required
    ></textarea>
  </div>
</template>
