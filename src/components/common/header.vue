<template>
    <div class="header">
        <mt-header fixed title="米折">
            <router-link to="/" slot="left">
                <font-awesome-icon icon="user" />
            </router-link>
            <font-awesome-icon icon="search" slot="right"/>
        </mt-header>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    data(){
        return {
            selected:'1',
            bars:[
                {title:'上新',to:'new'},
                {title:'女装',to:'womenclothes'},
                {title:'鞋包',to:'shoebag'},
                {title:'居家',to:'livehome'},
                {title:'美妆',to:'beauty'},
                {title:'童装',to:'childclothes'},
                {title:'母婴',to:'momson'},
            ]
        }
    },
    methods:{
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


