import Vue from "vue";
import Vuex from "vuex";
import projects from "@/store/projects";
import instances from "@/store/instances";
import images from "@/store/images";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    projects: projects,
    instances: instances,
    images: images
  }
});
