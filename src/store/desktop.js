import billing from "@/plugins/billing";

export default {
  state: {
    desktop: {
      user: {
        name: ""
      }
    }
  },
  mutations: {
    set(state, payload) {
      state.desktop = payload;
    }
  },
  actions: {
    async get({ commit }) {
      try {
        const req = await billing.get("", {
          params: {
            out: "bjson",
            func: "desktop"
          }
        });
        commit("set", req.data);
      } catch (e) {
        console.error(e);
      }
    }
  },
  getters: {
    desktop: state => state.desktop
  },
  namespaced: true
};
