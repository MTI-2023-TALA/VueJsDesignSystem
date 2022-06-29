<script setup lang="ts">
export interface TalaTabProps {
  title: string;
  active: boolean;
  disabled: boolean;
}

function openTab(evt: Event, tab: string, disabled: boolean) {
  if (disabled) {
    return;
  }
  const tabcontent = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabcontent.length; i++) {
    (tabcontent[i] as any).style.display = "none";
  }
  const tablinks = document.getElementsByClassName("tab-link");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  (document.getElementById(tab) as any).style.display = "block";
  (evt.currentTarget as any).className += " active";
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
      v-on:click="openTab($event, title, disabled)"
      :class="[disabled ? 'disabled' : '', active ? 'active' : '']"
    >
      {{ title }}
    </button>
  </div>
  <div
    :id="title"
    class="tab-content"
    :style="[active ? 'display: block;' : '']"
  >
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

/* Change background color of buttons on hover */
.tab button:hover:not(.disabled) {
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

.tab button.disabled {
  color: $dark-grey-300;
  cursor: default;
}
</style>
