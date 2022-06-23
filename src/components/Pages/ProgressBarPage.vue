<script setup lang="ts">
import TalaProgressVue from "../Progress/TalaProgress.vue";
</script>

<template>
  <TalaProgressVue value="25" variant="success"></TalaProgressVue>
  <TalaProgressVue value="50" variant="warn" :striped="true"></TalaProgressVue>
  <TalaProgressVue
    value="75"
    variant="info"
    :show-progress="true"
  ></TalaProgressVue>
  <TalaProgressVue
    value="100"
    variant="error"
    :animated="true"
  ></TalaProgressVue>
</template>

<style scoped></style>
