<script setup lang="ts">
import TalaSkeleton from "./components/Skeleton/TalaSkeleton.vue";
import TalaBreadcrumb from "./components/Breadcrumb/TalaBreadcrumb.vue";
import TalaTable from "./components/Table/TalaTable.vue";
</script>

<template>
  <TalaBreadcrumb
    :items="[
      { href: '#', active: false, text: 'Bonjour' },
      { href: '#', active: true, text: 'Bonsoir' },
    ]"
  ></TalaBreadcrumb>
  <TalaSkeleton width="80%" height="1.5rem" animation="throb"></TalaSkeleton>
  <TalaSkeleton
    width="55%"
    height="1rem"
    animation="fade"
    variant="info"
  ></TalaSkeleton>
  <TalaSkeleton
    width="75%"
    height="30px"
    variant="error"
    animation="none"
  ></TalaSkeleton>
  <TalaSkeleton width="65%" height="1rem" variant="success"></TalaSkeleton>
  <TalaSkeleton width="90%" height="30px" variant="warn"></TalaSkeleton>
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
</template>

<style scoped>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
