<script setup lang="ts">
import TalaModal from "../Modal/TalaModal.vue";

let showModal = false;
function toggleModal() {
  showModal = !showModal;
}
</script>

<template>
  <div>
    <button class="button is-primary" v-on:click="toggleModal">
      Launch centered modal
    </button>
    <TalaModal
      @close="toggleModal"
      title="Bonsoir"
      v-bind:show-modal="showModal"
      :hide-footer="false"
      :hide-header="false"
      :centered="false"
      size="sm"
    >
      <p>Vertically centered modal !</p>
    </TalaModal>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variables";

.button {
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

    &:hover {
      background-color: $primary-600;
    }
  }
}
</style>
