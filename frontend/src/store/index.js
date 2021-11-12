import { createStore } from "vuex";

export default createStore({
  state: {
    isMobileView: false,
    isLoading: false,
  },
  mutations: {
    setMobileView(state, payload) {
      state.isMobileView = payload;
    },
  },
  actions: {},
  modules: {},
});
