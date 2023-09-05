<script setup>
import GooglePlayButton from "./buttons/GooglePlayButton.vue";
import AppStoreButton from "./buttons/AppStoreButton.vue";

const links = [
  {
    name: "Home",
    url: "#",
    active: true,
  },
  {
    name: "App",
    url: "#",
  },
  {
    name: "Features",
    url: "#",
  },
  {
    name: "Testimonials",
    url: "#",
  },
];
</script>

<template>
  <header class="sticky top-0 shadow shadow-indigo-50 bg-white z-20">
    <nav class="container flex justify-between items-center">
      <div class="flex items-center gap-32">
        <a href="#" class="text-2xl font-bold">Tonality</a>
        <div class="flex items-center text-lg gap-2">
          <a
            v-for="(link, index) in links"
            :key="index"
            :href="link.url"
            class="px-4 py-4 hover:text-indigo-900 font-semibold"
            :class="{ 'text-indigo-900 font-bold': link.active }"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
      <a href="#" class="flex items-center text-indigo-900 font-bold px-7 py-4">
        <span>Get Started</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-10 fill-current"
        >
          <path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" />
        </svg>
      </a>
    </nav>
  </header>

  <section class="relative">
    <div class="container grid grid-cols-2">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        class="py-20 space-y-10"
      >
        <h1 class="text-6xl font-semibold">
          You bring the passion. <br />
          We bring the music.
        </h1>
        <p class="text-xl text-gray-800">
          With our lossless audio experience and high-fidelity sound quality,
          stream music like you've never heard it before. No compromises. Just
          pure sound.
        </p>
        <div class="flex items-center gap-2 text-white">
          <GooglePlayButton />
          <AppStoreButton />
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        class="absolute w-1/2 h-full top-0 right-0 grid grid-cols-12 gap-5"
      >
        <div class="h-[152px] bg-gray-400/20 col-start-1 col-end-3"></div>
        <div class="h-[152px] bg-gray-400/20 col-start-3 col-end-9"></div>
        <div class="h-[152px] bg-gray-400/20 col-start-9 col-end-13"></div>

        <div class="h-[152px] bg-gray-400/20 col-start-1 col-end-7"></div>
        <div class="h-[152px] bg-gray-400/20 col-start-7 col-end-13"></div>

        <div class="h-[152px] bg-gray-400/20 col-start-1 col-end-2"></div>
        <div class="h-[152px] bg-gray-400/20 col-start-2 col-end-8"></div>
        <div class="h-[152px] bg-gray-400/20 col-start-8 col-end-13"></div>
      </div>
    </div>
  </section>
</template>
