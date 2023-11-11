<script lang="ts" setup>
import { ProjectData } from "~/components/types/common";

defineProps<{
  project: ProjectData;
}>();
</script>

<template>
  <div>
    <div>
      <NuxtImg :src="project.image" :alt="project.name" />
    </div>
  </div>
</template>