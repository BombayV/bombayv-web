<script lang="ts" setup>
import { Route } from '~/components/types/common';

const routes = <Route[]>[
  { name: 'Apps', path: '/apps' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const { isOpenSidebar, toggleSidebar } = useSidebar();
</script>

<template>
  <div class="w-full flex flex-col min-h-screen justify-between">
    <div class="flex flex-col h-full grow">
      <header class="relative h-16 flex items-center justify-between mx-auto max-w-7xl w-full px-6">
        <NuxtLink to="/">
          <p class="font-black text-xl">BombayTech</p>
        </NuxtLink>
        <nav class="hidden md:flex">
          <span v-for="route in routes" :key="route.name">
            <TextLink className="mx-2" :to="route.path">
              {{ route.name }}
            </TextLink>
          </span>
        </nav>
        <Button @click="toggleSidebar" class="btn-outline btn-icon md:hidden group">
          <Icon icon="hamburger" />
        </Button>
      </header>
      <slot />
    </div>
    <Footer :intro="true" />
  </div>
  <Sidebar @toggle="toggleSidebar" :isActive="isOpenSidebar" />
</template>
