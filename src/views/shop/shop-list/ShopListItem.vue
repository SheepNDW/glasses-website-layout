<script setup>
defineProps({
  id: String,
  title: String,
  tel: String,
  businessHours: String,
  address: String,
  picture: String,
  city: String,
  showDetailButton: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="col-span-1 font-sanstc border border-gray-200">
    <img :src="picture" alt="store" />
    <h4 class="py-2 px-6 text-2xl border-b border-gray-200">
      {{ title }}
    </h4>
    <div
      class="grid grid-cols-[max-content,1fr] gap-x-2 gap-y-2 px-6 py-4 text-xl"
    >
      <i-ic:outline-phone class="col-span-1" />
      <span class="col-span-1">電話：{{ tel }}</span>
      <i-ic:outline-access-time class="col-span-1" />
      <span class="col-span-1">營業時間：{{ businessHours }}</span>
      <i-ic:outline-location-on class="col-span-1" />
      <span class="col-span-1">地址：{{ address }}</span>
    </div>
    <button
      class="w-full bg-black py-4 text-center text-white"
      @click="$router.push(`/stores/${title}`)"
      v-if="showDetailButton"
    >
      詳細資訊
    </button>
  </div>
</template>
