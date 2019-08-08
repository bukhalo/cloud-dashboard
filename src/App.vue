<template>
  <div
    v-if="!$route.meta.requiresAuth"
    class="app app-header-fixed app-aside-fixed"
  >
    <Header></Header>
    <Aside></Aside>
    <div id="content" class="app-content" role="main">
      <ProgressBar></ProgressBar>
      <div class="app-content-body">
        <div class="bg-light lter b-b wrapper-md">
          <h1 class="m-n font-thin h3">{{ this.$route.name }}</h1>
        </div>
        <div class="wrapper-md ng-scope">
          <router-view />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
  <div v-else class="app app-header-fixed app-aside-fixed">
    <router-view />
    {{ $route }}
  </div>
</template>

<script>
import "bootstrap";
// import "@/assets/jquery-plugins/ui-load.js";
// import "@/assets/jquery-plugins/ui-jp.config.js";
// import "@/assets/jquery-plugins/ui-jp.js";
import "@/assets/jquery-plugins/ui-nav.js";
import "@/assets/jquery-plugins/ui-toggle.js";
// import "@/assets/jquery-plugins/ui-client.js";

import Header from "@/components/layout/Header";
import Aside from "@/components/layout/Aside";
import Footer from "@/components/layout/Footer";
import ProgressBar from "@/components/common/ProgressBar";

export default {
  components: {
    Header,
    Aside,
    Footer,
    ProgressBar
  }
};
</script>

<style lang="scss">
@import "assets/styles/font-awesome.css";
@import "assets/styles/simple-line-icons.css";
@import "assets/styles/font.scss";
@import "~bootstrap/dist/css/bootstrap.css";
@import "assets/styles/app.css";
</style>
