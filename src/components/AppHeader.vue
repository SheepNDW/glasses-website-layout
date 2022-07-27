<script setup>
import LogoImg from '@/assets/images/logo-white.png';
import { ref } from 'vue';

const isDrop = ref(false);
const toggleDrop = () => {
  isDrop.value = !isDrop.value;
};
</script>

<template>
  <header class="relative w-full h-20 bg-primary">
    <div class="container h-full flex justify-between items-center">
      <h1 class="w-20">
        <router-link to="/" @click="isDrop = false">
          <img class="w-full" :src="LogoImg" alt="logo" />
        </router-link>
      </h1>
      <ul class="<sm:hidden flex gap-16 text-white text-xl">
        <li>
          <router-link to="/products">系列鏡框</router-link>
        </li>
        <li>
          <router-link to="/stores">門市據點</router-link>
        </li>
        <li>
          <router-link to="/blog">部落格</router-link>
        </li>
        <li>
          <router-link to="/FAQ">常見問題</router-link>
        </li>
      </ul>
      <i-ic:outline-menu
        class="<sm:block hidden text-4xl text-white"
        @click="toggleDrop"
      />
      <ul class="dropdown" :class="{ active: isDrop }">
        <li>
          <router-link
            to="/products"
            class="block py-3 hover:(bg-primaryDark)"
            @click="toggleDrop"
          >
            系列鏡框
          </router-link>
        </li>
        <li>
          <router-link
            to="/stores"
            class="block py-3 hover:(bg-primaryDark)"
            @click="toggleDrop"
          >
            門市據點
          </router-link>
        </li>
        <li>
          <router-link
            to="/blog"
            class="block py-3 hover:(bg-primaryDark)"
            @click="toggleDrop"
          >
            部落格
          </router-link>
        </li>
        <li>
          <router-link
            to="/FAQ"
            class="block py-3 hover:(bg-primaryDark)"
            @click="toggleDrop"
          >
            常見問題
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.dropdown {
  @apply absolute left-0 w-full bg-primary md:hidden flex flex-col text-white text-xl text-center;
  top: 100%;
  max-height: 0px;
  overflow: hidden;
  transition: all 0.6s;
  z-index: 100;

  li a {
    border-top: 1px solid #fff;
  }

  &.active {
    max-height: 212px;
  }
}
</style>
