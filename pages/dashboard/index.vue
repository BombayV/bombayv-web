<script setup type="ts">
definePageMeta({
  title: 'Dashboard',
  layout: 'navbar',
  middleware: ['user']
})
const photos = ref([])
const client = useSupabaseClient();
const router = useRouter();

const logout = async () => {
  const { error } = await client.auth.signOut();
  if (error) {
    console.log('error', error);
  }
}

const user = useSupabaseUser();
const { data: posts } = await useFetch('/api/posts', {
  key: `posts in ${user.value.id}`,
})
onMounted(() => {
  watchEffect(() => {
    if (!user.value) {
      navigateTo('/login');
    }
  })
})
</script>

<template>
  <div class="w-full h-full flex px-4 items-center flex-col gap-y-4">
    <Head>
      <Title>{{ $route.meta.title }}</Title>
    </Head>
    <div class="dark:bg-zinc-800 flex items-center justify-between w-5/6 mt-20 px-4 py-3 rounded-lg shadow-md">
      <div class="flex items-center gap-x-3">
        <div class="h-12 w-12 object-center rounded-full overflow-hidden">
          <img class="w-full h-full object-cover rounded-full border-2 border-indigo-500" src="https://th.bing.com/th/id/OIP.9DuC-A0u1mEYxiGMP5tREQHaEK?pid=ImgDet&rs=1" alt="Main profile logo">
        </div>
        <div class="dark:text-zinc-50 font-mont">
          <p class="text-lg font-bold">{{ user.user_metadata.username }}</p>
          <p class="text-xs font-light">{{ user.email }}</p>
        </div>
      </div>
      <button @click="logout" class="dark:bg-red-500 dark:hover:bg-red-400 h-10 w-10 grid place-items-center rounded-xl transition-colors duration-150">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 dark:fill-zinc-200">
          <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <div class="w-5/6">
      <div class="dark:bg-zinc-800 w-full shadow-md rounded-lg px-4 py-3">
        <div class="flex items-center gap-x-4 mb-3">
          <button class="h-10 w-10 bg-indigo-500 grid place-items-center rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 dark:fill-zinc-200">
              <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
            </svg>
          </button>
          <div>
            <p class="dark:text-zinc-50 font-mont font-bold text-lg">My Photos</p>
            <p class="dark:text-zinc-200 font-mont font-light text-xs">View, upload and delete photos.</p>
          </div>
        </div>
        <div class="flex flex-col flex-nowrap items-center gap-y-2 max-h-[36rem] overflow-y-auto pr-2">
          {{posts}}
          <PhotoItem v-for="img in posts" :key="img" :title="img.title"/>
        </div>
      </div>
    </div>
  </div>
</template>