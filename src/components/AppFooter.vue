<script setup>
import fbIcon from '@/assets/images/ic-social-fb.png';
import igIcon from '@/assets/images/ic_social_ig.png';
import lineIcon from '@/assets/images/ic_social_line.png';
</script>

<template>
  <footer class="py-6 md:pt-12 md:pb-8 bg-primary text-white">
    <div class="container">
      <div class="hidden md:flex justify-between items-center mb-6">
        <ul class="flex gap-12">
          <li><router-link to="/">首頁</router-link></li>
          <li><router-link to="/products">系列鏡框</router-link></li>
          <li><router-link to="/stores">門市據點</router-link></li>
          <li><router-link to="/blog">部落格</router-link></li>
          <li><router-link to="/FAQ">常見問題</router-link></li>
        </ul>
        <div class="flex gap-8">
          <img
            class="w-10 h-10 lg:w-12 lg:h-12"
            :src="fbIcon"
            alt="facebook icon"
          />
          <img
            class="w-10 h-10 lg:w-12 lg:h-12"
            :src="igIcon"
            alt="instagram icon"
          />
          <img
            class="w-10 h-10 lg:w-12 lg:h-12"
            :src="lineIcon"
            alt="line icon"
          />
        </div>
      </div>
      <div class="flex justify-between">
        <div>
          <div class="flex items-center text-base md:text-4xl mb-4">
            <i-ic:outline-phone /><span>0800-000-000</span>
          </div>
          <div class="flex items-center text-base md:text-4xl">
            <i-ic:round-mail-outline /><span>glasses@business.com</span>
          </div>
        </div>
        <div class="md:hidden flex gap-2">
          <img class="w-6 h-6" :src="fbIcon" alt="facebook icon" />
          <img class="w-6 h-6" :src="igIcon" alt="instagram icon" />
          <img class="w-6 h-6" :src="lineIcon" alt="line icon" />
        </div>
      </div>

      <hr class="h-1px w-full my-6 md:my-8" />

      <div class="flex flex-col gap-2 md:flex-row justify-between text-base">
        <p>Copyright © 2020 Glasses.All rights reserved.</p>
        <div class="flex flex-col gap-2 md:flex-row md:gap-12">
          <a href="javascript:;">隱私權政策</a>
          <a href="javascript:;">服務條款</a>
        </div>
      </div>
    </div>
  </footer>
</template>
