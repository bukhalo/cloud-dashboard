import api from "@/plugins/api";

export default {
  state: {
    projects: [],
    projectCurrentId: ""
  },
  mutations: {
    set(state, payload) {
      state.projects = payload;
    },
    setActive(state, payload) {
      state.projectCurrentId = payload;
    }
  },
  actions: {
    async get({ commit }) {
      const projectsIds = await api.get("/cloud/project");
      const projects = await projectsIds.data.map(
        async id => await api.get(`/cloud/project/${id}`)
      );
      Promise.all(projects).then(res => {
        commit("set", res.map(item => item.data));
        commit("setActive", res[0].data.project_id);
      });
    }
  },
  getters: {
    projects: state => state.projects
  },
  namespaced: true
};
