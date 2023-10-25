export const useGallery = <T extends object>(user: T) => {
  return {
    user,
  }
}