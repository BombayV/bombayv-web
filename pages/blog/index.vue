<script setup lang="ts">
const posts = ref<Array<Object>>([]);
const loading = ref<boolean>(true);
const error = ref<string>('');

onMounted(async () => {
  try {
    const resp = await fetch('https://ubcdby3t.directus.app/items/user_posts');
    const respData = await resp.json();
    for (const post of respData.data) {
      if (post.title) {
        const linkTo = post.title.replace(/\s+/g, '_');
        posts.value.push({
          title: post.title,
          description: post.description,
          link: linkTo,
          preview: `https://ubcdby3t.directus.app/assets/${post.preview}?&quality=40`,
          date: post.date_created
        });
      }
    }
    loading.value = false;
  } catch(e) {
    error.value = 'Could not load posts';
    loading.value = false;
  }
})

definePageMeta({
  title: 'Posts',
  layout: 'navbar'
})
</script>

<template>
  <div v-if="!loading" class="h-auto bg-zinc-200 dark:bg-zinc-900 duration-150">
		<Head>
			<Title>{{ $route.meta.title }}</Title>
		</Head>
    <h1 class="text-5xl md:text-6xl pt-24 pb-4 font-mont font-bold border-b-2 border-zinc-500 text-zinc-900 dark:text-zinc-200 text-center mx-auto w-96">Latest Posts</h1>
    <div class="gap-x-6 xl:gap-x-28 pb-2 mx-14 xl:mx-28 mt-8 grid md:grid-cols-3 xl:grid-cols-2">
      <div v-for="post in posts" class="bg-zinc-300 dark:bg-zinc-800 rounded-lg shadow-lg flex flex-col xl:flex-row items-center xl:items-center font-mont px-6 py-4 mb-6 xl:h-48">
        <img :src="post.preview" alt="Post image" class="h-48 w-full md:w-full md:h-48 xl:w-32 xl:h-full object-cover rounded">
        <div class="flex flex-col items-start h-full justify-start w-full text-zinc-900 dark:text-zinc-200 mt-2 xl:mt-0 xl:ml-4">
          <div class="flex justify-between w-full">
            <h1 class="text-xl font-mont font-bold">{{ post.title }}</h1>
            <p class="text-sm text-zinc-600 self-start">{{ new Date(post.date).toLocaleDateString() }}</p>
          </div>
          <div class="w-full flex flex-col h-full justify-between">
            <p class="text-zinc-900 dark:text-zinc-200 self-start text-left text-sm break-words">{{ post.description }}</p>
            <NuxtLink :to="`/blog/${post.link}`" class="font-bold w-full text-center text-zinc-100 bg-indigo-400 border-b-[2px] border-r-[3px] border-indigo-500 hover:border-indigo-600 rounded mt-3 py-1.5 hover:bg-indigo-500 duration-200">Read More</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
	<Loading v-else :loadText="error"/>
</template>

<style scoped>
.img-shadow {
  box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
;
  object-fit: cover;
}
</style>