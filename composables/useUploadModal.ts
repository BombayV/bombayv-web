export const useUploadModal = () => {
  const isOpen = ref(false);
  const isUploading = ref(false);
  const images = ref<File[]>([]);

  const uploadSingleImage = async (image: File) => {
    isUploading.value = true;
    const result = await uploadImage(image);
    images.value.push(result);
    isUploading.value = false;
  };

  const uploadImages = async (images: File[]) => {
    isUploading.value = true;
    const result = await Promise.all(images.map(uploadImage));
    images.value.push(...result);
    isUploading.value = false;
  };

  const uploadImage = async (image: File) => {};

  const supabaseUpload = async (image: File) => {};

  const setModal = (value: boolean = !isOpen.value) => {
    isOpen.value = value;
  };

  return {
    isOpen,
    isUploading,
    images,
    uploadSingleImage,
    uploadImages,
    supabaseUpload,
    setModal,
  };
};
