<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["instances/get"])
  },
  computed: {
    ...mapGetters({
      instances: "instances/projects"
    })
  }
};
</script>

<template>
  <div>
    <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
      <span>Управление</span>
    </li>
    <li>
      <router-link to="/instances" class="auto">
        <i class="glyphicon glyphicon-th"></i>
        <span>Инстансы</span>
      </router-link>
    </li>
  </div>
</template>
