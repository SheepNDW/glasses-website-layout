<script setup>
import { computed, ref } from 'vue';
import { storeList } from '../storeList';
import ShopListItem from './ShopListItem.vue';

const fields = ['全部', '台北市', '台中市', '高雄市'];
const filteredFields = ref('全部');

const filteredStoreList = computed(() => {
  switch (filteredFields.value) {
    case '台北市':
      return storeList.filter((store) => store.city === '台北市');
    case '台中市':
      return storeList.filter((store) => store.city === '台中市');
    case '高雄市':
      return storeList.filter((store) => store.city === '高雄市');
    default:
      return storeList;
  }
});
</script>

<template>
  <label
    for="shopFilter"
    class="w-full md:w-1/2 lg:w-1/3 grid grid-cols-[max-content,1fr] gap-x-4 items-center font-sanstc mb-10"
  >
    <span class="text-2xl">選擇地區</span>
    <select
      id="shopFilter"
      class="text-gray-500 text-18px py-1.5 px-3 w-full border border-[#CED4DA]"
      v-model="filteredFields"
    >
      <option :value="item" v-for="item in fields" :key="item">
        {{ item }}
      </option>
    </select>
  </label>
  <div class="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
    <ShopListItem
      v-for="store in filteredStoreList"
      :key="store.id"
      v-bind="{ ...store }"
    />
  </div>
</template>
