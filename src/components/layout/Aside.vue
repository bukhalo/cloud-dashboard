<script>
import Projects from "@/components/aside/Projects";
import Manage from "@/components/aside/Manage";
export default {
  components: {
    Projects,
    Manage
  }
};
</script>

<template>
  <aside id="aside" class="app-aside hidden-xs bg-white b-r">
    <div class="aside-wrap">
      <div class="navi-wrap">
        <!-- user -->
        <div class="clearfix hidden-xs text-center hide" id="aside-user">
          <div class="dropdown wrapper">
            <a href="app.page.profile">
              <span class="thumb-lg w-auto-folded avatar m-t-sm">
                <img src="img/a0.jpg" class="img-full" alt="...">
              </span>
            </a>
            <a href="#" data-toggle="dropdown" class="dropdown-toggle hidden-folded">
              <span class="clear">
                <span class="block m-t-sm">
                  <strong class="font-bold text-lt">John.Smith</strong>
                  <b class="caret"></b>
                </span>
                <span class="text-muted text-xs block">Art Director</span>
              </span>
            </a>
            <!-- dropdown -->
            <ul class="dropdown-menu animated fadeInRight w hidden-folded">
              <li class="wrapper b-b m-b-sm bg-info m-t-n-xs">
                <span class="arrow top hidden-folded arrow-info"></span>
                <div>
                  <p>300mb of 500mb used</p>
                </div>
                <div class="progress progress-xs m-b-none dker">
                  <div
                    class="progress-bar bg-white"
                    data-toggle="tooltip"
                    data-original-title="50%"
                    style="width: 50%"
                  ></div>
                </div>
              </li>
              <li>
                <a href>Settings</a>
              </li>
              <li>
                <a href="page_profile.html">Profile</a>
              </li>
              <li>
                <a href>
                  <span class="badge bg-danger pull-right">3</span>
                  Notifications
                </a>
              </li>
              <li class="divider"></li>
              <li>
                <a href="page_signin.html">Logout</a>
              </li>
            </ul>
            <!-- / dropdown -->
          </div>
          <div class="line dk hidden-folded"></div>
        </div>
        <!-- / user -->
        <!-- nav -->
        <nav ui-nav class="navi clearfix">
          <ul class="nav">
            <Projects></Projects>
            <li class="line dk"></li>
            <Manage></Manage>
            <li class="line dk hidden-folded"></li>

            <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
              <span>Your Stuff</span>
            </li>
            <li>
              <a href="page_profile.html">
                <i class="icon-user icon text-success-lter"></i>
                <b class="badge bg-success pull-right">30%</b>
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href>
                <i class="icon-question icon"></i>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </nav>
        <!-- nav -->
        <!-- aside footer -->
        <div class="wrapper m-t">
          <div class="text-center-folded">
            <span class="pull-right pull-none-folded">60%</span>
            <span class="hidden-folded">Milestone</span>
          </div>
          <div class="progress progress-xxs m-t-sm dk">
            <div class="progress-bar progress-bar-info" style="width: 60%;"></div>
          </div>
          <div class="text-center-folded">
            <span class="pull-right pull-none-folded">35%</span>
            <span class="hidden-folded">Release</span>
          </div>
          <div class="progress progress-xxs m-t-sm dk">
            <div class="progress-bar progress-bar-primary" style="width: 35%;"></div>
          </div>
        </div>
        <!-- / aside footer -->
      </div>
    </div>
  </aside>
</template>
