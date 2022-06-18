<script setup lang="ts">
export interface TalaSkeletonProps {
  animation: string;
  height: string;
  width: string;
  variant: string;
}

withDefaults(defineProps<TalaSkeletonProps>(), {
  animation: "wave",
  variant: "default",
});
</script>

<template>
  <div class="container" :style="{ height: height }">
    <div
      class="skeleton"
      :class="[variant, animation]"
      :style="{ width: width }"
    ></div>
  </div>
  <br />
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  margin: 1rem;
  width: 800px;
  height: 30px;
  text-align: center;
}

.skeleton {
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

.default {
  background-color: grey;
}

@keyframes wave-anim {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes throb-anim {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.975);
  }
}

@keyframes fade-anim {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

.wave {
  &::before {
    content: " ";
    animation: wave-anim 1.75s linear infinite;
    background: linear-gradient(
      90deg,
      transparent,
      hsla(0, 0%, 100%, 0.4),
      transparent
    );
    z-index: 0;
    position: absolute;
    width: 80%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  position: relative;
  overflow: hidden;
}

.throb {
  animation: throb-anim 0.75s infinite alternate ease-in;
  position: relative;
}

.fade {
  animation: fade-anim 0.75s infinite alternate ease-in-out;
  position: relative;
}
</style>
