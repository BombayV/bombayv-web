export default defineNuxtRouteMiddleware ((to: any, from: any) => {
  const user = useSupabaseUser()
  if (!user.value) {
   return navigateTo('/login')
  }
})