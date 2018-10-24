<template>
    <div class="header">
        <mt-header fixed title="分类">
            <font-awesome-icon icon="arrow-left" @click="goback" slot="left"/>
            <router-link to="/" slot="right">
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
            title:[
                '分类',
                '品牌'
            ]
        }
    },
    methods:{
        goback() {
            console.log(this)
            this.$router.back()
           
        }
    }
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

