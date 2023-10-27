<script lang="ts" setup>
definePageMeta({
  middleware: ['user'],
  layout: 'dashnavbar',
});

useSeoMeta({
  title: 'Dashboard',
  description: 'Dashboard',
});

const user = useSupabaseUser();
const dashboard = new useDashboard(user);

const gallery = useGallery();
const { isOpen, setModal } = useUploadModal();
const { useLogout } = useUser();
const images = ref();

onMounted(async () => {
  images.value = await gallery.getGallery();
});
</script>

<template>
  <NuxtLayout>
    <div class="grow flex flex-col">
      <section class="flex flex-col mx-auto w-full relative max-w-7xl px-6">
        <div
            class="w-full py-3 px-3.5 bg-background-100 rounded-full mt-8 flex items-center justify-between"
        >
          <div class="flex gap-x-4 items-center">
            <Avatar :image="dashboard.avatarUrl" description="Avatar profile" />
            <div class="flex flex-col">
              <h1 class="text-base md:text-lg xl:text-xl">{{ dashboard.username }}</h1>
              <p class="text-xs xl:text-sm">{{ dashboard.email }}</p>
            </div>
          </div>
          <Button
              className="aspect-square rounded-full p-3 bg-red-400 hover:bg-red-300"
              @click="useLogout"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="fill-background-800 w-5 h-5 sm:w-6 sm:h-6"
            >
              <path
                  fill-rule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
              />
            </svg>
          </Button>
        </div>
      </section>
      <section class="flex flex-col mx-auto w-full relative max-w-7xl px-6 mb-8 grow">
        <div
            class="w-full py-3 px-5 bg-background-100 rounded-xl mt-8 flex items-center justify-between"
        >
          <h1>Gallery</h1>
          <Button @click="setModal(true)" className="btn-outline rounded-full gap-x-2 pl-3 group">
            Upload
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4 sm:w-5 sm:h-5 fill-background-800 group-hover:fill-background-50 transition duration-200"
            >
              <path
                  fill-rule="evenodd"
                  d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                  clip-rule="evenodd"
              />
            </svg>
          </Button>
        </div>
        <!--      <div-->
        <!--        v-if="images && images.length > 0"-->
        <!--        class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-full px-3 py-5 bg-background-100 rounded-xl mt-4"-->
        <!--      >-->
        <!--        <UploadedImage-->
        <!--          v-for="img in images"-->
        <!--          :key="img"-->
        <!--          :id="img.id"-->
        <!--          :name="`${img.name}`"-->
        <!--          :description="`${img.description}`"-->
        <!--          :image="img.src"-->
        <!--        />-->
        <!--      </div>-->
        <div class="w-full h-full px-3 py-5 bg-background-100 rounded-xl mt-4 grow grid place-items-center">
          <p class="text-center font-medium text-2xl">No images found</p>
        </div>
      </section>
      <UploadModal :isOpen="isOpen" @close="setModal" />
    </div>
  </NuxtLayout>
</template>
