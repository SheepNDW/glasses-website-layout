<script setup>
import BlogHeader from '../header/BlogHeader.vue';
import BreadCrumb from '@/components/UI/BreadCrumb.vue';
import BreadItem from '@/components/UI/BreadItem.vue';
import blogPage1 from '@/assets/images/blogpage-1.png';
import blogPage2 from '@/assets/images/blogpage-2.png';
import blogPage3 from '@/assets/images/blogpage-3.png';
import blogPage4 from '@/assets/images/blogpage-4.png';
import fbIcon from '@/assets/images/logo-facebook.png';
import insIcon from '@/assets/images/logo-instagram.png';
</script>

<template>
  <BlogHeader />
  <div class="bg-white pt-4 pb-16 md:pt-2 md:pb-20 lg:pt-6">
    <div class="container">
      <BreadCrumb>
        <BreadItem to="/">首頁</BreadItem>
        <BreadItem to="/blog">部落格</BreadItem>
        <BreadItem to="/blog">特別企劃</BreadItem>
        <BreadItem>情人特別企劃</BreadItem>
      </BreadCrumb>
      <div
        class="text-primary font-roboto font-bold text-base md:text-2xl my-2"
      >
        <span class="mr-4">#special</span>
        <span>#event</span>
      </div>
      <div
        class="grid grid-cols-1 grid-rows-[min-content,min-content,1fr] md:grid-cols-[2fr,1fr] md:gap-x-6"
      >
        <!-- 左側文章區 -->
        <h2
          class="col-start-1 col-end-2 font-sanstc text-black text-2xl md:text-5xl md:leading-18"
        >
          情人特別企劃
        </h2>
        <h4
          class="col-start-1 col-end-2 font-roboto font-medium text-base md:text-2xl mb-4 md:mb-6"
        >
          2020 Valentine’s Special
        </h4>
        <div class="col-start-1 col-end-2">
          <div class="w-full mb-2">
            <img class="block max-w-full" :src="blogPage1" alt="post" />
          </div>
          <p class="text-base text-[#555] mb-4">
            一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
            本次拍攝的鏡框款式與 NEEDS CLASSIC
            聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
          </p>
          <div class="w-full mb-2">
            <img class="block max-w-full" :src="blogPage2" alt="post" />
          </div>
          <p class="text-base text-[#555] mb-4">
            一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
            本次拍攝的鏡框款式與 NEEDS CLASSIC
            聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
          </p>
          <div class="w-full mb-2">
            <img class="block max-w-full" :src="blogPage3" alt="post" />
          </div>
          <p class="text-base text-[#555] mb-4">
            一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。
            本次拍攝的鏡框款式與 NEEDS CLASSIC
            聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！
          </p>
          <div class="w-full mb-2">
            <img class="block max-w-full" :src="blogPage4" alt="post" />
          </div>
          <p class="text-base text-[#555]">
            2/14(五)-2/20(日)<br />至本店單筆消費滿2980元,
            就送情人節限定眼鏡盒1個<br />
            期間優惠還有~~持他牌鏡框更換鏡片<br />
            薄型非球面鏡片折300元<br />
            濾藍光鏡片折500元<br />
            快快帶上另一半<br />
            讓彼此每一次睜開眼，都被愛的視線包圍!
          </p>
        </div>
        <!-- 右側 tags -->
        <div
          class="hidden md:block col-start-2 col-end-3 row-span-full font-roboto font-bold text-primary"
        >
          <div class="flex items-center lg:text-2rem lg:leading-12">
            <i-ph:tag-simple />
            <span>TAGS</span>
          </div>
          <p class="lg:text-2xl lg:leading-9">
            <span class="mr-4">#special</span>
            <span>#sale</span>
          </p>
          <p class="lg:text-2xl lg:leading-9">#new_item</p>
          <p class="lg:text-2xl lg:leading-9">#interview</p>
          <p class="lg:text-2xl lg:leading-9">
            <span class="mr-4">#trivia</span>
            <span>#news</span>
          </p>
          <p class="lg:text-2xl lg:leading9">#event</p>
        </div>
        <!-- 底部 -->
        <div
          class="hidden md:block col-span-full lg:col-start-1 lg:col-end-2 mt-10"
        >
          <div class="flex gap-4 text-black font-roboto font-bold text-base">
            <p>Share</p>
            <img class="w-6 h-6" :src="fbIcon" alt="facebook icon" />
            <img class="w-6 h-6" :src="insIcon" alt="instagram icon" />
          </div>
          <hr class="w-full h-1px bg-[#707070] mt-4" />
          <div class="flex justify-between mt-6">
            <a class="flex gap-1 items-center text-base" href="javascript:;">
              <i-ic:round-arrow-back />
              <span class="text-black font-sanstc">
                上一篇：街頭潮人訪問 1
              </span>
            </a>
            <a class="flex gap-1 items-center text-base" href="javascript:;">
              <span class="text-black font-sanstc">
                上一篇：街頭潮人訪問 1
              </span>
              <i-ic:round-arrow-forward />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
