<template>
    <ul class="top-ul">
        <li v-for="bar in bars" :key="bar.id" ><span :class='{active:bar.id==currentIdx}' ref="html" @click="goto(bar)">{{bar.title}}</span></li>
    </ul>
</template>
<script>
export default {
    data(){
        return {
            currentIdx:1,
            title:'上新',
            bars:[
                {title:'上新',to:'newup',id:1},
                {title:'女装',to:'nvzhuang',id:2},
                {title:'鞋包',to:'xiebao',id:3},
                {title:'居家',to:'jujia',id:4},
                {title:'美妆',to:'meizhuang',id:5},
                {title:'童装',to:'tongzhuang',id:6},
                {title:'母婴',to:'muying',id:7},
            ]
        }
    },
    methods:{
        goto(bar){
            this.currentIdx=bar.id;
            if(bar.id==1){
                this.title = '米折'
            }else{
                this.title= bar.title
                }
                
            this.$router.push({
               name:bar.to,
               params:{pathname:bar.to}
           }) 
        }
        
    }
}
</script>
<style lang="scss" scoped>
  .top-ul{
    background: #fff;;
    width: 100%;
    font-size:1rem;
    display:flex;
    justify-content: space-around;
    position:fixed;
    height: 2.5rem;
    line-height: 2.5rem;
    top:3.125rem;
    border-bottom:1px solid #ddd;
    flex:1;
    z-index: 100;
    li{
        span{
            color:#333;
            padding-bottom:.300rem;
            border-bottom:1px solid #fff;
        }
        .active{
            color:#ff3c00;
            border-bottom:1px solid #ff3c00;
        }
    }
    }
</style>

