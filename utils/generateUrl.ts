export const generateUrl = (file: File): string => {
  const url = URL.createObjectURL(file);
  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);

  return url;
};
