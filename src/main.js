import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Notifications from "@kyvg/vue3-notification";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingBasket,
  faCheck,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faShoppingBasket, faCheck, faArrowLeft);

createApp(App)
  .use(store)
  .use(router)
  .use(Notifications)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
