export const useSidebar = () => {
  const isOpenSidebar = ref(false);
  const toggleSidebar = () => {
    isOpenSidebar.value = !isOpenSidebar.value;
    console.log(isOpenSidebar.value);
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
