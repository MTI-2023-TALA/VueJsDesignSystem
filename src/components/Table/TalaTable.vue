<script setup lang="ts">
export interface TalaTableProps {
  striped: boolean;
  hover: boolean;
  items: any[];
  small: boolean;
  fields?: { key: string; label: string; variant: string; sortable: boolean }[];
}

withDefaults(defineProps<TalaTableProps>(), {
  striped: false,
  hover: false,
  items: () => [],
  small: false,
});

function humanizeKey(key: string): string {
  if (key.includes("_")) return humanizeSnakeCase(key);
  if (key.includes("-")) return humanizeKebabCase(key);
  return humanizeCamelCase(key);
}

function humanizeCamelCase(key: string): string {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
    return str.toUpperCase();
  });
}

function humanizeSnakeCase(key: string): string {
  return key
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
}

function humanizeKebabCase(key: string): string {
  return key
    .replace(/^[\s-]+|[\s-]+$/g, "")
    .replace(/[-\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
}
</script>

<template>
  <table
    :class="[
      hover ? 'hover' : '',
      striped ? 'striped' : '',
      small ? 'small' : 'normal',
    ]"
  >
    <thead>
      <tr>
        <th v-for="(value, key) in Object.keys(items[0])" :key="key">
          {{ humanizeKey(value) }}
        </th>
      </tr>
    </thead>
    <tr v-for="(row, key) in items" :key="key">
      <td v-for="(col, key) in Object.keys(items[0])" :key="key">
        {{ row[col] }}
      </td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
.normal {
  td,
  th {
    border-bottom: 1px solid #ddd;
    padding: 8px;
  }
}

.small {
  td,
  th {
    border-bottom: 1px solid #ddd;
    padding: 4px;
  }
}

.striped {
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
}

.hover {
  tr:hover {
    background-color: #ddd;
  }
}

th {
  text-align: left;
  text-decoration: solid;
}
</style>
