<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    user: gql`
      query {
        user {
          email
        }
      }
    `
  },
  methods: {
    async onLogout() {
      await this.$apolloHelpers.onLogout()
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<template>
  <li class="dropdown">
    <a href="#" data-toggle="dropdown" class="dropdown-toggle clear">
      <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
        <img src="img/a0.jpg" alt="...">
        <i class="on md b-white bottom"/>
      </span>
      <span class="hidden-sm hidden-md">{{ user.email }}</span>
      <b class="caret"/>
    </a>
    <!-- dropdown -->
    <ul class="dropdown-menu animated fadeInRight w">
      <li class="wrapper b-b m-b-sm bg-light m-t-n-xs">
        <div>
          <p>300mb of 500mb used</p>
        </div>
        <div class="progress progress-xs m-b-none dker">
          <div
            class="progress-bar progress-bar-info"
            data-toggle="tooltip"
            data-original-title="50%"
            style="width: 50%"
          />
        </div>
      </li>
      <li>
        <a href>
          <span class="badge bg-danger pull-right">30%</span>
          <span>Settings</span>
        </a>
      </li>
      <li>
        <a ui-sref="app.page.profile">Profile</a>
      </li>
      <li>
        <a ui-sref="app.docs">
          <span class="label bg-info pull-right">new</span>
          Help
        </a>
      </li>
      <li class="divider"/>
      <li>
        <a @click="onLogout">Logout</a>
      </li>
    </ul>
    <!-- / dropdown -->
  </li>
</template>
