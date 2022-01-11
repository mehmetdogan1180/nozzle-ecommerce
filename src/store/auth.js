import users from "@/storage/User.js";

const state = {
  id: null,
  name: "",
  email: "",
  token: localStorage.getItem("token"),
};
const getters = {};
const mutations = {
  USER_DATA(state, data) {
    state.id = data.id;
    state.email = data.email;
    state.name = data.name;
    state.token = data.token;
    localStorage.setItem("token", data.token);
  },
  CLEAR(state) {
    state.id = null;
    state.email = "";
    state.name = "";
    state.token = "";
    localStorage.removeItem("token");
  },
};
const actions = {
  setUserData({ commit, dispatch }, data) {
    commit("USER_DATA", data);
    dispatch("basket/init", { userId: data.id }, { root: true });
  },
  async getInfo({ commit, state, dispatch }) {
    try {
      if (state.id) {
        return Promise.resolve(state);
      }
      if (!state.token) {
        throw new Error("Giriş yapılmalı");
      }
      const user = users.find((i) => i.token === state.token);
      if (!user) {
        throw new Error("Token geçersiz");
      }
      commit("USER_DATA", user);
      dispatch("basket/init", { userId: user.id }, { root: true });
      return Promise.resolve(user);
    } catch (e) {
      console.log(e);
      commit("CLEAR");
      return Promise.reject(e);
    }
  },
  logout({ commit }) {
    commit("CLEAR");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
