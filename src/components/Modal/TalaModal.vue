<script setup lang="ts">
export interface TalaModalProps {
  showModal: boolean;
  centered: boolean;
  title: string;
  size: string;
  "hide-header": boolean;
  "hide-footer": boolean;
}

withDefaults(defineProps<TalaModalProps>(), {
  showModal: false,
  centered: false,
  size: "md",
  "hide-header": false,
  "hide-footer": false,
});
</script>

<template>
  <div></div>
</template>

<style scoped></style>
