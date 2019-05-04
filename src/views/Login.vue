<script>
import axios from "axios";
import Cookies from "js-cookie";
import router from "@/router";
import * as AWS from "aws-sdk/global";
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool
} from "amazon-cognito-identity-js";

const userPool = new CognitoUserPool({
  UserPoolId: "eu-central-1_umh3nvb5V", // Your user pool id here
  ClientId: "4qqbaiev4qc3ff550kf9orulno" // Your client id here
});

export default {
  data: () => ({
    formData: {
      username: "",
      password: ""
    },
    error: {}
  }),
  methods: {
    async login() {
      try {
        const authenticationDetails = new AuthenticationDetails({
          Username: this.formData.username,
          Password: this.formData.password
        });
        const cognitoUser = new CognitoUser({
          Username: this.formData.username,
          Pool: userPool
        });
        cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: function(result) {
            console.log(
              "access token + " + result.getAccessToken().getJwtToken()
            );
            console.log("id token + " + result.getIdToken().getJwtToken());
            console.log(
              "refresh token + " + result.getRefreshToken().getToken()
            );
          },
          onFailure: function(err) {
            console.log(err);
          }
        });
        const req = await axios.get("https://api.cloud.robotmafia.io/billing", {
          params: {
            out: "bjson",
            func: "auth",
            username: this.formData.username,
            password: this.formData.password
          }
        });
        if (!req.data.error) {
          const oneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
          Cookies.set("sid", req.data.model.auth, {
            expires: oneHour,
            path: ""
          });
          router.push("/");
        } else {
          this.error = req.data.error;
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>

<template>
  <div
    class="container w-xxl w-auto-xs"
    ng-controller="SigninFormController"
    ng-init="app.settings.container = false;"
  >
    <a href class="navbar-brand block m-t">Angulr</a>
    <div class="m-b-lg">
      <div class="wrapper text-center">
        <strong>Sign in to get in touch</strong>
      </div>
      <form name="form" class="form-validation" @submit.prevent="login">
        <div class="text-danger wrapper text-center" v-if="error">
          {{ error.msg }}
        </div>
        <div class="list-group list-group-sm">
          <div class="list-group-item">
            <input
              type="email"
              placeholder="Email"
              class="form-control no-border"
              v-model="formData.username"
              required
            />
          </div>
          <div class="list-group-item">
            <input
              type="password"
              placeholder="Password"
              class="form-control no-border"
              v-model="formData.password"
              required
            />
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
        <div class="line line-dashed"></div>
        <p class="text-center">
          <small>Do not have an account?</small>
        </p>
        <a ui-sref="access.signup" class="btn btn-lg btn-default btn-block"
          >Create an account</a
        >
      </form>
    </div>
    <div class="text-center" ng-include="'tpl/blocks/page_footer.html'">
      <p>
        <small class="text-muted"
          >Web app framework base on Bootstrap and AngularJS <br />&copy; 2014
        </small>
      </p>
    </div>
  </div>
</template>
