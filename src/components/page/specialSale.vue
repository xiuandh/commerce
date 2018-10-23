<template>
    <div>
        <p class="shangxin"><font-awesome-icon icon="home" class="icon"/><b>每日9点上新</b></p>
        <ul class="special">
            <li v-for="tab in tabs" :key="tab.id">
                <img :src="tab.url" />
                <p class="info">
                    <span class="sale">{{tab.sale}}折起</span>
                    <span class="title">{{tab.title}}</span>
                    <span class="tianshu">剩{{tab.tianshu}}天</span>
                </p>
            </li>
        </ul>

    </div>

</template>

<script>
   export default {
        data(){
            return {
                tabs:[
                    {
                        id:1,
                        url:'../../static/images/2.jpg',
                        sale:'2.2',
                        title:'贝贝怡品质舒适童装',
                        tianshu:2
                    },
                    {
                        id:2,
                        url:'../../static/images/2.jpg',
                        sale:'2.2',
                        title:'贝贝怡品质舒适童装',
                        tianshu:2
                    },
                    {
                        id:3,
                        url:'../../static/images/2.jpg',
                        sale:'2.2',
                        title:'贝贝怡品质舒适童装',
                        tianshu:2
                    },
                    {
                        id:4,
                        url:'../../static/images/2.jpg',
                        sale:'2.2',
                        title:'贝贝怡品质舒适童装',
                        tianshu:2
                    },
                    {
                        id:5,
                        url:'../../static/images/2.jpg',
                        sale:'2.2',
                        title:'贝贝怡品质舒适童装',
                        tianshu:2
                    }
                ]
            }
        }
    }

</script>
    
<style scoped>
    .shangxin{
     font-size:0.875rem;
     text-align: left;
}
 .shangxin .icon{
     color:#f00;
     margin-right:0.625rem;
}
 .special{
     margin-top:0.625rem;
     font-size:0.875rem;
}
 .special img{
     width:100%;
}
 .special .info{
     width: 100%;
     height: 2.5rem;
     background-color: #fff;
     line-height: 2.5rem;
}
 .sale,.title{
     float:left;
}
 .sale{
     color:#f00;
}
 .tianshu{
     float:right;
     color:#ddd;
}
 
</style>