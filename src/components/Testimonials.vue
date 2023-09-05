<script setup>
import CompletedStar from "../components/icones/CompletedStar.vue";
import HalfStar from "../components/icones/HalfStar.vue";

const reviews = [
  {
    name: "Albert Green",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    occupation: "Design Director at Conor",
    reviewTitle: "Amazing sound!",
    reviewDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              magnam ipsam possimus et! Libero suscipit error mollitia
              reprehenderit autem officiis placeat excepturi.`,
  },
  {
    name: "Lorena Chaves",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    occupation: "Design Director at Apple",
    reviewTitle: "Amazing sound!",
    reviewDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              magnam ipsam possimus et! Libero suscipit error mollitia
              reprehenderit autem officiis placeat excepturi.`,
  },
  {
    name: "Roberto Silveira",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    occupation: "Music Producer",
    reviewTitle: "Amazing sound!",
    reviewDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              magnam ipsam possimus et! Libero suscipit error mollitia
              reprehenderit autem officiis placeat excepturi.`,
  },
  {
    name: "Albert Green",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    occupation: "Design Director at Conor",
    reviewTitle: "Amazing sound!",
    reviewDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              magnam ipsam possimus et! Libero suscipit error mollitia
              reprehenderit autem officiis placeat excepturi.`,
  },
  {
    name: "Lorena Chaves",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    occupation: "Design Director at Apple",
    reviewTitle: "Amazing sound!",
    reviewDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              magnam ipsam possimus et! Libero suscipit error mollitia
              reprehenderit autem officiis placeat excepturi.`,
  },
  {
    name: "Roberto Silveira",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    occupation: "Music Producer",
    reviewTitle: "Amazing sound!",
    reviewDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              magnam ipsam possimus et! Libero suscipit error mollitia
              reprehenderit autem officiis placeat excepturi.`,
  },
];
</script>

<template>
  <section class="py-20 bg-gray-400/20">
    <div class="container">
      <div class="text-center space-y-3 pb-10">
        <p class="text-thin">Join tens of thousands music lovers</p>
        <h3 class="text-5xl">What people say</h3>
      </div>

      <div
        class="flex gap-10 mx-7 md:mx-0 overflow-x-auto snap-x snap-mandatory"
      >
        <div
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          data-aos-duration="600"
          v-for="(review, index) in reviews"
          :key="index"
          class="min-w-[280px] md:min-w-[300px] lg:min-w-[320px] flex flex-col items-center space-y-1 bg-white p-8 rounded-xl shadow-xl snap-center"
        >
          <img
            :src="review.img"
            alt=""
            class="w-[74px] h-[74px] rounded-full"
          />
          <p class="text-xl font-semibold">{{ review.name }}</p>
          <p class="text-sm text-gray-500 pb-5">{{ review.occupation }}</p>
          <p class="font-bold">{{ review.reviewTitle }}</p>
          <p class="text-gray-600 text-center">
            {{ review.reviewDescription }}
          </p>

          <div class="pt-[22px] flex gap-2">
            <CompletedStar
              v-for="i in 4"
              :key="i"
              data-aos="fade-up"
              :data-aos-delay="i * 50"
              data-aos-duration="600"
            />
            <HalfStar
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="600"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
