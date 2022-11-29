export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  if (!user.value && to.path === '/dashboard') {
    return navigateTo('/login')
  } else if (user.value && to.path === '/login' || user.value && to.path === '/register') {
    return navigateTo('dashboard')
  }
})