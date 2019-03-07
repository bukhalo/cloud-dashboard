<script>
export default {}
</script>

<template>
  <div>
    <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
      <span>Проекты</span>
    </li>
    <li v-for="(project, key) in projects" :key="key">
      <a href="#" @click="selectProject(project.project_id)">
        <i class="fa fa-folder icon" />
        <span>{{ project.description }}</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-plus icon text-success" />
        <span>Новый проект</span>
      </a>
    </li>
  </div>
</template>
