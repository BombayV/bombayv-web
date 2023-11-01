export const useSidebar = () => {
  const isOpenSidebar = ref<boolean>(false);
  const toggleSidebar = (): void => {
    isOpenSidebar.value = !isOpenSidebar.value;
    if (isOpenSidebar.value) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  return {
    isOpenSidebar,
    toggleSidebar,
  };
};
