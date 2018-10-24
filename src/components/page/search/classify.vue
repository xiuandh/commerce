<template>
    <div class="class-list">
        <search></search>
        <div v-for="(list,index) in classList" :key="index">
            <mt-cell :title="list.category_name"></mt-cell>
            <ul >
                <li v-for="(item,idx) in classList[index].subdivision_categorys" :key="idx">
                    <a class="class-img"><img :src="item.img" alt=""></a>
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import global_ from '@/components/Global'
import search from '@/components/common/search_header'
export default {
    
    data(){
        return{
            classList:[],
            pathurl:global_.pathurl,
        }
    },
    components:{
        search
    },
    created(){
        this.$http.get(this.pathurl+'/mizhe/classify').then(res=>{
            this.classList=res.data[0].main_categorys;
        })
    }
}
</script>
<style lang="scss" scoped>
    .class-list{
        .mint-cell{
            text-align:left;
            background-color:#eee;
        }
        ul{
            display:flex;
            flex-wrap: wrap;
            li{
                display:flex;
                flex-direction: column;
                align-items: center;
                width:20%;
                .class-img{
                    display:block;
                    img{
                        width:100%;
                    }
                    p{padding:.625rem;}
                }
            }
        }
    }
</style>


