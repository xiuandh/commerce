<template>
  <div id="app">
    <app-header/>
    <app-test/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/common/header'
import AppTest from './components/page/goodslist.vue'

export default {
  name: 'App',
  components: {
      AppHeader,
      AppTest
 
  }
}
</script>

<style>
body{margin:0}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:16px;
}
</style>
