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

<style lang="scss" scoped>
@import "../../assets/variables";
.dropdown-content .abled {
  color: $black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a.abled:hover {
  background-color: $light-grey-500;
}

.dropdown a.abled.active:hover {
  background-color: $information-500;
}

.dropdown-content .active {
  background-color: $information-500;
  color: $white;
}

.dropdown-content .disabled {
  color: $light-grey-800;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
</style>
