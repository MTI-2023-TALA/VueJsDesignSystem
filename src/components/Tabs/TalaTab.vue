<script setup lang="ts">
export interface TalaTabProps {
  title: string;
  active: boolean;
  disabled: boolean;
}

withDefaults(defineProps<TalaTabProps>(), {
  active: false,
  disabled: false,
});
</script>

<template>
  <div></div>
</template>

<style scoped></style>
