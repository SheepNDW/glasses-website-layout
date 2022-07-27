<script setup>
import priceImg from '@/assets/images/home-section2-1.png';
import timeImg from '@/assets/images/home-section2-2.png';
import heartImg from '@/assets/images/home-section2-3.png';
import glassesImg from '@/assets/images/home-sectioin2-4.png';
</script>

<template>
  <section class="py-10 md:py-20 bg-bgPink">
    <div class="container">
      <h3
        class="text-2xl md:text-5xl font-bold font-sanstc text-primaryDark text-center mb-6"
      >
        用專業的心，做專業的事
      </h3>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-4 font-sanstc">
        <div class="md:col-span-2 lg:col-span-1">
          <div class="w-100px h-100px mx-auto mb-4">
            <img class="w-full" :src="priceImg" alt="" />
          </div>
          <h4 class="text-primaryDark font-bold text-2xl text-center mb-2">
            單一價格
          </h4>
          <p class="text-black text-base">
            無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。
          </p>
        </div>
        <div class="md:col-span-2 lg:col-span-1">
          <div class="w-100px h-100px mx-auto mb-4">
            <img class="w-full" :src="timeImg" alt="" />
          </div>
          <h4 class="text-primaryDark font-bold text-2xl text-center mb-2">
            20 分鐘即可取件
          </h4>
          <p class="text-black text-base">
            為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快
            20 分鐘即可完成。
          </p>
        </div>
        <div class="md:col-span-2 lg:col-span-1">
          <div class="w-100px h-100px mx-auto mb-4">
            <img class="w-full" :src="heartImg" alt="" />
          </div>
          <h4 class="text-primaryDark font-bold text-2xl text-center mb-2">
            安心售後服務
          </h4>
          <p class="text-black text-base">
            我們提供長達 120
            天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。
          </p>
        </div>
        <div class="md:col-span-2 lg:col-span-1">
          <div class="w-100px h-100px mx-auto mb-4">
            <img class="w-full" :src="glassesImg" alt="" />
          </div>
          <h4 class="text-primaryDark font-bold text-2xl text-center mb-2">
            關於鏡片
          </h4>
          <p class="text-black text-base">
            使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
