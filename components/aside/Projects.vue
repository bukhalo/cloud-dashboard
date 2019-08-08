<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    projectCollection: gql`
      {
        projectCollection {
          projectId
          description
        }
      }
    `
  }
}
</script>

<template>
  <div>
    <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
      <span>Projects</span>
    </li>
    <li v-for="(project, key) in projectCollection" :key="key">
      <nuxt-link :to="`/projects/${project.projectId}`" @click="selectProject(project.projectId)">
        <i class="fa fa-folder icon" />
        <span>{{ project.description || project.projectId }}</span>
      </nuxt-link>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-plus icon text-success" />
        <span>New projects</span>
      </a>
    </li>
  </div>
</template>
