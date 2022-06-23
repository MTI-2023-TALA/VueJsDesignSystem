import { createRouter, createWebHashHistory } from "vue-router";

import App from "./App.vue";
import BreadcrumbPageVue from "./components/Pages/BreadcrumbPage.vue";
import DropdownPageVue from "./components/Pages/DropdownPage.vue";
import HomePageVue from "./components/Pages/HomePage.vue";
import ModalPageVue from "./components/Pages/ModalPage.vue";
import NavbarPageVue from "./components/Pages/NavbarPage.vue";
import ProgressBarPageVue from "./components/Pages/ProgressBarPage.vue";
import SkeletonPageVue from "./components/Pages/SkeletonPage.vue";
import TablePageVue from "./components/Pages/TablePage.vue";
import TabsPageVue from "./components/Pages/TabsPage.vue";
import { createApp } from "vue";

const Bar = { template: "<div>bar</div>" };

const routes = [
  { path: "/", component: HomePageVue },
  { path: "/skeleton", component: SkeletonPageVue },
  { path: "/breadcrumb", component: BreadcrumbPageVue },
  { path: "/progress", component: ProgressBarPageVue },
  { path: "/table", component: TablePageVue },
  { path: "/dropdown", component: DropdownPageVue },
  { path: "/navbar", component: NavbarPageVue },
  { path: "/tabs", component: TabsPageVue },
  { path: "/modal", component: ModalPageVue },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
createApp(App).use(router).mount("#app");
