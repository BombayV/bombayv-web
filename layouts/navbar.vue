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
const { isOpenSidebar, toggleSidebar } = useSidebar()
</script>

<template>
  <div class="w-full flex flex-col">
    <header class="relative h-20 flex items-center justify-between mx-auto max-w-7xl w-full px-6">
      <div class="font-black text-xl">
        BombayTech
      </div>
      <nav class="hidden md:flex">
        <span v-for="route in routes" :key="route.name">
          <ClientOnly v-if="route.name === 'Login'">
            <TextLink className="mx-2" :to="route.path" v-if="route.auth !== undefined ? user ? route.auth : true : true">
              {{ route.name }}
            </TextLink>
          </ClientOnly>
          <TextLink v-else className="mx-2" :to="route.path">
            {{ route.name }}
          </TextLink>
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
          <NuxtLink class="mx-2 btn" to="/dashboard" v-if="user && route.path !== '/dashboard'">
              Dashboard
          </NuxtLink>
        </ClientOnly>
      </nav>
      <Button @click="toggleSidebar" class="btn-outline aspect-square p-2 md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
        </svg>
      </Button>
    </header>
    <slot/>
    <Footer/>
  </div>
  <Sidebar @toggle="toggleSidebar" :isActive="isOpenSidebar"/>
</template>