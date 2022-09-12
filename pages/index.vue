<script setup lang="ts">
definePageMeta({
  title: 'Home',
})
</script>

<template>
	<div class="w-full h-full">
		<Head>
			<Title>{{ $route.meta.title }}</Title>
		</Head>
	</div>
</template>