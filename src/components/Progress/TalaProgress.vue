<script setup lang="ts">
export interface TalaProgressProps {
  value: number | string;
  variant: string;
  showProgress: boolean;
  animated: boolean;
  striped: boolean;
}

withDefaults(defineProps<TalaProgressProps>(), {
  value: 0,
  showProgress: false,
  animated: false,
  striped: false,
});
</script>

<template>
  <div></div>
</template>

<style scoped></style>
