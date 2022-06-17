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
  <div></div>
</template>

<style scoped></style>
