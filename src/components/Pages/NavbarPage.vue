<script setup lang="ts">
import TalaNavbarVue from "../Navbar/TalaNavbar.vue";
import TalaNavbarItem from "../Navbar/TalaNavbarItem.vue";
</script>

<template>
  <TalaNavbarVue variant="info">
    <TalaNavbarItem href="/">Home Page</TalaNavbarItem>
  </TalaNavbarVue>
  <TalaNavbarVue variant="warn">
    <TalaNavbarItem href="/">Home Page</TalaNavbarItem>
  </TalaNavbarVue>
  <TalaNavbarVue variant="success">
    <TalaNavbarItem href="/">Home Page</TalaNavbarItem>
  </TalaNavbarVue>
  <TalaNavbarVue variant="error">
    <TalaNavbarItem href="/">Home Page</TalaNavbarItem>
  </TalaNavbarVue>
</template>

<style scoped></style>
