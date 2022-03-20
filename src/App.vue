<template>
  <div id="app">
    <div class="main">
      <div class="left-menu">
        <Menu />
      </div>
      <div class="right-content main-panel">
        <div class="header"><Header /></div>
        <div class="view"><router-view></router-view></div>
        <div class="footer"><Footer /></div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Footer
  }
}
</script>

<style>
  @import './assets/styles/global.css';
</style>