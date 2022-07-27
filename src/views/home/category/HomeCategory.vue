<script setup>
import cateImg1 from '@/assets/images/home-section3-1.png';
import cateImg2 from '@/assets/images/home-section3-2.png';
import cateImg3 from '@/assets/images/home-section3-3.png';
</script>

<template>
  <section class="py-10 md:py-20 bg-white">
    <div class="container">
      <h3
        class="text-2xl md:text-5xl font-bold font-sanstc text-primaryDark text-center mb-6 md:mb-12"
      >
        經典系列鏡框
      </h3>
      <div class="flex flex-col lg:flex-row gap-6">
        <div class="flex flex-col items-center">
          <div
            class="max-w-336px lg:max-w-416px max-h-336px lg:max-h-416px mb-2"
          >
            <img class="max-w-full" :src="cateImg1" alt="" />
          </div>
          <h4 class="text-primary font-roboto font-bold italic text-5xl">
            OPTICAL
          </h4>
        </div>
        <div class="flex flex-col items-center">
          <div
            class="max-w-336px lg:max-w-416px max-h-336px lg:max-h-416px mb-2"
          >
            <img class="max-w-full" :src="cateImg2" alt="" />
          </div>
          <h4 class="text-primary font-roboto font-bold italic text-5xl">
            SUNGLASSES
          </h4>
        </div>
        <div class="flex flex-col items-center">
          <div
            class="max-w-336px lg:max-w-416px max-h-336px lg:max-h-416px mb-2"
          >
            <img class="max-w-full" :src="cateImg3" alt="" />
          </div>
          <h4 class="text-primary font-roboto font-bold italic text-5xl">
            FUNCTIONAL
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>
