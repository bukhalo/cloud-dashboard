import axios from "axios";

export default {
  state: {
    instances: []
  },
  mutations: {
    set(state, payload) {
      state.instances = payload;
    }
  },
  actions: {
    async get({ commit, rootState }) {
      const projectId = rootState.projects.projectCurrentId;
      const instancesIds = await axios.get(
        `http://localhost:5000/cloud/project/${projectId}/instance`
      );
      const instances = await instancesIds.data.map(
        async item =>
          await axios.get(
            `http://localhost:5000/cloud/project/${projectId}/instance/${
              item.id
            }`
          )
      );
      Promise.all(instances).then(res => {
        commit("set", res.map(item => item.data));
      });
    }
  },
  getters: {
    instances: state => state.instances
  },
  namespaced: true
};
