<template>
    <div class="classList">
        <div v-for="(list,index) in classList" :key="index">
            <mt-cell :title="list.category_name"></mt-cell>
            <ul >
                <li v-for="(item,idx) in list.subdivsion_categorys" :key="idx">
                    <span class=""><img :src="item.img" alt=""></span>
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            classList:[],

        }
    },
    created(){
        this.$http.get('http://10.3.137.17:7070/mizhe/classify').then(res=>{
            this.classList=res.data[0].main_categorys;
            console.log(this.classList)
        })
    }
}
</script>
<style lang="scss" scoped>

</style>


