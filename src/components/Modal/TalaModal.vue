<script setup lang="ts">
export interface TalaModalProps {
  showModal: boolean;
  centered: boolean;
  title: string;
  size: string;
  hideHeader: boolean;
  hideFooter: boolean;
}

withDefaults(defineProps<TalaModalProps>(), {
  showModal: false,
  centered: false,
  size: "md",
  hideHeader: false,
  hideFooter: false,
});
</script>

<template>
  <div class="modal" :class="{ 'is-active': showModal }">
    <div
      class="modal-card"
      :class="{
        centered: centered,
        'modal-sm': size === 'sm',
        'modal-md': size === 'md',
        'modal-lg': size === 'lg',
        'modal-xl': size === 'xl',
      }"
    >
      <div class="modal-top" v-if="!hideHeader">
        <div class="modal-title">
          {{ title }}
        </div>
        <button class="modal-close" v-on:click="$emit('close')">x</button>
      </div>
      <div class="divider" v-if="!hideHeader"></div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="divider" v-if="!hideFooter"></div>
      <div class="modal-footer" v-if="!hideFooter">
        <button class="button" v-on:click="$emit('close')">Close</button>
        <button class="button is-primary" v-on:click="$emit('close')">
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variables";
.modal {
  display: none;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.is-active {
  display: block;
}

.modal-card {
  position: absolute;
  width: 100%;
  max-width: 500px;
  background-color: $light-grey-300;
  border-radius: 0.5rem;

  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal-sm {
  max-width: 300px;
}

.modal-md {
  max-width: 400px;
}

.modal-lg {
  max-width: 500px;
}

.modal-xl {
  max-width: 800px;
}

.centered {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: $dark-grey-900;
}

.modal-close {
  background-color: transparent;
  border: none;
  color: $dark-grey-900;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-body {
  padding: 0.5rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
}

.divider {
  height: 1px;
  background-color: $light-grey-500;
  margin: 0.5rem 0;
}

.modal-footer button {
  background-color: $dark-grey-200;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;

  &.is-primary {
    background-color: $primary-500;
    color: white;
  }
}

.modal-footer button:first-child {
  margin-right: 0.5rem;
}
</style>
