interface ImageData {
  src: string
  name: string
  description?: string
  file: File
}

export const useGallery = <T extends object>() => {
  const supabase = useSupabaseClient()

  const getGallery = async () => {
    const { data, error } = await supabase
      .storage
      .from('gallery')
      .list()
    if (error) throw error
    return data
  }

  const uploadGallery = async (dataImg: ImageData) => {
    console.log(dataImg)
    // Upload file to storage bucket
    const { error } = await supabase
      .storage
      .from('gallery')
      .upload(dataImg.name, dataImg.image)
    if (error) throw error
    // Insert new row into images table
    const test = await supabase
    .from('images')
    .insert([
      { src: dataImg.src, name: dataImg.name, description: dataImg.description }
    ])

    return test
  }

  return {
    getGallery,
    uploadGallery
  }
}

//https://mlbpkkmmhrbqxadyssrp.supabase.co/storage/v1/object/public/gallery/B%20(1).png