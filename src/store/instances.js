import api from "@/plugins/api";

export default {
  state: {
    instances: [],
    created: null
  },
  mutations: {
    set(state, payload) {
      state.instances = payload;
    },
    create(state, payload) {
      state.created = payload;
    }
  },
  actions: {
    async get({ commit, rootState }) {
      const projectId = rootState.projects.projectCurrentId;
      const instancesIds = await api.get(
        `/cloud/project/${projectId}/instance`
      );
      const instances = await instancesIds.data.map(
        async item =>
          await api.get(`/cloud/project/${projectId}/instance/${item.id}`)
      );
      Promise.all(instances).then(res => {
        commit("set", res.map(item => item.data));
      });
    },
    async create({ commit, rootState }) {
      const projectId = rootState.projects.projectCurrentId;
      const instanceCreateRequest = await axios.post(
        `/cloud/project/${projectId}/instance`,
        {
          serviceName: projectId,
          flavorId: "d31419c1-8e1e-48c2-8a4c-28190650c817",
          imageId: "09327fa3-2be1-4c5a-ab50-c40826155048",
          name: "test",
          region: "DE1"
        }
      );
      Promise.all(instanceCreateRequest).then(res => {
        commit("create", res.map(item => item.data));
      });
    },
    async destroy({ commit, rootState }, { instanceId }) {
      const projectId = rootState.projects.projectCurrentId;
      const instanceDestroyRequest = await axios.delete(
        `/cloud/project/${projectId}/instance/${instanceId}`
      );
    }
  },
  getters: {
    instances: state => state.instances
  },
  namespaced: true
};
