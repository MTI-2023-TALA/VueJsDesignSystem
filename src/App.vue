<script setup lang="ts">
import TalaNavbarVue from "./components/Navbar/TalaNavbar.vue";
import TalaNavbarItem from "./components/Navbar/TalaNavbarItem.vue";
</script>

<template>
  <TalaNavbarVue sticky>
    <TalaNavbarItem href="/">Home Page</TalaNavbarItem>
    <TalaNavbarItem href="skeleton">Skeleton</TalaNavbarItem>
    <TalaNavbarItem href="breadcrumb">Breadcrumb</TalaNavbarItem>
    <TalaNavbarItem href="progress">Progress Bar</TalaNavbarItem>
    <TalaNavbarItem href="table">Table</TalaNavbarItem>
    <TalaNavbarItem href="dropdown">Dropdown</TalaNavbarItem>
    <TalaNavbarItem href="navbar">Navbar</TalaNavbarItem>
    <TalaNavbarItem href="tabs">Tabs</TalaNavbarItem>
    <TalaNavbarItem href="modal">Modal</TalaNavbarItem>
  </TalaNavbarVue>
  <router-view></router-view>
</template>

<style>
@import "./assets/base.css";
body {
  margin: 0;
}
</style>
