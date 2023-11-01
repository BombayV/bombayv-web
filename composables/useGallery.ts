import { ImageData, FetchStatus } from '~/components/types/common';

export const useGallery = <T extends object>() => {
  const supabase = useSupabaseClient();
  const fetchStatus = ref<FetchStatus<T>>({
    status: 'loading',
  });

  const getGallery = async <T extends any>(): Promise<T | null> => {
    fetchStatus.value.status = 'loading';
    const { data, error } = (await supabase.from('images').select()) as any;

    if (data) {
      const url = (fileName: string) =>
        `https://mlbpkkmmhrbqxadyssrp.supabase.co/storage/v1/object/public/gallery/${fileName}`;
      for (let i = 0; i < data.length; i++) {
        if (data[i]?.src) {
          data[i].src = url(data[i].src);
        }
      }
    }

    if (error) {
      fetchStatus.value.status = 'error';
      fetchStatus.value.error = error;
      throw error;
    }
    return data;
  };

  const uploadGallery = async <T extends any>(dataImgs: FileList): Promise<T | any> => {

    const dataAsArray = []
    for (let i = 0; i < dataImgs.length; i++) {
      dataAsArray.push({
        src: dataImgs[i].name,
        name: dataImgs[i].name,
        description: "Testing description",
      })
    }

    // @ts-ignore
    const { data, error: insertError } = await supabase.from('images').insert(
      dataAsArray
    ).select();
    if (insertError) throw insertError;

    for (let i = 0; i < dataImgs.length; i++) {
      const { error: storageError } = await supabase.storage
      .from('gallery')
      .upload(dataImgs[i].name, dataImgs[i]);
      if (storageError) throw storageError;
    }

    return data;
  };

  const uploadSingleGallery = async <T extends any>(dataImg: File): Promise<T | any> => {
    const { error: storageError } = await supabase.storage
    .from('gallery')
    .upload(dataImg.name, dataImg);
    if (storageError) throw storageError;

    // @ts-ignore
    const { data, error: insertError } = await supabase.from('images').insert([
      {
        src: dataImg.name,
        name: dataImg.name,
        description: "Testing description",
      },
    ]).select();
    if (insertError) throw insertError;

    return data;
  }

  const deleteGallery = async <T extends any>(id: number, src: string | File): Promise<T | any> => {
    let parsedSrc, fileName: string;
    if (typeof src === 'string') {
      parsedSrc = src.split('/');
      fileName = parsedSrc[parsedSrc.length - 1];
    } else {
      fileName = (src as File).name;
    }
    const { data: dataStorage, error: errorStorage } = await supabase.storage
      .from('gallery')
      .remove([fileName]);
    if (errorStorage) throw errorStorage;

    const { error } = await supabase.from('images').delete().eq('id', id);
    if (error) throw error;

    return dataStorage;
  };

  return {
    getGallery,
    uploadGallery,
    uploadSingleGallery,
    deleteGallery,
    fetchStatus,
  };
};

//https://mlbpkkmmhrbqxadyssrp.supabase.co/storage/v1/object/public/gallery/B%20(1).png
