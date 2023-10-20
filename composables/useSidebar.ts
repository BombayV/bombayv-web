export const useSidebar = () => {
  const isOpenSidebar = ref(true)
  const toggleSidebar = () => {
    console.log('toggleSidebar')
    isOpenSidebar.value = !isOpenSidebar.value
  }

  return {
    isOpenSidebar,
    toggleSidebar
  }
}