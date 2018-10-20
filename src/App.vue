<template>
  <div id="app">
    <app-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/common/header'
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
