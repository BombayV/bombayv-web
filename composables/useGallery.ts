interface ImageData {
  src: string;
  name: string;
  description?: string;
  image: File;
}

export const useGallery = <T extends object>() => {
  const supabase = useSupabaseClient();

  const getGallery = async (): Promise<any> => {
    const { data, error } = await supabase.from('images').select() as any;

    if (data) {
      const url = (fileName: string) =>
        `https://mlbpkkmmhrbqxadyssrp.supabase.co/storage/v1/object/public/gallery/${fileName}`;
      for (let i = 0; i < data.length; i++) {
        if (data[i]?.src) {
          data[i].src = url(data[i].src);
        }
      }
    }

    if (error) throw error;
    return data;
  };

  const uploadGallery = async (dataImg: ImageData) => {
    const { error: storageError } = await supabase.storage
      .from('gallery')
      .upload(dataImg.image.name, dataImg.image);
    if (storageError) throw storageError;

    // @ts-ignore
    const { data, error: insertError } = await supabase.from('images').insert([
      {
        src: dataImg.image.name,
        name: dataImg.name,
        description: dataImg.description,
      },
    ]);
    if (insertError) throw insertError;

    return data;
  };

  const deleteGallery = async (id: number, src: string) => {
    const { data, error } = await supabase.from('images').delete().eq('id', id);
    if (error) throw error;

    const { data: dataStorage, error: errorStorage } = await supabase.storage
      .from('gallery')
      .remove([src]);
    if (errorStorage) throw errorStorage;

    return data;
  }

  return {
    getGallery,
    uploadGallery,
  };
};

//https://mlbpkkmmhrbqxadyssrp.supabase.co/storage/v1/object/public/gallery/B%20(1).png
