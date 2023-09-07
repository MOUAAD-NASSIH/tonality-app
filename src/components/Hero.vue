<script setup>
import GooglePlayButton from "./buttons/GooglePlayButton.vue";
import AppStoreButton from "./buttons/AppStoreButton.vue";
import MouseIcon from "./icones/MouseIcon.vue";

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
        <a href="#" class="text-lg md:text-2xl px-4 py-2 font-bold">Tonality</a>
        <div class="hidden md:flex items-center text-lg gap-2">
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
      <a
        href="#"
        class="flex items-center text-indigo-900 font-bold px-4 md:px-5 lg:px-7 py-2 md:py-4"
      >
        <span class="text-[14px] md:text-base">Get Started</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-6 md:w-10 fill-current"
        >
          <path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" />
        </svg>
      </a>
    </nav>
  </header>

  <section class="relative">
    <div class="container grid grid-cols-1 md:grid-cols-2 relative">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        class="mx-5 py-20 space-y-7 sm:space-y-10"
      >
        <h1 class="text-5xl md:text-6xl text-center sm:text-left font-semibold">
          You bring the passion. <br />
          We bring the music.
        </h1>
        <p class="text-base md:text-xl text-center sm:text-left text-gray-800">
          With our lossless audio experience and high-fidelity sound quality,
          stream music like you've never heard it before. No compromises. Just
          pure sound.
        </p>
        <div
          class="flex items-center justify-center sm:justify-start gap-2 text-white"
        >
          <GooglePlayButton />
          <AppStoreButton />
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="600"
        class="absolute w-full sm:w-1/2 h-full top-0 right-0 grid grid-cols-12 gap-5 -z-20"
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

      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="600"
        class="absolute -bottom-10 max-lg:left-[calc(50%-115px/2)] max-lg:transform max-lg:-translate-x-1/2 lg:left-44 h-10 w-fit flex items-center gap-2 text-base font-thin md:text-lg md:font-base text-black"
      >
        <MouseIcon class="animate-bounce" />
        <span>Scroll Down</span>
      </div>
    </div>
  </section>
</template>
