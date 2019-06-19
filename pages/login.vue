<script>
import gql from 'graphql-tag'

export default {
  layout: 'auth',
  data: () => ({
    formData: {
      username: '',
      password: ''
    },
    errors: []
  }),
  methods: {
    async login() {
      this.errors = []
      try {
        await this.$apollo.mutate({
          mutation: gql`
            mutation($username: String!, $password: String!) {
              user {
                logIn(username: $username, password: $password) {
                  sid
                }
              }
            }
          `,
          variables: {
            username: this.formData.username,
            password: this.formData.password
          }
        })
        this.$router.push({ path: '/dashboard' })
      } catch (e) {
        this.errors = e.graphQLErrors
      }
    }
  }
}
</script>


<template>
  <div class="container w-xxl w-auto-xs">
    <a href class="navbar-brand block m-t">Angulr</a>
    <div class="m-b-lg">
      <div class="wrapper text-center">
        <strong>Sign in to get in touch</strong>
      </div>
      <form name="form" class="form-validation" @submit.prevent="login">
        <div v-if="errors" class="text-danger wrapper text-center">
            <p v-for="(error, key) in errors" v-bind:key="key">{{ error.message }}</p>
        </div>
        <div class="list-group list-group-sm">
          <div class="list-group-item">
            <input
              v-model="formData.username"
              type="text"
              placeholder="Email"
              class="form-control no-border"
              required
            >
          </div>
          <div class="list-group-item">
            <input
              v-model="formData.password"
              type="password"
              placeholder="Password"
              class="form-control no-border"
              required
            >
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-lg btn-primary btn-block"
          ng-click="login()"
          ng-disabled="form.$invalid"
        >
Log in
</button>
        <div class="text-center m-t m-b">
          <a ui-sref="access.forgotpwd">Forgot password?</a>
        </div>
        <div class="line line-dashed" />
        <p class="text-center">
          <small>Do not have an account?</small>
        </p>
        <nuxt-link to="/signup" class="btn btn-lg btn-default btn-block">
Create an account
</nuxt-link>
      </form>
    </div>
    <div class="text-center" ng-include="'tpl/blocks/page_footer.html'">
      <p>
        <small class="text-muted">Web app framework base on Bootstrap and AngularJS
          <br>&copy; 2014
        </small>
      </p>
    </div>
  </div>
</template>
