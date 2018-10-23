<template>
    <div class="goodsitem">
        <myheader></myheader>
        <p class="p1">
            <span class="left"><font-awesome-icon icon="info" class="icon"/>热卖品牌</span>
            <span class="right" @click="goto(id)">更多品牌 &gt;</span>
        </p>
        <ul class="goodslist">
            <li v-for="list in lists" :key="list.iid">
                <img :src="list.img" />
                <p class="title">{{list.title}}</p>
                <p class="p2">
                    <span class="price">{{list.price/100}}</span>
                    <span class="people">{{list.clicks}}人在抢</span>
                </p>
            </li>
        </ul>
    </div>

</template>

<script>
    import Vue from 'vue';
    import myheader from '@/components/common/header'
    import global_ from '@/components/Global'
    export default {
        data(){
            return {
                allLoaded:false,
                lists:[
              
                ],
                pathurl:global_.pathurl
            }
        },
        components:{
            myheader
        },
        methods:{
            goto(id){
                this.$router.push({name:'specialSale',params:{id}});
            },
            getlists() {
                
                this.$http.get(this.pathurl+'/mizhe/newup').then(
                    res=>{
                        console.log(res)
                        this.lists = res.data;
                    }

                    )


            }
        },
        created() {
            this.getlists()
        }
    }

</script>

<style scoped>
     *{
     list-style: none;
     padding: 0;
     margin: 0;
}
.goodsitem{
    margin-top: 5.625rem;
    padding-top: .3125rem;
}
 .p1{
    /* box-sizing: border-box; */
    /* width: 100%; */
    height: 2.5rem;
    margin: .3125rem 0 ;
    line-height: 2.5rem;
    display:flex;
    justify-content: space-between;
    background: #fff;
    padding: 0 .625rem;
}
 .p1 .icon{
     color:#f00;
     margin-right:0.625rem;
}
 .p1 .right{
     font-size: 0.75rem;
     padding-right:0.625rem;
}
 .goodslist{
     /* display:flex; */
     /*padding:2%;*/
     /* flex-wrap:wrap; */
     /* width: 100%; */
     /* box-sizing: border-box; */
     padding: .3125rem;
}
 .goodslist li{
     display: inline-block;
     box-sizing: border-box;
     width: 50%;
     padding: .3125rem;
}
 /* .goodslist li:nth-child(2n-1){
     margin-right:2%;
} */
 .goodslist img{
     width: 100%;
    
}
 .goodslist .title{
     padding:0 0.125rem;
     white-space:nowrap;
     overflow:hidden;
     text-overflow: ellipsis;
     font-size: 0.75rem;
     background: #fff;
}
 .goodslist .p2{
     display:flex;
     justify-content: space-between;
     padding:0.3125rem 0 0.5rem 0;
     background-color: #fff;
}
 .goodslist .price{
     color:#f00;
     font-size:1rem;
}
 .goodslist .price::before{
     content:"￥";
}
 .goodslist .people{
     font-size:0.625rem;
}
 .mint-loadmore{
     overflow-y:auto;
}
 
</style>