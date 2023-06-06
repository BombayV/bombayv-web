<script lang="ts" setup>
const { auth } = useSupabaseAuthClient();
const user = useSupabaseUser();
const navbarRef = ref<HTMLElement | null>(null);
const activeSidebar = ref<boolean>(false);

const setSidebar = (value: boolean) => {
  activeSidebar.value = value;
  if (activeSidebar.value) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
};
</script>

<template>
  <header
    ref="navbarRef"
    class="absolute z-20 transform-gpu transition-transform duration-500 navbar max-w-7xl mx-auto left-1/2 -translate-x-1/2">
    <div class="mx-2 flex-1 px-2">
      <NuxtLink class="text-lg font-extrabold xl:text-xl text-blue-100" to="/">BombayTech</NuxtLink>
    </div>
    <div class="mx-2 hidden flex-none px-2 md:flex">
      <div class="flex items-stretch">
        <NuxtLink to="/personal" class="btn btn-ghost btn-sm rounded-btn xl:text-md"
          >Personal</NuxtLink
        >
        <NuxtLink to="/public" class="btn btn-ghost btn-sm rounded-btn xl:text-md"
          >Public</NuxtLink
        >
        <NuxtLink to="/support" class="btn btn-ghost btn-sm rounded-btn xl:text-md"
          >Support</NuxtLink
        >
        <NuxtLink
          v-if="!user"
          class="btn btn-ghost btn-sm rounded-btn xl:text-md"
          to="/auth/login"
          >Log in</NuxtLink
        >
        <NuxtLink
          v-if="!user"
          class="btn btn-ghost btn-sm rounded-btn xl:text-md"
          to="/auth/register"
          >Register</NuxtLink
        >
        <NuxtLink
          v-if="user"
          class="btn btn-ghost btn-sm rounded-btn hover:bg-neutral xl:text-md"
          to="/dashboard"
          >Dashboard</NuxtLink
        >
        <button
          @click="auth.signOut"
          v-if="user"
          class="btn btn-ghost btn-sm rounded-btn hover:bg-error/80 hover:text-white xl:text-md">
          Log out
        </button>
      </div>
    </div>
    <button type="button" @click="setSidebar(true)" class="btn btn-square btn-ghost md:hidden">
      <svg
        class="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"></path>
      </svg>
    </button>
  </header>
  <Transition name="fade-in">
    <Sidebar v-if="activeSidebar" @close="setSidebar(false)" :user="user" />
  </Transition>
  <slot class="max-w-2xl"/>
</template>

<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
</style>
