<script setup>
defineProps({
  to: {
    type: [String, Object],
    default: '',
  },
});
</script>

<template>
  <router-link
    class="text-black transition-colors hover:(text-primary)"
    v-if="to"
    :to="to"
  >
    <slot />
  </router-link>
  <span class="text-primary" v-else><slot /></span>
</template>
