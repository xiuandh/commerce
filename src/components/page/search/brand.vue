<template>
    <ul class="brand">
        <!-- <mt-index-list> -->
            <!-- <mt-index-section > -->
                <!-- <mt-cell v-for="(brand,index) in brands" :key="index" :title="brand.seller_title"></mt-cell> -->
            <!-- </mt-index-section> -->
        <!-- </mt-index-list> -->
        <li v-for="(brand,index) in brands" :key="index">{{brand.seller_title}}</li>
        
    </ul>
</template>
<script>
export default {
    data(){
        return{
            brands:[]
        }
    },
    created(){
        this.$http.get('http://10.3.137.16:7070/mizhe/pinpai'
        ).then(res=>{
            this.brands= res.data;
            console.log(this.brands)
        })
    }
}
</script>
<style lang="scss" scoped>
    .brand{
        li{
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
    }
</style>

