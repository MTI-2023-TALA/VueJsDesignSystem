<script setup lang="ts">
import TalaBreadcrumb from "../Breadcrumb/TalaBreadcrumb.vue";
</script>

<template>
  <TalaBreadcrumb
    :items="[
      { href: '#', active: false, text: 'Go back to home' },
      { href: 'breadcrumb', active: true, text: 'Breadcrumb page' },
    ]"
  ></TalaBreadcrumb>
</template>

<style scoped></style>
