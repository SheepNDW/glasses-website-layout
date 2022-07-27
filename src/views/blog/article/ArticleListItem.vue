<script setup>
defineProps({
  id: String,
  title: String,
  subTitle: String,
  date: String,
  desc: String,
  picture: String,
});
</script>

<template>
  <div
    class="grid grid-cols-1 gap-x-6 gap-y-2 md:gap-y-15 md:grid-cols-2 mb-6 lg:mb-15"
  >
    <img
      class="col-span-1 cursor-pointer"
      :src="picture"
      alt="article pic"
      @click="$router.push(`/blog/article/${id}`)"
    />
    <div class="col-span-1">
      <h3
        class="cursor-pointer text-primaryDark text-2xl leading-9 xl:text-2rem xl:leading-12 font-sanstc"
        @click="$router.push(`/blog/article/${id}`)"
      >
        {{ title }}
      </h3>
      <p
        class="flex justify-between items-center font-roboto font-medium mb-1 xl:mb-4"
      >
        <span class="text-base xl:text-xl xl:leading-30px">{{ subTitle }}</span>
        <span class="text-base">{{ date }}</span>
      </p>
      <p
        class="hidden md:block text-base md-ellipsis-6 lg:text-xl lg:leading-30px text-[#555] font-sanstc xl:mb-102px"
      >
        {{ desc }}
      </p>
      <router-link
        :to="`/blog/article/${id}`"
        class="hidden lg:block font-roboto font-black text-primaryDark text-4xl leading-54px text-right"
      >
        MORE
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.md-ellipsis-6 {
  @media (min-width: 768px) {
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
    overflow: hidden;
  }
}
</style>
