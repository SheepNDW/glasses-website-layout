<script setup>
import { ref } from 'vue';
import OpticalList from './product-list/OpticalList.vue';
import SunglassesList from './product-list/SunglassesList.vue';

const categories = ['OPTICAL', 'SUNGLASSES', 'FUNCTIONAL'];

const activeIndex = ref(0);
const setActiveIndex = (index) => {
  activeIndex.value = index;
};
</script>

<template>
  <div class="lg:container">
    <ul
      class="grid grid-cols-3 font-roboto text-base md:text-2xl lg:text-2rem lg:leading-12 text-center"
    >
      <li
        class="tab-item"
        :class="{ active: i === activeIndex }"
        v-for="(cate, i) in categories"
        :key="cate"
        @click="setActiveIndex(i)"
      >
        {{ cate }}
      </li>
    </ul>
  </div>
  <OpticalList v-if="activeIndex === 0 || activeIndex === 2" />
  <SunglassesList v-if="activeIndex === 1" />
</template>

<style lang="scss" scoped>
.tab-item {
  @apply relative py-6 border-l-1 border-[#DCDCDC] cursor-pointer hover:(bg-gray-100);

  &:last-child {
    @apply border-r-1;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 8px;
    background: #aa0601;
    display: none;
  }
  &.active {
    &::after {
      display: block;
    }
  }
}
</style>
