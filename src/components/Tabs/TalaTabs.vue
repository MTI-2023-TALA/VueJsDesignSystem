<script setup lang="ts">
export interface TalaTabsProps {
  vertical: boolean;
  align: string;
  card: boolean;
  end: false;
}

withDefaults(defineProps<TalaTabsProps>(), {
  vertical: false,
  align: "left",
  card: false,
  end: false,
});
</script>

<template>
  <div></div>
</template>

<style scoped></style>
