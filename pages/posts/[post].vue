<script setup lang="ts">
interface Post {
  id: number;
  title: string;
  description: string;
  text_data: string;
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

const route = useRoute();
const title = ref<string>('');
const data = useState<Post>(() => {
  return {
    id: 0,
    title: '',
    description: '',
    text_data: '',
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

onMounted(async () => {
  const resp = await fetch('https://ubcdby3t.directus.app/items/posts/' + route.params.post);
  const respData = await resp.json();
  title.value = respData.data.title;
  data.value = {
    id: respData.data.id,
    title: respData.data.title,
    description: respData.data.description,
    text_data: respData.data.text_data,
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
    avatar: `https://ubcdby3t.directus.app/assets/${respData2.data.avatar}?&quality=40`,
    location: respData2.data.location
  };
})
useHead({
  title: title
})
</script>

<template>
  <div class="w-full h-auto bg-zinc-200 dark:bg-zinc-900 duration-150 relative flex flex-col items-center">
    <div class="w-5/6 px-4 lg:w-2/5 flex flex-col items-center w-full mt-16 pt-10 pb-6 font-mont">
      <div class="relative flex items-center justify-center w-full">
        <img class="rounded-xl object-cover shadow-md w-full" :src="data.preview" alt="Post image">
      </div>
      <h1 class="text-2xl lg:text-3xl self-start dark:text-zinc-200 font-bold mt-4">{{ data.title }}</h1>
        <p class="text-xs lg:text-sm self-start dark:text-zinc-200 mt-2"><strong>Created:</strong> {{ new Date(data.date_created).toLocaleString() }}</p>
        <p v-if="data.date_updated" class="text-xs lg:text-sm self-start dark:text-zinc-200 mt-2"><strong>Updated:</strong> {{ new Date(data.date_updated).toLocaleString() }}</p>
      <p class="text-md lg:text-lg self-start dark:text-zinc-200 mt-2 leading-relaxed">{{ data.text_data }}</p>
      <hr class="w-full mt-5 border-zinc-400 dark:border-zinc-600">
      <div class="flex items-center self-start mt-5 gap-x-4">
        <img class="rounded-full h-12 bg-zinc-300 dark:bg-zinc-600 shadow-md duration-150" :src="user.avatar" alt="User avatar">
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
  </div>
</template>