<script setup lang="ts">
import { ref } from "vue";
import TalaModal from "../Modal/TalaModal.vue";

const showCenteredModal = ref(false);
function toggleCenteredModal() {
  showCenteredModal.value = !showCenteredModal.value;
}

function getShowCenteredModal() {
  return showCenteredModal.value;
}

const showNotCenteredModal = ref(false);
function toggleNotCenteredModal() {
  showNotCenteredModal.value = !showNotCenteredModal.value;
}

function getShowNotCenteredModal() {
  return showNotCenteredModal.value;
}
const showHeadlessModal = ref(false);
function toggleHeadlessModal() {
  showHeadlessModal.value = !showHeadlessModal.value;
}

function getShowHeadlessModal() {
  return showHeadlessModal.value;
}

const showFootlessModal = ref(false);
function toggleFootlessModal() {
  showFootlessModal.value = !showFootlessModal.value;
}

function getShowFootlessModal() {
  return showFootlessModal.value;
}
</script>

<template>
  <div>
    <button class="button is-primary" v-on:click="toggleCenteredModal()">
      Launch centered modal
    </button>
    <button class="button is-primary" v-on:click="toggleNotCenteredModal()">
      Launch not centered modal
    </button>
    <button class="button is-primary" v-on:click="toggleHeadlessModal()">
      Launch modal without header
    </button>
    <button class="button is-primary" v-on:click="toggleFootlessModal()">
      Launch modal without footer
    </button>
    <TalaModal
      @close="toggleCenteredModal()"
      title="Centered modal"
      v-bind:show-modal="getShowCenteredModal()"
      :hide-footer="false"
      :hide-header="false"
      :centered="true"
      size="sm"
    >
      <p>Vertically centered modal, small size !</p>
    </TalaModal>
    <TalaModal
      @close="toggleNotCenteredModal()"
      title="Not centered modal"
      v-bind:show-modal="getShowNotCenteredModal()"
      :hide-footer="false"
      :hide-header="false"
      :centered="false"
      size="md"
    >
      <p>Not centered modal, medium size !</p>
    </TalaModal>
    <TalaModal
      @close="toggleHeadlessModal()"
      title="Headless modal"
      v-bind:show-modal="getShowHeadlessModal()"
      :hide-footer="false"
      :hide-header="true"
      :centered="true"
      size="lg"
    >
      <p>Headless modal, large size !</p>
    </TalaModal>
    <TalaModal
      @close="toggleFootlessModal()"
      title="Footless modal"
      v-bind:show-modal="getShowFootlessModal()"
      :hide-footer="true"
      :hide-header="false"
      :centered="true"
      size="xl"
    >
      <p>Footless modal, extra large size !</p>
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
  margin: 0.25rem;

  &.is-primary {
    background-color: $primary-500;
    color: white;

    &:hover {
      background-color: $primary-600;
    }
  }
}
</style>
