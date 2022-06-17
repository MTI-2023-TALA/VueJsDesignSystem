<script setup lang="ts">
export interface TalaDropdownProps {
  dropup: boolean;
  dropright: boolean;
  dropleft: boolean;
  split: boolean;
  variant: string;
}

withDefaults(defineProps<TalaDropdownProps>(), {
  dropup: false,
  dropright: false,
  dropleft: false,
  split: false,
  variant: "primary",
});
</script>

<template>
  <div></div>
</template>

<style scoped></style>
