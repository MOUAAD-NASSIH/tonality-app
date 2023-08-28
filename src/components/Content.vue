<script setup>
import { ref } from "vue";

const content = ref([
  {
    title: "Clearly hear the best sound offline.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iste libero non pariatur harum beatae voluptatum, minus odit quae error quia itaque. Quibusdam, aspernatur? Aliquam rerum sed optio voluptate veritatis.",
  },
  {
    title: "Elevate you sound.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iste libero non pariatur harum beatae voluptatum, minus odit quae error quia itaque. Quibusdam, aspernatur? Aliquam rerum sed optio voluptate veritatis.",
  },
  {
    title: "A word of music in your pocket.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iste libero non pariatur harum beatae voluptatum, minus odit quae error quia itaque. Quibusdam, aspernatur? Aliquam rerum sed optio voluptate veritatis.",
  },
]);
</script>

<template>
  <section class="py-20">
    <div class="container rounded-2xl bg-slate-50 py-10 space-y-7 px-20">
      <h2 class="text-4xl text-center my-10">More than a streaming service</h2>

      <div class="flex justify-between items-start gap-10">
        <div class="flex-1 gap-y-32 flex flex-col pt-36">
          <div 
            v-for="({ title, description }, index) in content" 
            :key="index"
            class="space-y-3 max-w-sm"
          >
            <p 
              class="w-10 h-10 bg-slate-200 font-semibold rounded-full flex justify-center items-center"
              :class="index == 0 ? '!bg-blue-500 text-white' : 'bg-slate-200'"
            >{{ index + 1 }}</p>
            <h3 class="text-lg font-bold">{{ title }}</h3>
            <p>{{ description }}</p>
          </div>
        </div>

        <div class="flex-1 flex flex-col py-10">
            <div class="h-96 max-w-xs bg-indigo-200 relative rounded-md">
                <div class="absolute top-10 -right-10 bg-white flex justify-between items-center rounded-lg overflow-hidden">
                    <div class="px-7">
                      <p class="font-semibold">Morning Playlist</p>
                      <p class="font-semibold text-sm">The best songs ever.</p>
                    </div>
                      <img class="w-20 h-20 bg-pink-200" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80" alt="">
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
