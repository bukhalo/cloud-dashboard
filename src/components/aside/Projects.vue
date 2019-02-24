<script>
import { mapActions, mapGetters } from "vuex";

export default {
  beforeMount() {
    this["projects/get"]();
  },
  methods: {
    ...mapActions(["projects/get"])
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
      <a href="#">
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
