<script setup>
import Pagination from '@/components/UI/Pagination.vue';
import productHeader3 from '@/assets/images/product-header-3.png';
import productHeader3sm from '@/assets/images/product-header-sm-3.png';
import productHeader4 from '@/assets/images/product-header-4.png';
import productHeader4sm from '@/assets/images/product-header-sm-4.png';

const sunglassesList = [
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-7.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-8.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-9.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-10.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-11.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-12.png',
  },
];
</script>

<template>
  <div class="grid grid-cols-2">
    <div class="col-span-1">
      <img class="hidden lg:block max-w-full" :src="productHeader3" alt="" />
      <img
        class="block lg:hidden w-full h-136px md:h-296px"
        :src="productHeader3sm"
        alt=""
      />
    </div>
    <div class="col-span-1">
      <img class="hidden lg:block max-w-full" :src="productHeader4" alt="" />
      <img
        class="block lg:hidden w-full h-136px md:h-296px"
        :src="productHeader4sm"
        alt=""
      />
    </div>
  </div>
  <div class="bg-white py-10 md:py-20">
    <div class="container">
      <div class="text-center text-black mb-8">
        <h2 class="font-roboto text-2.5rem leading-16 font-medium">
          2020 NEW COLLECTION
        </h2>
        <p class="font-sanstc text-2rem leading-12">賽璐珞鈦金屬混合鏡框</p>
      </div>
      <div class="grid gap-x-6 gap-y-20 md:grid-cols-2 lg:grid-cols-3 mb-20">
        <div
          class="col-span-1 cursor-pointer"
          v-for="(item, i) in sunglassesList"
          :key="i"
        >
          <img class="max-w-full" :src="item.picture" alt="product picture" />
          <div class="flex font-roboto">
            <p class="mr-auto">{{ item.title }}</p>
            <span class="text-primary font-medium">NTD{{ item.price }}</span>
          </div>
          <div class="flex gap-2">
            <div class="w-6 h-6 bg-[#5F3E2D] rounded"></div>
            <div class="w-6 h-6 bg-[#B75929] rounded"></div>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  </div>
</template>
