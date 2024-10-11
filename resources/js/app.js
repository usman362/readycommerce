import "./bootstrap";

import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";

import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import localization from "./localization";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.component("v-select", VueSelect);
localization.fetchLocalizationData();
app.use(localization.i18n);
app.use(pinia);
app.use(router);
app.use(VueAwesomePaginate);
app.use(Toast);
app.mount("#app");

const firebaseConfig = {
  apiKey: "AIzaSyBmcD7NUeTNCOOa1nne5b_KkPByjk5gztU",
  authDomain: "ready-ecommerce-1f416.firebaseapp.com",
  projectId: "ready-ecommerce-1f416",
  storageBucket: "ready-ecommerce-1f416.appspot.com",
  messagingSenderId: "346679702256",
  appId: "1:346679702256:web:fd7bad7a41e1da30d20835",
  measurementId: "G-0DBQYGKQGK"
};

// Initialize Firebase
const firbaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firbaseapp);