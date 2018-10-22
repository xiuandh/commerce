<template>
  <div id="app">
    <app-header/>
    <router-view></router-view>
  </div>
</template>

<script>
const address = 'http://10.3.137.17:7070'
import AppHeader from './components/page/search/classify'
export default {
  name: 'App',
  components: {
      AppHeader
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
