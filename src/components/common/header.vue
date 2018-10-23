<template>
    <div class="header">
        <mt-header fixed :title="title">
            <router-link to="/personal" slot="left" solt="test1">
                <font-awesome-icon icon="user" />
            </router-link>
            <font-awesome-icon icon="search" slot="right" />
        </mt-header>
        <mynav></mynav>
        <!-- <mt-navbar  fixed style="marginTop:40px;">
            <mt-tab-item v-for="bar in bars" :key="bar.id" :id="bar.id" @click.native="goto(bar.to)">{{bar.title}}</mt-tab-item>
        </mt-navbar> -->
        <!-- <ul class="top-ul">
            <li v-for="bar in bars" :key="bar.id" ><router-link tag="span" :to='bar.to'><span :class='{active:bar.id==currentIdx}' ref="html" @click="goto(bar)">{{bar.title}}</span></router-link></li>
        </ul> -->
    </div>
</template>

<script>
import Vue from 'vue'
import mynav from '@/components/common/nav.vue'
export default {
    data(){
        return {
            title:'米折',
            currentIdx:1,
            bars:[
                {title:'上新',to:'/new',id:1},
                {title:'女装',to:'/womenclothes',id:2},
                {title:'鞋包',to:'/shoebag',id:3},
                {title:'居家',to:'/livehome',id:4},
                {title:'美妆',to:'/beauty',id:5},
                {title:'童装',to:'/childclothes',id:6},
                {title:'母婴',to:'/momson',id:7},
            ]
        }
    },
    components:{
        mynav
    },
    methods:{
        goto(bar){
            this.currentIdx=bar.id;
            if(bar.id==1){
                this.title = '米折'
            }else{
                this.title= bar.title
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    background-color: #eee;
    height:100%;
    .mint-header{
        height: 3.125rem;
        background-color:#f9f9f9;
        color:#333;
        svg{color:#333;}
    }
    
}
    
</style>


