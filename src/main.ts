import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import BreadcrumbPageVue from "./components/Pages/BreadcrumbPage.vue";
import HomePageVue from "./components/Pages/HomePage.vue";
import ProgressBarPageVue from "./components/Pages/ProgressBarPage.vue";
import SkeletonPageVue from "./components/Pages/SkeletonPage.vue";
import TablePageVue from "./components/Pages/TablePage.vue";
import { createApp } from "vue";

const Bar = { template: "<div>bar</div>" };

const routes = [
  { path: "/", component: HomePageVue },
  { path: "/skeleton", component: SkeletonPageVue },
  { path: "/breadcrumb", component: BreadcrumbPageVue },
  { path: "/progress", component: ProgressBarPageVue },
  { path: "/table", component: TablePageVue },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
createApp(App).use(router).mount("#app");
