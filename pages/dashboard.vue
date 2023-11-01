<script lang="ts" setup>
import { GalleryImage } from '~/components/types/common';
import { generateUrl } from '~/utils/generateUrl';

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

const { getGallery, deleteGallery, fetchStatus } = useGallery();
const { isOpen, setModal } = useUploadModal();
const { useLogout } = useUser();

const images = ref<GalleryImage[] | null>(null);
const activePreview = ref<GalleryImage | null>(null);
const deleteModalData = ref<{
  isOpen: boolean;
  id: number | null;
  src: string | null;
}>({
  isOpen: false,
  id: null,
  src: null,
});
const latestId = ref<number>(-1);

const setActivePreview = (id: number | null) => {
  if (!images.value) return;
  if (id === -1) return (activePreview.value = null);

  const image = images.value.find((img) => img.id === id);
  if (image && image !== activePreview.value) {
    activePreview.value = image;
  }
};

const deleteModalResolve = (passed: boolean = false) => {
  fetchStatus.value.status = 'loading';
  deleteModalData.value.isOpen = false;
  if (!passed) return (deleteModalData.value = { isOpen: false, id: null, src: null });

  if (deleteModalData.value.id && deleteModalData.value.src) {
    deleteGallery(deleteModalData.value.id, deleteModalData.value.src);
    if (images.value) {
      images.value = images.value.filter((img) => img.id !== deleteModalData.value.id);
      if (Object.values(images.value).length === 0) {
        fetchStatus.value.status = 'none';
      } else {
        fetchStatus.value.status = 'success';
      }
    }

    deleteModalData.value = { isOpen: false, id: null, src: null };
  }
};

const deleteModal = async (id: number, src: string) => {
  deleteModalData.value = {
    isOpen: true,
    id,
    src,
  };
};

const editModal = (id: number) => {
  if (!images.value) return;
  const image = images.value.find((img) => img.id === id);
  if (image) {
    console.log(image);
  }
};

const handleFileSync = async (newFiles: FileList) => {
  fetchStatus.value.status = 'loading';
  for (const file of newFiles) {
    if (images.value) {
      latestId.value += 1;
      images.value.push({
        id: latestId.value,
        src: file,
        name: file.name,
        description: 'No description',
        created_at: new Date().toISOString(),
      });
    }
  }
  fetchStatus.value.status = 'success';
};

onMounted(async () => {
  const fetchedImages = await getGallery();
  if (fetchedImages) {
    images.value = fetchedImages as GalleryImage[];
    const fetchedAsArray = Object.values(fetchedImages);
    if (fetchedAsArray.length > 0) {
      latestId.value = fetchedAsArray[fetchedAsArray.length - 1].id;
      fetchStatus.value.status = 'success';
    } else {
      fetchStatus.value.status = 'none';
    }
  }
});
</script>

<template>
  <NuxtLayout>
    <div class="grow flex flex-col">
      <section class="flex flex-col mx-auto w-full relative max-w-7xl px-6">
        <div
          class="w-full py-3 px-5 bg-background-100 rounded-full mt-8 flex items-center justify-between"
        >
          <div class="flex gap-x-4 items-center">
            <Avatar :image="dashboard.avatarUrl" description="Avatar profile" />
            <div class="flex flex-col">
              <h1 class="text-base md:text-lg xl:text-xl">{{ dashboard.username }}</h1>
              <p class="text-xs xl:text-sm">{{ dashboard.email }}</p>
            </div>
          </div>
          <Button
            className="rounded-full bg-error-100 hover:bg-error-200 transition duration-200 gap-x-2 pl-4 pr-3 text-background-50"
            @click="useLogout"
          >
            Logout
            <Icon icon="logout" />
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
            <Icon icon="upload" />
          </Button>
        </div>
        <div
          v-if="images && images.length > 0 && fetchStatus.status === 'success'"
          class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-full px-3 py-5 bg-background-100 rounded-xl mt-4"
        >
          <UploadedImage
            v-for="img in images"
            :key="img"
            :image="img"
            @view="setActivePreview"
            @edit="editModal"
            @delete="deleteModal"
          />
        </div>
        <div
          v-if="fetchStatus.status !== 'success'"
          class="w-full h-full px-3 py-5 bg-background-100 rounded-xl mt-4 grow grid place-items-center"
        >
          <p
            v-if="images && fetchStatus.status === 'none'"
            class="text-center font-medium text-2xl"
          >
            No images found
          </p>
          <p v-else-if="fetchStatus.status === 'loading'" class="text-center font-medium text-2xl">
            Fetching images
          </p>
          <p v-else-if="fetchStatus.status === 'error'" class="text-center font-medium text-2xl">
            Could not fetch images
          </p>
        </div>
      </section>
      <UploadModal :isOpen="isOpen" @close="setModal" @sync="handleFileSync" />
      <UploadedImagePreview :image="activePreview" @close="setActivePreview" />
      <ConfirmationModal
        :isOpen="deleteModalData.isOpen"
        @cancel="deleteModalResolve"
        @confirm="deleteModalResolve"
      />
    </div>
  </NuxtLayout>
</template>

<style>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.3s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
</style>
