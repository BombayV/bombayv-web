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

  return {
    getGallery
  }
}

//https://mlbpkkmmhrbqxadyssrp.supabase.co/storage/v1/object/public/gallery/B%20(1).png