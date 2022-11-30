<script setup lang="ts">
definePageMeta({
  title: 'Create your account',
  layout: 'empty',
  middleware: ['user']
})

const router = useRouter()
const client = useSupabaseClient()

const userData = ref({
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  error: '',
  success: false
})

const signUp = async () => {
  const { data, error } = await client.auth.signUp({
    email: userData.value.email,
    password: userData.value.password,
    options: {
      data: {
        username: userData.value.username
      }
    }
  })
  if (error) {
    userData.value.error = error.message
    setTimeout(() => {
      userData.value.error = ''
    }, 3000)
  }

  if (data && data.user && data.user.identities && data.session === null) {
    userData.value.success = true
    userData.value.error = 'Check your email for a confirmation link.'
    // Clean up the form
    userData.value.username = ''
    userData.value.email = ''
    userData.value.password = ''
    userData.value.passwordConfirmation = ''
    setTimeout(() => {
      userData.value.error = ''
    }, 10000)
  }
}

const checkConfirmEmail = () => {
  // Check if the email has proper format
  const rgx = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
  return rgx.test(userData.value.email)
}

const checkUsername = () => {
  const rgx = new RegExp(/^[a-zA-Z0-9]+$/)
  return rgx.test(userData.value.username)
}

const checkPassword = () => {
  const rgx = new RegExp(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
  return rgx.test(userData.value.password)
}

const handleRegister = () => {
  if (!checkUsername()) {
    userData.value.error = 'Username must be between 3 and 16 characters'
    setTimeout(() => {
      userData.value.error = ''
    }, 3000)
    return
  }

  if (!checkConfirmEmail()) {
    userData.value.error = 'Please enter a valid email address.'
    setTimeout(() => {
      userData.value.error = ''
    }, 3000)
    return
  }

  if (!checkPassword()) {
    userData.value.error = 'Password must be at least 8 characters long and contain at least one uppercase and lowercase letter.'
    setTimeout(() => {
      userData.value.error = ''
    }, 3000)
    return
  }

  if (userData.value.password !== userData.value.passwordConfirmation) {
    userData.value.error = 'Passwords do not match.'
    setTimeout(() => {
      userData.value.error = ''
    }, 3000)
    return
  }

  signUp()
}

const user = useSupabaseUser()
onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo('/dashboard')
    }
  })
})
</script>

<template>
  <div id="noti-wrapper" class="w-screen h-screen relative grid place-items-center">
    <Head>
      <Title>{{ $route.meta.title }}</Title>
    </Head>
    <NuxtLink to="/" class="fixed top-0 left-0 ml-4 mt-4 text-lg hover:underline duration-150 cursor-pointer font-bold dark:text-zinc-50">Go Home</NuxtLink>
    <div class="flex flex-col items-center font-mont dark:text-zinc-300 w-80 rounded-lg px-4 py-4">
      <div class="flex flex-col items-center mb-3">
        <p class="font-medium text-xl">Create an account</p>
        <p class="font-light text-sm dark:text-zinc-500">Or <NuxtLink class="font-medium dark:text-zinc-500 dark:hover:text-indigo-300 hover:text-indigo-500 text-zinc-500 transition-colors duration-150" to="/login">login into your account.</NuxtLink></p>
      </div>
      <Input type="text" v-model="userData.username" placeholder="Username"/>
      <Input type="email" v-model="userData.email" placeholder="Email"/>
      <Input v-model="userData.password" type="password" placeholder="Password"/>
      <Input v-model="userData.passwordConfirmation" type="password" placeholder="Confirm password" :good="userData.success" :label="userData.error"/>
      <button @click="handleRegister" type="button" class="w-full bg-indigo-500 hover:bg-indigo-400 text-zinc-50 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded font-semibold transition-colors duration-200 text-sm py-1 shadow-md">Sign Up</button>
    </div>
  </div>
</template>