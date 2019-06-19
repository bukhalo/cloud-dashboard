<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    instanceCollection: gql`
      {
        instanceCollection(projectId: "f9d9ae14e68e4f53bad2ca852ed87d70") {
          id
          flavorId
        }
      }
    `
  }
}
</script>

<template>
    <div>
        <div v-for="(instance, key) in instanceCollection" v-bind:key="key">{{ instance }}</div>
    </div>
</template>
