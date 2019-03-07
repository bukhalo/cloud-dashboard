<script>
import consola from 'consola'
export default {
  layout: 'auth',
  middleware: 'auth',
  data: () => ({
    formData: {
      username: '',
      password: ''
    },
    error: {}
  }),
  methods: {
    async login() {
      try {
        await this.$axios.$post('/api/auth/login', {
          username: this.formData.username,
          password: this.formData.password
        })
        this.$router.push('/dashboard')
      } catch (e) {
        if (e.response) {
          this.error = e.response.data.error
        }
        consola.error(e)
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
        <div v-if="error" class="text-danger wrapper text-center">
{{ error.msg }}
</div>
        <div class="list-group list-group-sm">
          <div class="list-group-item">
            <input
              v-model="formData.username"
              type="email"
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
