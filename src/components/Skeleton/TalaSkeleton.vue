<script setup lang="ts">
export interface TalaSkeletonProps {
  animation: string;
  height: string;
  widht: string;
  variant: string;
}

withDefaults(defineProps<TalaSkeletonProps>(), {
  animation: "wave",
});
</script>

<template>
  <div></div>
</template>
