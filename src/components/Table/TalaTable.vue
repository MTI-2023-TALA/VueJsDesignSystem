<script setup lang="ts">
export interface TalaTableProps {
  striped: boolean;
  hover: boolean;
  items: any[];
  small: boolean;
  fields?: {
    key: string;
    label?: string;
    variant?: string;
    sortable?: boolean;
  }[];
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
    id="table"
    :class="[
      hover ? 'hover' : '',
      striped ? 'striped' : '',
      small ? 'small' : 'normal',
    ]"
  >
    <div v-if="!fields">
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
    </div>
    <div v-if="fields">
      <colgroup>
        <col
          v-for="(field, key) in fields"
          :key="key"
          :class="[field.variant, field.sortable ? 'sortable' : '']"
        />
      </colgroup>
      <thead>
        <tr>
          <th v-for="(field, key) in fields" :key="key">
            {{ field.label ? field.label : humanizeKey(field.key) }}
          </th>
        </tr>
      </thead>
      <tr v-for="(row, key) in items" :key="key">
        <td v-for="(field, key) in fields" :key="key">
          {{ row[field.key] }}
        </td>
      </tr>
    </div>
  </table>
</template>

<style lang="scss" scoped>
@import "../../assets/variables";
.normal {
  td,
  th {
    border-bottom: 1px solid $light-grey-400;
    padding: 8px;
  }
}

.small {
  td,
  th {
    border-bottom: 1px solid $light-grey-400;
    padding: 4px;
  }
}

.striped {
  tr:nth-child(even) {
    background-color: $light-grey-300;
  }
}

.hover {
  tr:hover {
    background-color: $light-grey-400;
  }
}

th {
  text-align: left;
  text-decoration: solid;
}

.info {
  background-color: $information-400;
}

.success {
  background-color: $success-400;
}

.warn {
  background-color: $warning-400;
}

.error {
  background-color: $error-400 !important;
}
</style>
