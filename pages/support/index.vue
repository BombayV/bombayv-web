<template>
  <div>
    <NuxtLayout name="navbar">
      <div class="flex flex-col h-full items-center mx-auto pb-8 w-full">
        <div
          class="flex flex-col items-center min-h-[30rem] md:min-h-[32rem] justify-end gap-y-2 text-center relative bg-base-300 pb-20 px-8 w-full">
          <h1 class="font-extrabold text-4xl md:text-6xl text-neutral-100">
            All the <span class="text-slate-300">support</span><br />
            You will <span class="text-slate-400">ever</span> need
          </h1>
          <p class="font-medium text-neutral-300 w-fit text-base md:text-lg mt-2">
            Find frequent questions, review our legal policies, and start sharing your artwork.
          </p>
          <div class="flex items-center gap-x-4 mt-8">
            <NuxtLink
              to="/dashboard"
              target="_blank"
              class="bg-cyan-600 hover:bg-cyan-700 py-2.5 pr-8 px-4 rounded-md text-white flex gap-x-2 font-bold btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 mb-1">
                <path
                  fill-rule="evenodd"
                  d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                  clip-rule="evenodd" />
              </svg>
              Dashboard
            </NuxtLink>
            <NuxtLink
              to="/personal/apps"
              class="bg-sky-800 py-2.5 px-4 rounded-md text-white font-bold btn hover:bg-sky-900">
              Check out apps
            </NuxtLink>
          </div>
        </div>
        <span class="h-0.5 w-1/2 bg-slate-400 my-16 block rounded-full"></span>
        <div
          class="flex flex-col md:flex-row justify-evenly gap-y-8 md:gap-x-8 relative w-full px-8 max-w-7xl">
          <NuxtLink to="/support/docs" class="md:w-1/3">
            <SupportCard
              class="bg-amber-500 bg-opacity-40 hover:bg-opacity-50 duration-200 transition-all"
              title="Documentation"
              description="Learn how to upload your art and use other integrated aplications.">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-14 h-14 fill-amber-100">
                <path d="M11.625 16.5a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
                <path
                  fill-rule="evenodd"
                  d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 001.06-1.06l-1.047-1.048A3.375 3.375 0 1011.625 18z"
                  clip-rule="evenodd" />
                <path
                  d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
              </svg>
            </SupportCard>
          </NuxtLink>
          <NuxtLink to="mailto:mauricio.sebastian.rivera@gmail.com" class="md:w-1/3">
            <SupportCard
              class="bg-cyan-300 bg-opacity-30 hover:bg-opacity-50 transition-all duration-200"
              title="Contact Me"
              description="Feel free to ask me any questions regarding your data, bugs, or more.">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-14 h-14 fill-cyan-100">
                <path
                  fill-rule="evenodd"
                  d="M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z"
                  clip-rule="evenodd" />
                <path
                  fill-rule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z"
                  clip-rule="evenodd" />
              </svg>
            </SupportCard>
          </NuxtLink>
          <NuxtLink to="/support/terms" class="md:w-1/3">
            <SupportCard
              class="bg-blue-300 bg-opacity-30 hover:bg-opacity-50 transition-all duration-200"
              title="Terms of Service"
              description="Read over our legal documents before uploading any artwork.">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-14 h-14 fill-blue-100">
                <path
                  fill-rule="evenodd"
                  d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                  clip-rule="evenodd" />
                <path
                  d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>
            </SupportCard>
          </NuxtLink>
        </div>
      </div>
      <Footer />
    </NuxtLayout>
  </div>
</template>
