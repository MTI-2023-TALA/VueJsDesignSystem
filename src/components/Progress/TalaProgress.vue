<script setup lang="ts">
export interface TalaProgressProps {
  value: number | string;
  variant: string;
  showProgress: boolean;
  animated: boolean;
  striped: boolean;
}

withDefaults(defineProps<TalaProgressProps>(), {
  value: 0,
  showProgress: false,
  animated: false,
  striped: false,
});
</script>

<template>
  <div class="loading-bar">
    <div
      class="loading-fill"
      :class="[variant, animated ? 'animated' : '', striped ? 'striped' : '']"
      :style="{ width: value + '%' }"
    ></div>
    <div v-if="showProgress">{{ value }}%</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/_variables.scss";
.loading-bar {
  position: relative;
  margin: 1rem;
  width: 800px;
  height: 30px;
  border-radius: 2px;
  border: 3px solid $light-grey-500;
  text-align: center;
}

.loading-fill {
  position: absolute;
  height: 100%;
  border-radius: 2px;
  background-size: 30px;
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

.striped {
  background-image: linear-gradient(
    45deg,
    rgba($color: #fff, $alpha: 0.35) 25%,
    transparent 25%,
    transparent 50%,
    rgba($color: #fff, $alpha: 0.35) 50%,
    rgba($color: #fff, $alpha: 0.35) 75%,
    transparent 75%,
    transparent
  );
}

.animated {
  background-image: linear-gradient(
    45deg,
    rgba($color: #fff, $alpha: 0.35) 25%,
    transparent 25%,
    transparent 50%,
    rgba($color: #fff, $alpha: 0.35) 50%,
    rgba($color: #fff, $alpha: 0.35) 75%,
    transparent 75%
  );
  animation: animate-stripes 3s linear infinite;
}

@keyframes animate-stripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 0;
  }
}
</style>
