<script setup></script>

<template>
  <section class="home-banner">
    <div class="container flex flex-col items-end font-sanstc">
      <p class="text-primaryDark text-base md:text-4xl">
        Promise-Desert 2020 早春系列
      </p>
      <h2
        class="text-primaryDark text-2xl md:text-4rem md:leading-24 font-bold"
      >
        看得清，才能看得遠
      </h2>
      <router-link
        to="/products"
        class="block bg-primary py-1 px-3 mt-2 text-white text-xl"
      >
        立即購買
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home-banner {
  @apply max-w-full h-396px md:h-787px flex items-center;
  background: url('@/assets/images/home-header-sm.png') no-repeat center / cover;

  @media (min-width: 1024px) {
    background: url('@/assets/images/home-header.png') no-repeat center / cover;
  }
}
</style>
