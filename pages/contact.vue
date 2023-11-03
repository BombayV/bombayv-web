<script lang="ts" setup>
import { VNode } from 'vue';

definePageMeta({
  layout: 'navbar',
});

useSeoMeta({
  title: 'Contact',
  description:
    'Contact Mauricio Rivera (Bombay) via email or social media. Send a message with your inquiry such as a job offer, question, or just to say hi.',
});

const contact = new useContact();
</script>

<template>
  <NuxtLayout>
    <section
      class="flex flex-col items-center mx-auto w-full text-center relative max-w-7xl px-6 pt-8 md:py-16 md:pb-8 h-full grow"
    >
      <h1 class="text-3xl lg:text-4xl 2xl:text-5xl">Contact</h1>
      <span class="block h-0.5 w-20 bg-background-800 my-4"></span>
      <p class="text-base lg:text-lg 2xl:text-xl">
        Send me a message with your inquiry such as a job offer, question, or just to say hi.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 w-full mt-6 lg:mt-16">
        <form
          @submit.prevent="contact.sendForm"
          autocomplete="on"
          class="flex flex-col w-3/4 mx-auto relative gap-y-2"
        >
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="you@email.com"
            v-model="contact.email.value"
          />
          <Input
            type="text"
            id="subject"
            label="Subject"
            placeholder="What is on your mind?"
            v-model="contact.subject.value"
          />
          <TextArea
            id="message"
            label="Message"
            placeholder="To whom it may concern..."
            v-model="contact.message.value"
          />
          <Button class="btn-primary mt-2" type="submit" label="Send">Send Message</Button>
        </form>
        <div class="flex flex-col md:items-end w-3/4 mx-auto gap-y-6 md:mt-0 mt-12">
          <div class="flex flex-col items-start md:items-end">
            <h2 class="text-xl lg:text-2xl text-background-900">Social Media</h2>
            <span class="block h-0.5 w-20 bg-background-800 my-2"></span>
            <div class="flex flex-col items-start md:items-end gap-y-2 ml-2 mt-2">
              <NuxtLink target="_blank" to="https://www.linkedin.com/in/mauricio-riveraperez/">
                LinkedIn
              </NuxtLink>
              <NuxtLink target="_blank" to="https://instagram.com/mau_bomb"> Instagram </NuxtLink>
              <NuxtLink target="_blank" to="https://github.com/BombayV"> GitHub </NuxtLink>
            </div>
          </div>
          <div class="flex flex-col items-start md:items-end">
            <h2 class="text-xl lg:text-2xl text-background-900">Contact Info</h2>
            <span class="block h-0.5 w-20 bg-background-800 my-2"></span>
            <div class="flex flex-col items-start md:items-end gap-y-2 ml-2 mt-2">
              <NuxtLink class="transition" to="mailto:mauricio.sebastian.rivera@gmail.com">
                mauricio.sebastian.rivera@gmail.com
              </NuxtLink>
              <NuxtLink
                class="transition"
                to="mailto:mauricio.sebastian.rivera@sebasphotography22@gmail.com"
              >
                sebasphotography22@gmail.com
              </NuxtLink>
            </div>
          </div>
          <span class="block h-0.5 w-20 bg-background-800 my-2 mx-auto md:hidden"></span>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
