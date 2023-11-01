<script lang="ts" setup>
const { useOAuth, user } = useUser();
const router = useRouter();


watchEffect(() => {
  if (user.value) {
    router.push('/dashboard');
  }
});
</script>

<template>
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full px-6">
    <h1 class="font-semibold">Welcome Back</h1>
    <p class="font-light mt-2">Sign back in to your account</p>
    <div class="grid grid-cols-3 gap-x-4 mt-4">
      <Button className="btn-primary" @click="useOAuth('github')">
        <Icon icon="github" className="h-6 w-6 !fill-background-50" />
      </Button>
      <Button className="btn-primary fill-background-50" @click="useOAuth('discord')">
        <Icon icon="discord" className="h-6 w-6" />
      </Button>
      <Button className="btn-primary fill-background-50" @click="useOAuth('google')">
        <Icon icon="google" className="h-6 w-6" />
      </Button>
    </div>
    <div class="relative w-full mt-4">
      <div class="absolute inset-0 flex items-center">
        <div class="w-full border-t border-primary-content/30"></div>
      </div>
      <div class="relative flex justify-center text-sm">
        <span class="px-2 text-sm bg-base-100 bg-background dark:bg-backgroundDark">or</span>
      </div>
    </div>
    <p class="text-sm mt-4">
      If you don't have an already existing account, you will not be able to sign in. Please don't
      try it since it's not meant for public use. Please go back to the
      <NuxtLink
        to="/"
        class="text-primary-content dark:text-primary-contentDark underline transition-colors duration-200 hover:text-primary dark:hover:text-primaryDark"
      >
        homepage.
      </NuxtLink>
    </p>
  </div>
</template>
