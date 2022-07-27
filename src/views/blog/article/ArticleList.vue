<script setup>
import { articleList } from './article';
import ArticleListItem from './ArticleListItem.vue';
</script>

<template>
  <ArticleListItem
    v-for="article in articleList"
    :key="article.id"
    v-bind="{ ...article }"
  />
</template>
