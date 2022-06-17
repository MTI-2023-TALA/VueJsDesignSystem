<script setup lang="ts">
export interface TalaTableProps {
  striped: boolean;
  hover: boolean;
  items: any[];
  small: boolean;
  fields: { key: string; label: string; variant: string; sortable: boolean };
}

withDefaults(defineProps<TalaTableProps>(), {
  striped: false,
  hover: false,
  items: () => [],
  small: false,
});
</script>

<template>
  <div></div>
</template>
