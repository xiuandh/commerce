<template>
    <div class="details">
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(item,idx) in items">{{item.url}}</mt-swipe-item>
         
        </mt-swipe> 
    </div>

</template>

<script>
    export default {
        data(){
            return {
                items[
                    {
                        id:1,
                        url:"../../static/images/3.jpg",
                    },
                    {
                        id:2,
                        url:"../../static/images/4.jpg",
                    }

                ]
            }
        }
    }


</script>

<style scoped>
    


</style>