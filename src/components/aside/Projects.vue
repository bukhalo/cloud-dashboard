<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  beforeMount() {
    this.get();
  },
  methods: {
    ...mapActions({
      get: "projects/get",
      getInstances: "instances/get"
    }),
    ...mapMutations({
      setActive: "projects/setActive"
    }),
    selectProject(id) {
      this.setActive(id);
      this.getInstances();
    }
  },
  computed: {
    ...mapGetters({
      projects: "projects/projects"
    })
  }
};
</script>

<template>
  <div>
    <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
      <span>Проекты</span>
    </li>
    <li v-for="(project, key) in projects" :key="key">
      <a href="#" @click="selectProject(project.project_id)">
        <i class="fa fa-folder icon"></i>
        <span>{{ project.description }}</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-plus icon text-success"></i>
        <span>Новый проект</span>
      </a>
    </li>
  </div>
</template>
