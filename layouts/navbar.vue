<script lang="ts" setup>
interface Route {
  name: string
  path: string
}

const routes = <Route[]>[
  { name: 'Apps', path: '/apps' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

const user = useSupabaseUser()
console.log()
</script>

<template>
  <div class="w-full flex flex-col">
    <header class="h-20 bg-red-500 flex items-center justify-between mx-auto max-w-7xl w-full px-6">
      <div class="font-black text-xl">
        BombayTech
      </div>
      <nav class="hidden md:flex">
        <NuxtLink v-for="route in routes" :key="route.name" :to="route.path" class="mx-2">
          {{ route.name }}
        </NuxtLink>
      </nav>
    </header>
    <slot/>
    <Footer/>
  </div>
</template>