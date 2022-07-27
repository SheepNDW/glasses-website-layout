<script setup>
import { ref, watchEffect } from 'vue';
import { storeList } from '../storeList';
import { useRoute, useRouter } from 'vue-router';
import ShopListItem from '../shop-list/ShopListItem.vue';
import PagesTitle from '@/components/UI/PagesTitle.vue';

const router = useRouter();
const route = useRoute();

const fields = [
  '台北中山旗艦店',
  '台北綠園店',
  '台中清水旗艦店',
  '高雄中正形象店',
  '高雄夢時代店',
];
const filteredFields = ref('台北中山旗艦店');
const currentStore = ref({});

const handleChange = () => {
  router.push(`/stores/${filteredFields.value}`);
};

watchEffect(() => {
  filteredFields.value = route.params.id;
  const filteredStore = storeList.filter(
    (store) => store.title === filteredFields.value
  );
  currentStore.value = { ...filteredStore[0] };
});
</script>

<template>
  <div class="bg-white py-10 md:py-20 lg:pt-24">
    <div class="container">
      <PagesTitle>門市據點</PagesTitle>
      <label
        for="shopFilter"
        class="w-full md:w-1/2 lg:w-1/3 grid grid-cols-[max-content,1fr] gap-x-4 items-center font-sanstc mb-10"
      >
        <span class="text-2xl">選擇分店</span>
        <select
          id="shopFilter"
          class="text-gray-500 text-18px py-1.5 px-3 w-full border border-[#CED4DA]"
          v-model="filteredFields"
          @change="handleChange"
        >
          <option :value="item" v-for="item in fields" :key="item">
            {{ item }}
          </option>
        </select>
      </label>
      <div class="grid grid-cols-1 lg:grid-cols-[2fr,3fr] gap-x-6 gap-y-4">
        <ShopListItem
          v-bind="{ ...currentStore }"
          :show-detail-button="false"
        />
        <iframe
          :src="currentStore.map"
          style="border: 0"
          class="cols-span-1 w-full h-208px md:h-414px lg:h-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>
