<script setup lang="ts">
export interface TalaDropdownItemProps {
  active: boolean;
  disabled: boolean;
}

withDefaults(defineProps<TalaDropdownItemProps>(), {
  active: false,
  disabled: false,
});
</script>

<template>
  <a :class="[active ? 'active' : '', disabled ? 'disabled' : 'abled']">
    <slot></slot>
  </a>
</template>

<style scoped>
.dropdown-content .abled {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a.abled:hover {
  background-color: #ddd;
}

.dropdown a.abled.active:hover {
  background-color: lightblue;
}

.dropdown a.active:hover {
  background-color: #ddd;
}

.active {
  background-color: blue;
}

.dropdown-content .disabled {
  color: #888;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
</style>
