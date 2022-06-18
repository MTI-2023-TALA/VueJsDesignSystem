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
.breadcrumb {
  background-color: #e9ecef;
  padding: 0.75rem 1rem;
}

.breadcrumb-item {
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  color: #6c757d;
  text-decoration: none;
  background-color: transparent;

  a {
    &.active {
      color: #343a40;
      background-color: #e9ecef;
      pointer-events: none;
    }

    color: blue;
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
