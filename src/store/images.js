import api from "@/plugins/api";

export default {
  state: {
    images: []
  },
  mutations: {
    set(state, payload) {
      state.images = payload;
    }
  },
  actions: {
    async get({ commit, rootState }) {
      const projectId = rootState.projects.projectCurrentId;
      const images = await api.get(`/cloud/project/${projectId}/image`);
      commit("set", images.data);
    }
  },
  getters: {
    images: state => state.images
  },
  namespaced: true
};
