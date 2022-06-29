<script setup lang="ts">
export interface TalaNavbarProps {
  fixed?: string;
  sticky: boolean;
  variant: string;
}

withDefaults(defineProps<TalaNavbarProps>(), {
  sticky: false,
  variant: "primary",
});
</script>

<template>
  <div class="navbar" :class="[variant, { sticky: sticky }]">
    <slot></slot>
  </div>
  <div :class="{ stickyMargin: sticky }"></div>
</template>

<style lang="scss" scoped>
@import "../../assets/variables";
.navbar {
  background-color: $light-grey-300;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
}

.primary {
  background-color: $primary-400;
}

.info {
  background-color: $information-500;
}

.success {
  background-color: $success-500;
}

.warn {
  background-color: $warning-500;
}

.error {
  background-color: $error-500;
}

.sticky {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.stickyMargin {
  margin-bottom: 4rem;
}
</style>
