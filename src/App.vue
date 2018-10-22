<template>
  <div id="app">
    <app-header/>
    <app-test/>
    <app-tests/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/common/header'
import AppTest from './components/page/goodslist'
import AppTests from './components/page/specialSale'

export default {
  name: 'App',
  components: {
      AppHeader,
      AppTest,
      AppTests
 
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
