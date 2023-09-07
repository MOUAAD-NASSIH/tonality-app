<script setup>
import VoiceLine from "./icones/VoiceLine.vue";
import ArrowRight from "./icones/ArrowRight.vue";
import FacebookIcon from "./icones/FacebookIcon.vue";
import TwitterIcon from "./icones/TwitterIcon.vue";
import InstagramIcon from "./icones/InstagramIcon.vue";
import LinkedInIcon from "./icones/LinkedInIcon.vue";

const links = [
  {
    text: "First Link",
    url: "#",
  },
  {
    text: "Second Link",
    url: "#",
  },
  {
    text: "Third Link",
    url: "#",
  },
  {
    text: "Fourth Link",
    url: "#",
  },
];
</script>

<template>
  <footer>
    <div class="container pt-10 pb-5 px-5">
      <div
        data-aos="zoom-in"
        class="flex flex-col md:flex-row items-center justify-between gap-4 border-b pb-5 sm:pb-10"
      >
        <div
          class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-12"
        >
          <VoiceLine />
          <div class="flex items-center gap-4">
            <a
              class="text-blue-900 text-[12px] sm:text-[14px] md:text-[16px] underline hover:text-blue-950 transition-colors duration-300"
              v-for="(link, index) in links"
              :key="index"
              :href="link.url"
            >
              {{ link.text }}
            </a>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <label>
            <input
              type="email"
              placeholder="Type your email"
              class="bg-gray-200 rounded-lg py-1 sm:py-2 px-2 sm:px-4 text-black text-opacity-70 border-[1px] border-gray-400 outline-gray-500"
            />
          </label>
          <button
            type="button"
            class="flex items-center gap-[2px] sm:gap-2 py-1 sm:py-2 px-2 sm:px-4 bg-blue-700 rounded-lg text-white font-bold hover:bg-blue-500 transition-colors duration-300"
          >
            <span>Send</span>
            <ArrowRight />
          </button>
        </div>
      </div>

      <div
        class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 sm:pt-10"
      >
        <p class="text-[14px] text-base">
          © 2023 Tonality UI kit. All rights reserved.
        </p>
        <div class="flex items-center gap-2">
          <FacebookIcon data-aos="zoom-in" data-aos-delay="100" />
          <TwitterIcon data-aos="zoom-in" data-aos-delay="200" />
          <InstagramIcon data-aos="zoom-in" data-aos-delay="300" />
          <LinkedInIcon data-aos="zoom-in" data-aos-delay="400" />
        </div>
      </div>
    </div>
  </footer>
</template>
