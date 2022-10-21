import { createStore } from "vuex";

export default createStore({
  state: {
    user: [
      {
        email: "test@test.com",
        password: 12345,
      },
    ],
    isAuth: false,
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getAuthInfo(state) {
      return state.isAuth;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
