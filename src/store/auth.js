const state = {
  id: null,
  name: "",
  email: "",
};
const getters = {};
const mutations = {
  USER_DATA(state, data) {
    state.id = data.id;
    state.email = data.email;
    state.name = data.name;
  },
};
const actions = {
  setUserData({ commit }, data) {
    commit("USER_DATA", data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
