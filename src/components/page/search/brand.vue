<template>
    <div class="brand">
        <mt-index-list v-for="">
            <mt-index-section index="A">
                <mt-cell title="Aaron"></mt-cell>
                <mt-cell title="Alden"></mt-cell>
                <mt-cell title="Austin"></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>
export default {
    data(){
        return{
            brands:[]
        }
    },
    created(){
        this.$http.get('',{
            params:[]
        }).then(res=>{
            console.log(res)
        })
    }
}
</script>
<style lang="scss" scoped>

</style>

