<script setup>
import Pagination from '@/components/UI/Pagination.vue';
import productHeader1 from '@/assets/images/product-header-1.png';
import productHeader1sm from '@/assets/images/product-header-sm-1.png';
import productHeader2 from '@/assets/images/product-header-2.png';
import productHeader2sm from '@/assets/images/product-header-sm-2.png';

const opticalList = [
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-1.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-2.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-3.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-4.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-5.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-6.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-1.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-2.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-3.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-4.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-5.png',
  },
  {
    title: 'BJ41600S',
    price: '3,490',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/product-6.png',
  },
];
</script>

<template>
  <div class="grid grid-cols-2">
    <div class="col-span-1">
      <img class="hidden lg:block max-w-full" :src="productHeader1" alt="" />
      <img
        class="block lg:hidden w-full h-136px md:h-296px"
        :src="productHeader1sm"
        alt=""
      />
    </div>
    <div class="col-span-1">
      <img class="hidden lg:block max-w-full" :src="productHeader2" alt="" />
      <img
        class="block lg:hidden w-full h-136px md:h-296px"
        :src="productHeader2sm"
        alt=""
      />
    </div>
  </div>
  <div class="bg-white py-10 md:py-20">
    <div class="container">
      <div class="text-center text-black mb-8">
        <h2 class="font-roboto text-2.5rem leading-16 font-medium">
          Celluloid Combi
        </h2>
        <p class="font-sanstc text-2rem leading-12">賽璐珞鈦金屬混合鏡框</p>
      </div>

      <div class="grid gap-x-6 gap-y-20 md:grid-cols-2 lg:grid-cols-4 mb-20">
        <div
          class="col-span-1 cursor-pointer"
          v-for="(item, i) in opticalList"
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
