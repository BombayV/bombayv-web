<script setup lang="ts">
const pages : Array<Object> = [
  {
    name: 'Posts',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Gallery',
    path: '/gallery',
  },
];
</script>

<template>
  <Navbar :pages="pages"/>
</template>