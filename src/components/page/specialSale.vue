<template>
    <div>
        <p class="shangxin"><i>aa</i><b>每日9点上新</b></p>
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
    .shangxin{font-size:12px;}
    .shangxin i{color:#f00;}
    .special{margin-top:10px;font-size:12px;}
    .special img{width:100%;height: 350px;}
    .special .info{width: 100%;height: 40px;background-color: #fff;line-height: 40px;padding:0 5px;}
    .sale,.title{float:left;}
    .sale{color:#f00;}
    .tianshu{float:right;color:#ddd;}

</style>