<script setup lang="ts">
import TalaSkeleton from "../Skeleton/TalaSkeleton.vue";
</script>

<template>
  <TalaSkeleton width="80%" height="1.5rem" animation="throb"></TalaSkeleton>
  <TalaSkeleton
    width="55%"
    height="1rem"
    animation="fade"
    variant="info"
  ></TalaSkeleton>
  <TalaSkeleton
    width="75%"
    height="30px"
    variant="error"
    animation="none"
  ></TalaSkeleton>
  <TalaSkeleton width="65%" height="1rem" variant="success"></TalaSkeleton>
  <TalaSkeleton width="90%" height="30px" variant="warn"></TalaSkeleton>
</template>

<style scoped></style>
