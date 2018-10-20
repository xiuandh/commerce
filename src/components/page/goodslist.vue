<template>
    <div>
        <p class="p1">
            <span class="left"><font-awesome-icon icon="info" class="icon"/>热卖品牌</span>
            <span class="right" @click="goto(id)">更多品牌 &gt;</span>
        </p>
        <ul class="goodslist">
            <li v-for="list in lists" :key="list.id">
                <img :src="list.url" />
                <p class="title">{{list.title}}</p>
                <p class="p2">
                    <span class="price">{{list.price}}</span>
                    <span class="people">{{list.people}}人在抢</span>
                </p>
            </li>
        </ul>
    </div>

</template>

<script>
    import Vue from 'vue';
    

    export default {
        data(){
            return {
                allLoaded:false,
                lists:[
                    {
                        id:1,
                        title:'2018秋季韩版修身毛衣',
                        url:'../../static/images/1.jpg',
                        price:49.8,
                        people:1626
                    },
                    {
                        id:2,
                        title:'2018秋季韩版修身毛衣',
                        url:'../../static/images/1.jpg',
                        price:49.8,
                        people:1626
                    },
                    {
                        id:3,
                        title:'2018秋季韩版修身毛衣',
                        url:'../../static/images/1.jpg',
                        price:49.8,
                        people:1626
                    },
                    {
                        id:4,
                        title:'2018秋季韩版修身毛衣',
                        url:'../../static/images/1.jpg',
                        price:49.8,
                        people:1626
                    },
                    {
                        id:5,
                        title:'2018秋季韩版修身毛衣',
                        url:'../../static/images/1.jpg',
                        price:49.8,
                        people:1626
                    },
                    {
                        id:6,
                        title:'2018秋季韩版修身毛衣',
                        url:'../../static/images/1.jpg',
                        price:49.8,
                        people:1626
                    },
                ]
            }
        },
        methods:{
            goto(id){
                this.$router.push({name:'specialSale',params:{id}});
            }
        }
    }

</script>

<style scoped>
     *{
     list-style: none;
     padding: 0;
     margin: 0;
}
 .p1{
    
     width: 100%;
     height: 3.125rem;
     line-height: 3.125rem;
     display:flex;
     justify-content: space-between;
     margin:3.4375rem 0 0.3125rem 0;
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
     display:flex;
     padding:2%;
     flex-wrap:wrap;
}
 .goodslist li{
     width: 48%;
}
 .goodslist li:nth-child(2n-1){
     margin-right:3%;
}
 .goodslist img{
     width: 100%;
     height: 9.0625rem;
}
 .goodslist .title{
     padding:0 0.125rem;
     overflow:hidden;
     font-size: 0.75rem;
}
 .goodslist .p2{
     display:flex;
     justify-content: space-between;
     padding:0.3125rem 0 0.5rem 0;
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