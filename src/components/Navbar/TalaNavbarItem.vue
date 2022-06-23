<script setup lang="ts">
export interface TalaNavbarItemProps {
  href: string;
  disabled: boolean;
  active: boolean;
}

withDefaults(defineProps<TalaNavbarItemProps>(), {
  disabled: false,
  active: false,
});
</script>

<template>
  <router-link
    :to="href"
    class="navbar-item"
    :disabled="disabled"
    :active="active"
  >
    <slot></slot>
  </router-link>
</template>

<style scoped>
.navbar-item {
  display: inline;
  padding: 5px;
}
</style>
