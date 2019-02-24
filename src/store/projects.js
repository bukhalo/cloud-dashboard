import axios from "axios";

export default {
  state: {
    projects: []
  },
  mutations: {
    set(state, payload) {
      state.projects = payload;
    }
  },
  actions: {
    async get({ commit }) {
      const projectsIds = await axios.get(
        "http://localhost:5000/cloud/project"
      );
      const projects = await projectsIds.data.map(
        async id => await axios.get(`http://localhost:5000/cloud/project/${id}`)
      );
      Promise.all(projects).then(res => {
        commit("set", res.map(item => item.data));
      });
    }
  },
  getters: {
    projects: state => state.projects
  },
  namespaced: true
};
