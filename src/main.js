import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Amplify from "aws-amplify";
// import { components } from "aws-amplify-vue";

// Amplify.configure({
//   //aws_cognito_region: "eu-central-1",
//   //aws_user_pools_id: "eu-central-1_umh3nvb5V",
//   //aws_user_pools_web_client_id: "5r8bn3kvrsqil4e80jdrd0eihs"
//   Auth: {
//     identityPoolId: "eu-central-1:f96231b1-4e0a-4e73-890d-10043862d094",
//     region: "eu-central-1",
//     userPoolId: "eu-central-1_umh3nvb5V",
//     userPoolWebClientId: "2o9ch70r7enk4q712s0ikjii5f"
//   }
// });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
  // components: {
  //   ...components
  // }
}).$mount("#app");
