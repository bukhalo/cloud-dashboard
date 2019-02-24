<script>
import { mapActions } from "vuex";

import InstancesList from "@/components/instances/InstancesList";

export default {
  beforeMount() {
    this.getInstances();
  },
  methods: {
    ...mapActions({
      getInstances: "instances/get"
    })
  },
  components: {
    InstancesList
  }
};
</script>

<template>
  <InstancesList></InstancesList>
</template>
