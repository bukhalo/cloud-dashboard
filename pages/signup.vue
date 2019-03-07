<script>
import consola from 'consola'
export default {
  layout: 'auth',
  middleware: 'auth',
  data: () => ({
    formData: {
      realname: '',
      email: '',
      password: ''
    },
    error: {}
  }),
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/billing', {
      params: {
        show_metadata: 'on',
        newface: 'on',
        out: 'bjson',
        func: 'register'
      }
    })
    return { data: data }
  },
  methods: {
    async signup() {
      try {
        await this.$axios.$post('/api/auth/signup', {
          realname: this.formData.realname,
          email: this.formData.email,
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
  <div
    class="container w-xxl w-auto-xs"
    ng-controller="SignupFormController"
    ng-init="app.settings.container = false;"
  >
    <a href class="navbar-brand block m-t">Angulr</a>
    <div class="m-b-lg">
      <div class="wrapper text-center">
        <strong>Sign up to find interesting thing</strong>
      </div>
      <form name="form" class="form-validation" @submit.prevent="signup">
        <div v-if="error" class="text-danger wrapper text-center">
{{ error.msg }}
</div>
        <div class="list-group list-group-sm">
          <div class="list-group-item">
            <input v-model="formData.realname" placeholder="Name" class="form-control no-border">
          </div>
          <div class="list-group-item">
            <input
              v-model="formData.email"
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
        <div class="checkbox m-b-md m-t-none">
          <label class="i-checks">
            <input type="checkbox" ng-model="agree" required>
            <i /> Agree the
            <a href>terms and policy</a>
          </label>
        </div>
        <button
          type="submit"
          class="btn btn-lg btn-primary btn-block"
          ng-disabled="form.$invalid"
        >
Sign up
</button>
        <div class="line line-dashed" />
        <p class="text-center">
          <small>Already have an account?</small>
        </p>
        <nuxt-link to="/login" class="btn btn-lg btn-default btn-block">
Sign in
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
