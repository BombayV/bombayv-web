export const UseImages = async (glob: object) => {
  const files = Object.keys(await glob);
  return files.map((filename) => {
    return filename.replace('/public/', '/');
  });
};
