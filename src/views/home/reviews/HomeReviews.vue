<script setup>
const reviewsList = [
  {
    customer: 'Jessy',
    comments: '眼鏡品質優良，下次還會想來這邊購買！',
    date: '2021/06/20',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/home-section5-1.png',
  },
  {
    customer: '凱倫',
    comments: '做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！',
    date: '2021/04/18',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/home-section5-2.png',
  },
  {
    customer: '悠悠',
    comments: '謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！',
    date: '2020/12/25',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/home-section5-3.png',
  },
  {
    customer: 'Kyuan',
    comments: '服務很好，品質沒有任何問題，非常喜歡。',
    date: '2020/10/31',
    picture:
      'https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week3-4/home-section5-4.png',
  },
];
</script>

<template>
  <section class="py-10 md:py-20 bg-white">
    <div class="container">
      <h3
        class="text-2xl md:text-5xl font-bold font-sanstc text-primaryDark text-center mb-6 md:mb-12"
      >
        顧客推薦
      </h3>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          class="col-span-1 border border-[#DEE2E6] rounded card-shadow"
          v-for="item in reviewsList"
          :key="item.customer"
        >
          <img class="max-w-full" :src="item.picture" alt="customer pic" />
          <div class="p-4 font-sanstc">
            <p class="text-base text-black mb-2">{{ item.customer }}</p>
            <p class="text-base text-black mb-18">{{ item.comments }}</p>
            <p class="text-sm text-[#707070]">{{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card-shadow {
  box-shadow: 0 2px 6px rgba(#d1d5db, 0.8);
}
</style>
