import { createStore } from "vuex";
import auth from "./auth";
import category from "./category";
import basket from "./basket";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    category,
    basket,
  },
});
