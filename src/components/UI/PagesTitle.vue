<template>
  <h2 class="pages-title"><slot /></h2>
</template>

<script>
export default {
  name: 'PagesTitle',
};
</script>

<style lang="scss" scoped>
.pages-title {
  @apply flex gap-4 text-black text-5xl leading-18 font-sanstc font-bold mb-8;

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 4.5rem;
    background: #9f1213;
  }
}
</style>
