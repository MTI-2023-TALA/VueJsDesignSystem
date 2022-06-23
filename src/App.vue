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
  </TalaNavbarVue>
  <router-view></router-view>
</template>

<style scoped>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
