<script>
import Header from '@/components/layout/Header'
import Aside from '@/components/layout/Aside'
import Footer from '@/components/layout/Footer'

export default {
  middleware: ['isAuth'],
  components: {
    Header,
    Aside,
    Footer
  }
}
</script>


<template>
  <div class="app app-header-fixed app-aside-fixed">
    <Header />
    <Aside />
    <div id="content" class="app-content" role="main">
      <div class="app-content-body">
        <div class="bg-light lter b-b wrapper-md">
          <h1 class="m-n font-thin h3" />
        </div>
        <div class="wrapper-md ng-scope">
          <router-view />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
