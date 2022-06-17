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
.loading-bar {
  position: relative;
  margin: 1rem;
  width: 800px;
  height: 30px;
  border-radius: 2px;
  border: 3px solid #ddd;
  text-align: center;
}

.loading-fill {
  position: absolute;
  height: 100%;
  border-radius: 2px;
  background-size: 30px;
}

.info {
  background-color: blue;
}

.success {
  background-color: green;
}

.warn {
  background-color: orange;
}

.error {
  background-color: red;
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
