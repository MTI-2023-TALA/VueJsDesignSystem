<script setup lang="ts">
export interface TalaDropdownProps {
  dropup: boolean;
  dropright: boolean;
  dropleft: boolean;
  split: boolean;
  variant: string;
  text?: string;
}

function toggleDropdown(event: any, disabled = false, isSplitted = false) {
  if (disabled) return;
  let sibling = event.srcElement.nextSibling;
  console.log(sibling);

  if (isSplitted) {
    sibling = event.srcElement.parentNode?.nextSibling;
    if (!sibling) {
      sibling = event.srcElement.parentNode?.parentNode?.nextSibling;
    }
  }
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
    <button v-on:click="toggleDropdown($event, split)" class="dropdown-button">
      {{ text }}
      <button
        v-show="split"
        v-on:click="toggleDropdown($event, false, split)"
        class="btn-arrow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-down"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"
          />
        </svg>
      </button>
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
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $information-500;
  color: $white;
  padding: 16px;

  font-size: 16px;
  border: none;
  cursor: pointer;

  .btn-arrow {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $information-500;
    color: $white;

    padding: 0;
    padding-left: 8px;
    margin: 0;
    border: none;
    width: 1.5rem;
    height: 1.5rem;
  }

  svg {
    width: 100%;
    height: 100%;
  }
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
