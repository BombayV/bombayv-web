<script lang="ts" setup>
const props = defineProps<{
  error: {
    statusCode: number;
  };
}>();
</script>

<template>
  <div>
    {{ props.error.statusCode }}
  </div>
</template>