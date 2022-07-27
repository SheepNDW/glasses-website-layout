<script setup>
import collabImg1 from '@/assets/images/home-section4-1.png';
import collabImg1sm from '@/assets/images/home-section4-1-sm.png';
import collabImg2 from '@/assets/images/home-section4-2.png';
import collabImg2sm from '@/assets/images/home-section4-2-sm.png';
</script>

<template>
  <section class="collab-wrapper py-10 md:py-20">
    <div class="container">
      <h3
        class="text-2xl md:text-5xl font-bold font-sanstc text-white text-center mb-6 md:mb-12"
      >
        聯名設計鏡框
      </h3>
      <div class="flex flex-col lg:flex-row">
        <div class="flex flex-col <lg:mb-6">
          <div class="w-full">
            <img class="max-w-full hidden md:block" :src="collabImg1" alt="" />
            <img
              class="max-w-full block md:hidden"
              :src="collabImg1sm"
              alt=""
            />
          </div>
          <h4
            class="w-full bg-white text-primary font-roboto font-bold italic text-center text-5xl py-2"
          >
            DOUBLE A+
          </h4>
        </div>
        <div class="flex flex-col">
          <div class="w-full">
            <img class="max-w-full hidden md:block" :src="collabImg2" alt="" />
            <img
              class="max-w-full block md:hidden"
              :src="collabImg2sm"
              alt=""
            />
          </div>
          <h4
            class="w-full bg-white text-primary font-roboto font-bold italic text-center text-5xl py-2"
          >
            YOUTH
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.collab-wrapper {
  background: url('@/assets/images/index-bg-sm.png') no-repeat center / cover;

  @media (min-width: 768px) {
    background: url('@/assets/images/index-bg-md.png') no-repeat center / cover;
  }

  @media (min-width: 1024px) {
    background: url('@/assets/images/index-bg.png') no-repeat center / cover;
  }
}
</style>
