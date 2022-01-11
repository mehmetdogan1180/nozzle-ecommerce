const state = {
  categories: {},
  isLoaded: false,
};
const getters = {
  items: (state) =>
    Object.keys(state.categories).map((i) => state.categories[i]),
};
const mutations = {
  ADD(state, data) {
    data.productsIsLoaded = false;
    state.categories[data.id] = data;
  },
  SET_ITEMS(state, data) {
    data.map((i) => {
      i.productsIsLoaded = false;
      state.categories[i.id] = i;
    });
    state.isLoaded = true;
  },
  SET_PRODUCTS(state, data) {
    state.categories[data.categoryId].productsIsLoaded = true;
    state.categories[data.categoryId].products = data.products;
  },
};
const actions = {
  addCategory({ commit }, data) {
    commit("ADD", data);
  },
  addCategories({ commit }, data) {
    commit("SET_ITEMS", data);
  },
  setProducts({ commit }, data) {
    commit("SET_PRODUCTS", data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
