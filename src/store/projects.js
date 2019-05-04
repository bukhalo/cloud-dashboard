import api from "@/plugins/api";
import billing from "@/plugins/billing";

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
      const projectsIds = await billing.get("", {
        params: {
          out: "bjson",
          func: "cloud-project"
        }
      });
      const projects = await projectsIds.data.elem.map(
        async item => await api.get(`/cloud/project/${item["project-id"]}`)
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
