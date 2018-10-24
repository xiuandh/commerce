<template>
    <div class="header">
        <mt-header fixed :title="title">
            <font-awesome-icon icon="arrow-left" slot="left"/>
            <router-link to="/home" slot="right">
                <font-awesome-icon icon="home"  />
            </router-link>
        </mt-header>
        <!-- <nav-top></nav-top> -->
    </div>
</template>
<script>
import Vue from 'vue'
// import nav from './nav.vue'
// Vue.component('nav-top',nav)
export default {
    data(){
        return {
            title:'上新'
        }
    },
}
</script>
<style lang="scss" scoped>
.header{
    background-color: #eee;
    height:100%;
    .mint-header{
        background-color:#f9f9f9;
        color:#333;
        svg{color:#333;}
    }
}
</style>

