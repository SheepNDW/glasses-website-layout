<script setup></script>

<template>
  <div class="flex justify-center items-center font-roboto">
    <!-- <div class="flex items-center border"> -->
    <a
      class="border px-1.5 py-3 md:p-3 hover:(bg-gray-100)"
      href="javascript:;"
    >
      上一頁
    </a>
    <a
      class="border py-3 px-4 hover:(bg-gray-100)"
      :class="{ active: i === 2 }"
      v-for="i in 5"
      :key="i"
      href="javascript:;"
    >
      {{ i }}
    </a>
    <a
      class="border px-1.5 py-3 md:p-3 hover:(bg-gray-100)"
      href="javascript:;"
    >
      下一頁
    </a>
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
.active {
  @apply bg-black text-white;
}
</style>
