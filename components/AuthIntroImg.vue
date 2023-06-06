<script lang="ts" setup>
const displayedImg = ref<AuthImageData>({
  author: '',
  src: ''
})

const allImages = <AuthImageData[]>[
  { author: 'Bombay', src: 'https://th.bing.com/th/id/R.31cbc03376220c9f46128745d8a80d0d?rik=qPupDtEXKPzXAg&pid=ImgRaw&r=0' },
  { author: 'Dante', src: 'https://media.discordapp.net/attachments/760985469151346720/1112942974217764994/image.png' }
]


onMounted(() => {
  displayedImg.value = allImages[Math.floor(Math.random() * allImages.length)]
})
</script>

<template>
  <div class="hidden w-3/5 min-h-[100vh] xl:flex relative">
    <NuxtImg
        :src="displayedImg.src || allImages[0].src"
        alt="Display image"
        format="webp"
        fit="cover"
        quality="60"
        class="object-cover object-center min-h-full min-w-full"
        draggable="false"
    />
    <p class="absolute bottom-0 right-0 m-2 font-cali text-2xl">{{displayedImg.author || allImages[0].author}}</p>
  </div>
</template>