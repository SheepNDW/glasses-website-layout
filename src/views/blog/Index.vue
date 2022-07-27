<script setup>
import BlogHeader from './header/BlogHeader.vue';
import PagesTitle from '@/components/UI/PagesTitle.vue';
import ArticleList from './article/ArticleList.vue';
import Pagination from '@/components/UI/Pagination.vue';
</script>

<template>
  <BlogHeader />
  <div class="bg-white py-10 md:py-20 lg:pt-24">
    <div class="container">
      <PagesTitle>部落格</PagesTitle>
      <ArticleList />
      <Pagination />
    </div>
  </div>
</template>
