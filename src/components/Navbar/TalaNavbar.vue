<script setup lang="ts">
export interface TalaNavbarProps {
  fixed?: string;
  sticky: boolean;
  variant: string;
}

withDefaults(defineProps<TalaNavbarProps>(), {
  sticky: false,
  variant: "primary",
});
</script>

<template>
  <div class="navbar">
    <slot></slot>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #e9ecef;
  padding: 0.75rem 1rem;
}
</style>
