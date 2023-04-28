<script lang="ts" setup>
const user = useSupabaseUser()
const { auth } = useSupabaseAuthClient()

watchEffect(() => {
  if (user.value) {
    navigateTo('/dashboard')
  }
})
</script>

<template>
  <div>
    <button class="btn" @click="auth.signInWithOAuth({ provider: 'github' })">Github</button>
  </div>
</template>