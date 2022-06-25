<script setup lang="ts">
export interface TalaDropdownProps {
  dropup: boolean;
  dropright: boolean;
  dropleft: boolean;
  split: boolean;
  variant: string;
  text?: string;
}

function toggleDropdown(event: any) {
  let sibling = event.srcElement.nextSibling;
  while (sibling && sibling.id != "myDropdown") {
    sibling = sibling.nextSibling;
  }
  sibling?.classList.toggle("show");
}

withDefaults(defineProps<TalaDropdownProps>(), {
  dropup: false,
  dropright: false,
  dropleft: false,
  split: false,
  variant: "primary",
  text: "Dropdown",
});
</script>

<template>
  <div class="dropdown">
    <button
      v-if="!split"
      v-on:click="toggleDropdown($event)"
      class="dropdown-button"
    >
      {{ text }}
    </button>
    <button v-show="split" class="dropdown-button">
      {{ text }}
    </button>
    <button
      v-show="split"
      class="dropdown-button"
      v-on:click="toggleDropdown($event)"
    >
      <svg
        class="dropdown-button triangle"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 531.74 460.5"
        overflow="visible"
        enable-background="new 0 0 531.74 460.5"
        xml:space="preserve"
        height="16"
      >
        <polygon fill="#ffffff" points="530.874,0.5 265.87,459.5 0.866,0.5 " />
      </svg>
    </button>

    <div
      id="myDropdown"
      class="dropdown-content"
      :class="[
        dropleft ? 'dropleft' : '',
        dropright ? 'dropright' : '',
        dropup ? 'dropup' : '',
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/_variables.scss";
.dropdown {
  position: relative;
  display: inline-block;
  margin: 0.5rem;
}

.dropdown-button {
  background-color: $information-500;
  color: $white;
  padding: 16px;
  &.triangle {
    padding: 0px;
  }
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: $light-grey-200;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  &.dropleft {
    top: 0;
    right: 100%;
    left: auto;
  }
  &.dropright {
    top: 0;
    right: auto;
    left: 100%;
  }

  &.dropup {
    top: auto;
    bottom: 100%;
  }
}
.show {
  display: block;
}
</style>
