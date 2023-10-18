type Provider = 'google' | 'github' | 'discord';

export const useUser = () => {
  const { auth } = useSupabaseClient();

  const useOAuth = async (provider: Provider) => {
    try {
      const { data, error } = await auth.signInWithOAuth({
        provider
      })
      if (error) {
        console.error(error);
        return error;
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  const useEmail = async (email: string, password: string) => {

  }

  const useLogout = async () => {
    try {
      const { error } = await auth.signOut();
      if (error) {
        console.error(error);
        return error;
      }

      navigateTo('/')
    } catch (error) {
      console.error(error);
    }
  }

  return {
    useOAuth,
    useEmail,
    useLogout
  }
}