<script setup lang="ts">
export interface TalaDropdownProps {
  dropup: boolean;
  dropright: boolean;
  dropleft: boolean;
  split: boolean;
  variant: string;
  text?: string;
}

function toggleDropdown() {
  document.getElementById("myDropdown")?.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event?.target?.matches(".dropdown-button")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

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
    <button v-on:click="toggleDropdown()" class="dropdown-button">
      {{ text }}
    </button>
    <div id="myDropdown" class="dropdown-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/_variables.scss";
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background-color: $information-500;
  color: $white;
  padding: 16px;
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
}
.show {
  display: block;
}
</style>
