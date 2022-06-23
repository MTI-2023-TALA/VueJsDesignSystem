<script setup lang="ts">
import TalaDropdown from "../Dropdown/TalaDropdown.vue";
import TalaDropownItem from "../Dropdown/TalaDropownItem.vue";
import TalaDropownDivider from "../Dropdown/TalaDropownDivider.vue";
</script>

<template>
  <TalaDropdown>
    <TalaDropownItem>Basic item</TalaDropownItem>
    <TalaDropownItem>Another one over a divider</TalaDropownItem>
    <TalaDropownDivider></TalaDropownDivider>
    <TalaDropownItem disabled>A disabled item</TalaDropownItem>
    <TalaDropownItem active>The active item</TalaDropownItem>
  </TalaDropdown>
</template>

<style scoped></style>
