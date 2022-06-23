<script setup lang="ts">
import TalaBreadcrumb from "../Breadcrumb/TalaBreadcrumb.vue";
</script>

<template>
  <TalaBreadcrumb
    :items="[
      { href: '#', active: false, text: 'Go back to home' },
      { href: '#', active: false, text: 'Those breadcrumbs are inactive' },
      { href: 'breadcrumb', active: true, text: 'But this one is active' },
    ]"
  ></TalaBreadcrumb>
</template>

<style scoped></style>
