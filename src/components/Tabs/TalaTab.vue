<script setup lang="ts">
export interface TalaTabProps {
  title: string;
  active: boolean;
  disabled: boolean;
}

function openTab(evt: Event, tab: string) {
  const tabcontent = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  const tablinks = document.getElementsByClassName("tab-link");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}

withDefaults(defineProps<TalaTabProps>(), {
  active: false,
  disabled: false,
});
</script>

<template>
  <div class="tab">
    <button
      class="tab-link"
      v-on:click="openTab($event, title)"
      :class="disabled ? 'disabled' : ''"
    >
      {{ title }}
    </button>
  </div>
  <div :id="title" class="tab-content">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variables";
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 1rem 1rem;
  color: $information-600;
}
.tab-link.active {
  color: $dark-grey-800;
}
.tab-link.disable {
  background-color: red;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: $light-grey-500;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: $light-grey-500;
}

/* Style the tab content */
.tab-content {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>
