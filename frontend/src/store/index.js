import { createStore } from "vuex";

export default createStore({
  state: {
    isMobileView: false,
    isLoading: false,
    errors: null,
  },
  mutations: {
    setMobileView(state, payload) {
      state.isMobileView = payload;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    successLoading(state) {
      state.isLoading = false;
    },
    failLoading(state, payload) {
      state.isLoading = false;
      state.errors = payload;
    },
  },
  actions: {},
  modules: {},
});
