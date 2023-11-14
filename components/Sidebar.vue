<script lang="ts" setup>
import { SidebarRoute } from '~/components/types/common';

defineProps<{
  isActive: boolean;
}>();

const routes = <SidebarRoute[]>[
  {
    name: 'Home',
    path: '/',
  },
  { name: 'Apps', path: '/apps', paths: [{ name: 'Colorpicker', path: '/apps/colorpicker' }] },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
  { name: 'Login', path: '/login', auth: false },
];

const user = useSupabaseUser();
const route = useRoute();
</script>

<template>
  <Transition name="slide-right" mode="out-in">
    <aside
      v-show="isActive"
      class="block md:hidden fixed top-0 left-0 w-full h-full bg-background-50 z-50 overflow-y-auto"
    >
      <Button
        @click="$emit('toggle')"
        class="btn-outline btn-icon md:hidden right-0 mt-4 mr-4 absolute group"
      >
        <Icon icon="close" />
      </Button>
      <div class="flex flex-col px-8 py-6">
        <h1 class="text-2xl font-bold w-fit mb-4">BombayTech</h1>
        <div class="ml-2 w-fit" v-for="route in routes">
          <TextLink
            v-if="!route.paths && route?.auth === undefined"
            :to="route.path"
            class="mt-4 font-medium text-lg"
            :key="route.name"
          >
            {{ route.name }}
          </TextLink>
          <TextLink
            v-else-if="route.path === '/login' && !user"
            :to="route.path"
            class="mt-4 font-medium text-lg"
            :key="route.name"
          >
            {{ route.name }}
          </TextLink>
          <div v-else-if="route.paths" class="mt-4">
            <TextLink :to="route.path" class="mt-4 font-medium text-lg" :key="route.name">
              {{ route.name }}
            </TextLink>
            <span v-for="path in route.paths" :key="path.name">
              <TextLink :to="path.path" class="mt-4 ml-4">
                {{ path.name }}
              </TextLink>
            </span>
          </div>
        </div>
        <ClientOnly>
          <TextLink
            class="mt-4 font-medium ml-2 text-lg"
            to="/dashboard"
            v-if="user && route.path !== '/dashboard'"
          >
            Dashboard
          </TextLink>
        </ClientOnly>
      </div>
      <div class="bottom-0 w-full absolute py-6 flex items-center justify-between px-6">
        <p>&copy; 2023 BombayTech</p>
        <div class="flex items-center gap-x-3 fill-primary-800">
          <NuxtLink to="https://www.instagram.com/mau_bomb/" target="_blank">
            <Icon
              icon="instagram"
              className="fill-primary-800 hover:fill-primary-700 transition-colors duration-200"
            />
          </NuxtLink>
          <NuxtLink to="https://github.com/BombayV" target="_blank">
            <Icon
              icon="github"
              className="fill-primary-800 hover:fill-primary-700 transition-colors duration-200"
            />
          </NuxtLink>
          <NuxtLink to="/https://www.linkedin.com/in/mauricio-riveraperez/" target="_blank">
            <Icon
              icon="linkedin"
              className="fill-primary-800 hover:fill-primary-700 transition-colors duration-200"
            />
          </NuxtLink>
        </div>
      </div>
    </aside>
  </Transition>
</template>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
