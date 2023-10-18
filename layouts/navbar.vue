<script lang="ts" setup>
interface Route {
  name: string
  path: string
  auth?: boolean
}

const routes = <Route[]>[
  { name: 'Apps', path: '/apps' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
  { name: 'Login', path: '/login', auth: false },
]

const route = useRoute()
const user = useSupabaseUser()
const { useLogout } = useUser()
</script>

<template>
  <div class="w-full flex flex-col">
    <header class="h-20 flex items-center justify-between mx-auto max-w-7xl w-full px-6">
      <div class="font-black text-xl">
        BombayTech
      </div>
      <nav class="hidden md:flex">
        <span v-for="route in routes" :key="route.name">
          <ClientOnly v-if="route.name === 'Login'">
            <NuxtLink class="mx-2" :to="route.path" v-if="route.auth !== undefined ? user ? route.auth : true : true">
              {{ route.name }}
            </NuxtLink>
          </ClientOnly>
          <NuxtLink v-else class="mx-2" :to="route.path">
            {{ route.name }}
          </NuxtLink>
        </span>
        <ClientOnly>
          <button
              class="mx-2"
              v-if="user && route.path === '/dashboard'"
              @click="useLogout"
              type="button"
          >
            Logout
          </button>
          <NuxtLink class="mx-2" to="/dashboard" v-if="user && route.path !== '/dashboard'">
            <TextButton>
              Dashboard
            </TextButton>
          </NuxtLink>
        </ClientOnly>
      </nav>
    </header>
    <slot/>
    <Footer/>
  </div>
</template>