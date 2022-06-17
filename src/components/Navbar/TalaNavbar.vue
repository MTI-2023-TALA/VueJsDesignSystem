<script setup lang="ts">
export interface TalaNavbarProps {
  fixed: string;
  sticky: boolean;
  variant: string;
}

withDefaults(defineProps<TalaNavbarProps>(), {
  sticky: false,
  variant: "primary",
});
</script>

<template>
  <div></div>
</template>

<style scoped></style>
