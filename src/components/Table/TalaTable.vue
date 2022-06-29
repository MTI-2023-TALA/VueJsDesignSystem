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

let ascending = true;

function sortOrder(a: string, b: string): boolean {
  if (ascending) {
    return a > b;
  }
  return a < b;
}

function sortTable(colNum: number, event: any) {
  let table: HTMLTableElement | null = null;
  const tables = document.getElementsByTagName("table");
  for (const t of tables) {
    if (t.contains(event.target)) table = t;
  }
  if (table === null) {
    return;
  }
  let switching = true;
  let shouldSwitch = false;
  let i;
  while (switching) {
    switching = false;
    const rows = table.getElementsByTagName("tr");
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      const x = rows[i].getElementsByTagName("td")[colNum];
      const y = rows[i + 1].getElementsByTagName("td")[colNum];
      if (sortOrder(x.innerHTML.toLowerCase(), y.innerHTML.toLowerCase())) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode?.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  ascending = !ascending;
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
          :class="[field.variant]"
        />
      </colgroup>
      <thead>
        <tr>
          <th
            v-for="(field, key) in fields"
            :key="key"
            :class="[field.sortable ? 'sortable' : '']"
          >
            {{ field.label ? field.label : humanizeKey(field.key) }}
            <button
              v-if="field.sortable"
              v-on:click="sortTable(key, $event)"
              class="sort-button"
            >
              <svg
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                viewBox="0 -256 1792 1792"
                id="svg3001"
                version="1.1"
                inkscape:version="0.48.3.1 r9886"
                width="100%"
                height="100%"
                sodipodi:docname="sort_font_awesome.svg"
              >
                <metadata id="metadata3011">
                  <rdf:RDF>
                    <cc:Work rdf:about="">
                      <dc:format>image/svg+xml</dc:format>
                      <dc:type
                        rdf:resource="http://purl.org/dc/dcmitype/StillImage"
                      />
                    </cc:Work>
                  </rdf:RDF>
                </metadata>
                <defs id="defs3009" />
                <sodipodi:namedview
                  pagecolor="#ffffff"
                  bordercolor="#666666"
                  borderopacity="1"
                  objecttolerance="10"
                  gridtolerance="10"
                  guidetolerance="10"
                  inkscape:pageopacity="0"
                  inkscape:pageshadow="2"
                  inkscape:window-width="640"
                  inkscape:window-height="480"
                  id="namedview3007"
                  showgrid="false"
                  inkscape:zoom="0.13169643"
                  inkscape:cx="896"
                  inkscape:cy="896"
                  inkscape:window-x="0"
                  inkscape:window-y="25"
                  inkscape:window-maximized="0"
                  inkscape:current-layer="svg3001"
                />
                <g transform="matrix(1,0,0,-1,387.25424,1293.0169)" id="g3003">
                  <path
                    d="m 1024,448 q 0,-26 -19,-45 L 557,-45 q -19,-19 -45,-19 -26,0 -45,19 L 19,403 q -19,19 -19,45 0,26 19,45 19,19 45,19 h 896 q 26,0 45,-19 19,-19 19,-45 z m 0,384 q 0,-26 -19,-45 -19,-19 -45,-19 H 64 q -26,0 -45,19 -19,19 -19,45 0,26 19,45 l 448,448 q 19,19 45,19 26,0 45,-19 l 448,-448 q 19,-19 19,-45 z"
                    id="path3005"
                    inkscape:connector-curvature="0"
                    style="fill: currentColor"
                  />
                </g>
              </svg>
            </button>
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

.sort-button {
  max-width: 20px;
  max-height: 20px;
  background-color: transparent;
  border: none;

  svg {
    width: 0.75rem;
    height: 0.75rem;
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
