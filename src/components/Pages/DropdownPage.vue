<script setup lang="ts">
import TalaDropdown from "../Dropdown/TalaDropdown.vue";
import TalaDropownItem from "../Dropdown/TalaDropownItem.vue";
import TalaDropownDivider from "../Dropdown/TalaDropownDivider.vue";
</script>

<template>
  <TalaDropdown>
    <TalaDropownItem>A</TalaDropownItem>
    <TalaDropownItem>B</TalaDropownItem>
    <TalaDropownDivider></TalaDropownDivider>
    <TalaDropownItem disabled>C</TalaDropownItem>
    <TalaDropownItem active>D</TalaDropownItem>
  </TalaDropdown>
</template>

<style scoped></style>
