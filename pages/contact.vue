<script lang="ts" setup>
import { VNode } from "vue";

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
      class="flex flex-col items-center mx-auto w-full text-center relative max-w-7xl px-6 py-8 md:py-16 h-full grow"
    >
      <h1 class="text-3xl lg:text-4xl 2xl:text-5xl">Contact</h1>
      <span class="block h-0.5 w-20 bg-background-800 my-4"></span>
      <p class="text-base lg:text-lg 2xl:text-xl">
        Send me a message with your inquiry such as a job offer, question, or just to say hi.
      </p>
      <div class="flex flex-col">
        <form @submit.prevent="contact.sendForm" autocomplete="on" class="flex flex-col">
          <Input id="email" label="Name" placeholder="John Doe" v-model="contact.email.value"/>
          <Input id="name" label="Name" placeholder="John Doe" v-model="contact.subject.value"/>
          <Button class="btn-primary" type="submit" label="Send">Send Message</Button>
        </form>
        <div class="hidden md:flex"></div>
      </div>
    </section>
  </NuxtLayout>
</template>
