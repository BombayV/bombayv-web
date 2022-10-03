<script setup lang="ts">
interface Post {
  title: string;
  description: string;
  content: string;
  preview: string;
  date_created: string;
  date_updated: string;
  user_created: string;
}

interface User {
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  location: string;
}

const activeUrl = ref<string>('');
const route = useRoute();
const data = useState<Post>(() => {
  return {
    title: '',
    description: '',
    content: '',
    preview: '',
    date_created: '',
    date_updated: '',
    user_created: ''
  }
});
const user = useState<User>(() => {
  return {
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
    location: ''
  }
});
const loading = ref<boolean>(true);

onMounted(async () => {
	const link = route.params.id as string;
	const formattedLink = link.replace(/_/g, ' ');
  const resp = await fetch('https://ubcdby3t.directus.app/items/user_posts/' + formattedLink);
  const respData = await resp.json();
  data.value = {
    title: respData.data.title,
    description: respData.data.description,
    content: respData.data.content,
    preview: `https://ubcdby3t.directus.app/assets/${respData.data.preview}?&quality=75`,
    date_created: respData.data.date_created,
    date_updated: respData.data.date_updated,
    user_created: respData.data.user_created
  };

  // Fetch user data
  const resp2 = await fetch('https://ubcdby3t.directus.app/users/' + data.value.user_created);
  const respData2 = await resp2.json();
  user.value = {
    first_name: respData2.data.first_name,
    last_name: respData2.data.last_name,
    email: respData2.data.email,
    avatar: `https://ubcdby3t.directus.app/assets/${respData2.data.avatar}?&quality=20`,
    location: respData2.data.location
  };
	setTimeout(() => {
		loading.value = false;
	}, 250);
})
</script>

<template>
  <div :class="loading && 'justify-center h-full' || 'h-auto'" class="w-full bg-zinc-200 dark:bg-zinc-900 duration-150 relative flex flex-col items-center">
		<CoverImg @close="activeUrl = ''" v-if="activeUrl !== ''" :imgUrl="activeUrl"/>
		<div v-if="!loading" class="w-5/6 px-4 lg:w-2/5 flex flex-col items-center w-full mt-16 pt-10 pb-6 font-mont">
			<NuxtLink to="/blog" class="mb-2 self-start flex items-start md:text-xl font-medium gap-x-3 dark:text-zinc-50 hover:underline dark:hover:text-zinc-400 duration-150">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 md:w-6 md:h-6 dark:stroke-zinc-50 duration-150">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
				</svg>
				Go Back
			</NuxtLink>
      <div class="relative flex items-center justify-center w-full">
        <img @click="activeUrl = data.preview" class="cursor-pointer rounded-xl object-cover shadow-md w-full" :src="data.preview" alt="Post image">
      </div>
      <h1 class="text-2xl lg:text-3xl self-start dark:text-zinc-200 font-bold mt-4">{{ data.title }}</h1>
        <p class="text-xs lg:text-sm self-start dark:text-zinc-200 mt-2"><strong>Created:</strong> {{ new Date(data.date_created).toLocaleString() }}</p>
        <p v-if="data.date_updated" class="text-xs lg:text-sm self-start dark:text-zinc-200 mt-2"><strong>Updated:</strong> {{ new Date(data.date_updated).toLocaleString() }}</p>
      <p class="text-md whitespace-pre-wrap lg:text-lg self-start dark:text-zinc-200 mt-2 leading-relaxed">{{ data.content }}</p>
      <hr class="w-full mt-5 border-zinc-400 dark:border-zinc-600">
      <div class="flex items-center self-start mt-5 gap-x-4">
        <img v-if="user.avatar" class="rounded-full h-12 bg-zinc-300 dark:bg-zinc-600 shadow-md duration-150" :src="user.avatar" alt="User avatar">
        <img v-else class="rounded-full h-12 bg-zinc-300 dark:bg-zinc-600 shadow-md duration-150" src="/assets/images/avatar.png" alt="User avatar empty">
        <p class="dark:text-zinc-200 font-medium">This post was written by
          <strong>
          <span v-if="user.first_name">{{ user.first_name }}</span>
          <span v-if="user.last_name">&nbsp;{{ user.last_name }}</span>
          </strong>.
          <span v-if="user.location">Located in {{ user.location }}.</span>
          <span v-if="user.email">&nbsp;You can contact him at <strong>{{ user.email }}</strong></span>
        </p>
      </div>
    </div>
		<p v-else class="font-mont text-4xl lg:text-5xl font-bold">Loading
			<span class="anim-bounce-s inline-block">.</span>
			<span class="anim-bounce-m inline-block">.</span>
			<span class="anim-bounce-l inline-block">.</span>
		</p>
  </div>
</template>

<style>
.anim-bounce-s {
	animation: bounce 3s infinite ease-in-out;
	animation-delay: 0.5s;
}

.anim-bounce-m {
	animation: bounce 3s infinite ease-in-out;
	animation-delay: 1s;
}

.anim-bounce-l {
	animation: bounce 3s infinite ease-in-out;
	animation-delay: 1.5s;
}

@keyframes bounce {
	0%, 100% {
		transform: translateY(-10px);
	}
	50% {
		transform: translateY(0);
	}
}
</style>