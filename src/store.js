import Vue from "vue";
import Vuex from "vuex";
import projects from "@/store/projects";
import instances from "@/store/instances";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    projects: projects,
    instances: instances
  }
});
