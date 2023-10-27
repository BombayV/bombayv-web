<script lang="ts" setup>
defineProps<{
  id: number;
  image: string;
  name: string;
  description: string;
}>();
</script>

<template>
  <div class="bg-accent-200 drop-shadow px-2 p-2 rounded-xl">
    <div
      @click="$emit('view', id)"
      class="grid place-items-center group relative rounded-t-lg overflow-hidden"
    >
      <NuxtImg
          :src="image"
          :alt="description"
          class="object-cover w-full h-36 rounded-md"
          :placeholder="true"
          :blur="true"
      />
      <span
        class="absolute grid place-items-center w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8 fill-background-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <path
            fill-rule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>
    <div class="flex items-center justify-between mt-2">
      <div>
        <p class="font-semibold text-base">{{ name }}</p>
        <p class="text-sm">{{ description }}</p>
      </div>
      <div class="flex gap-x-2">
        <Button @click="$emit('edit', id)" className="btn-icon bg-primary-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="fill-background-800 w-5 h-5"
          >
            <path
              d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z"
            />
            <path
              d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z"
            />
          </svg>
        </Button>
        <Button @click="$emit('delete', id)" className="btn-icon bg-red-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="fill-background-800 w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
              clip-rule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </div>
  </div>
</template>
