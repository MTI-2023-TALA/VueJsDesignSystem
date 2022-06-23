<script setup lang="ts">
import TalaTabs from "../Tabs/TalaTabs.vue";
import TalaTab from "../Tabs/TalaTab.vue";
</script>

<template>
  <TalaTabs>
    <TalaTab title="First tab"><p>This is a tab</p></TalaTab>
    <TalaTab title="Second tab" active><p>This is a second tab</p></TalaTab>
    <TalaTab title="Disabled tab" disabled><p>Can you see me ?</p></TalaTab>
  </TalaTabs>
</template>

<style scoped></style>
