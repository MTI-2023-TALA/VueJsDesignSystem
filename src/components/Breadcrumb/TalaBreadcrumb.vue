<script setup lang="ts">
defineProps<{
  items: Array<{ href: string; active: boolean; text: string }>;
}>();
</script>

<template>
  <ul class="breadcrumb">
    <li class="breadcrumb-item" v-for="item in items" :key="item.text">
      <a :href="item.href" :class="{ active: item.active }">
        {{ item.text }}
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import "../../assets/variables";

.breadcrumb {
  background-color: $light-grey-300;
  padding: 0.75rem 1rem;
  margin: 0.5rem;
}

.breadcrumb-item {
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  color: $dark-grey-300;
  text-decoration: none;
  background-color: transparent;

  a {
    &.active {
      color: $dark-grey-600;
      pointer-events: none;
    }

    color: $information-500;
    text-decoration: none;
  }

  &:not(:first-child) {
    &::before {
      padding: 0.25rem;
      content: "/";
    }
  }
}
</style>
