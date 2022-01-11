const state = {
  items: [],
};
const getters = {};
const mutations = {
  ADD(state, data) {
    const find = state.items.find((i) => i.id === data.item.id);
    if (find) {
      find.quantity += data.item.quantity;
    } else {
      state.items.push(data.item);
    }
    localStorage.setItem(`basket${data.userId}`, JSON.stringify(state.items));
  },
  SET_ITEMS(state, data) {
    state.items = data;
  },
  SET_ITEM(state, data) {
    const find = state.items.find((i) => i.id === data.item.id);
    if (find) {
      find.quantity = data.item.quantity;
    }
    localStorage.setItem(`basket${data.userId}`, JSON.stringify(state.items));
  },
  REMOVE_ITEM(state, data) {
    state.items = state.items.filter((i) => i.id !== data.item.id);
    localStorage.setItem(`basket${data.userId}`, JSON.stringify(state.items));
  },
  CLEAR(state, data) {
    state.items = [];
    localStorage.removeItem(`basket${data.userId}`);
  },
};
const actions = {
  addItem({ commit, rootState }, data) {
    commit("ADD", {
      userId: rootState.auth.id,
      item: { id: data.id, quantity: data.quantity || 1 },
    });
  },
  setItem({ commit, rootState }, data) {
    commit("SET_ITEM", {
      userId: rootState.auth.id,
      item: { id: data.id, quantity: data.quantity || 1 },
    });
  },
  removeItem({ commit, rootState }, data) {
    commit("REMOVE_ITEM", {
      userId: rootState.auth.id,
      item: { id: data.id },
    });
  },
  clear({ commit, rootState }) {
    commit("CLEAR", {
      userId: rootState.auth.id,
    });
  },

  init({ commit }, data) {
    console.log("aaaaaa", data);

    const local = localStorage.getItem(`basket${data.userId}`);
    commit("SET_ITEMS", local ? JSON.parse(local) : []);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
