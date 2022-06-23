<script setup lang="ts">
import TalaTable from "../Table/TalaTable.vue";
</script>

<template>
  <p>SMALL TABLE</p>
  <TalaTable
    :small="true"
    :items="[
      { age: 40, first_name: 'Toto', last_name: 'Tata' },
      { age: 40, first_name: 'Toto', last_name: 'Tata' },
      { age: 40, first_name: 'Toto', last_name: 'Tata' },
      { age: 40, first_name: 'Toto', last_name: 'Tata' },
    ]"
  ></TalaTable>
  <p>HOVER TABLE</p>
  <TalaTable
    :hover="true"
    :items="[
      { age: 40, first_name: 'Toto', last_name: 'Tata' },
      { age: 40, first_name: 'Toto', last_name: 'Tata' },
      { age: 40, first_name: 'Toto', last_name: 'Tata' },
      { age: 40, first_name: 'Toto', last_name: 'Tata' },
    ]"
  ></TalaTable>
  <p>STRIPED TABLE</p>
  <TalaTable
    :striped="true"
    :items="[
      { age: 40, first_name: 'Toto', last_name: 'Tata' },
      { age: 40, first_name: 'Toto', last_name: 'Tata' },
      { age: 40, first_name: 'Toto', last_name: 'Tata' },
      { age: 40, first_name: 'Toto', last_name: 'Tata' },
    ]"
  ></TalaTable>
  <p>FIELD TABLE</p>
  <TalaTable
    :striped="true"
    :items="[
      { age: 40, first_name: 'Toto', last_name: 'Tata' },
      { age: 30, first_name: 'Toto', last_name: 'Tata' },
      { age: 20, first_name: 'Toto', last_name: 'Tata' },
      { age: 10, first_name: 'Toto', last_name: 'Tata' },
    ]"
    :fields="[
      { key: 'age', sortable: true },
      { key: 'first_name', label: 'Another one', variant: 'success' },
    ]"
  ></TalaTable>
</template>

<style scoped></style>
