<template>
    <div class="details">
        <div v-for="item in items" :key="item.id" class="info">
            <img :src="item.url"/>
            <div class="left">
                <p class="title"><span class="count">限{{item.count}}件/今日秒杀</span>{{item.title}}</p>
                <p class="title2">{{item.title}}</p>
            </div>
            <div class="right">
                <i class="fa heart">aa</i>
                <span>收藏</span>
            </div>
            <div class="xianliang">
                <span class="gou">限量购</span>
                <span class="sale">{{item.sale}}</span>
                <del class="price">{{item.price}}</del>
                <span class="btn">1.9折</span>
                <span class="btn">包邮</span>
            </div>
            <div class="dikou"> 
                <span class="mizhe">米折抵扣20%</span>
                <span>可用现金券</span>
            </div>
            <div class="color">
                <h4>颜色</h4>
                <ul>
                    <li>黑色单里</li>
                    <li>黑色单里</li>
                    <li>黑色单里</li>
                    <li>黑色单里</li>
                    <li>黑色单里</li>
                    <li>黑色单里</li>
                    <li>黑色单里</li>
                </ul>
            </div>
        </div>

        

       
    </div>
</template>

<script>
   export default {
        data(){
            return {
                items:[
                    {
                        id:1,
                        url:"../../static/images/3.jpg",
                        title:'唯品丹妮2018韩版新款英伦及角度是干干净净哈试图划科粗跟裸靴',
                        count:500,
                        price:189,
                        sale:35.8
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    *{margin: 0;padding: 0;}
  

    img {width: 100%; margin-bottom:5px;}
    .info{clear:both;}
    .left{width: 75%;text-align: left;}
    .title .count{color:#f00;}
    .title2{color:grey;margin-top:5px;}
    .right{float:right;width: 15%;font-size: 10px;padding-right:8px;border-left:1px solid grey;padding-left:5px;}
    .right i,.right span{display: block;}
    .left,.xianliang,.dikou,.color{float:left;padding-left:8px;font-size:10px;}
    .gou{color:#f00;}
    .sale{color:#f00;font-size: 26px;}

    .sale::before{
        content:"￥";
    }
    .btn{font-size: 10px;color:#fff;background-color: #f00;}
    .dikou{width: 100%;background-color: #eee;height: 35px;line-height:40px;text-align: left;}
    .dikou .mizhe{margin-right:10px;}
    .color ul{display:flex;flex-wrap:wrap;justify-content: space-around;}
    .color h4{text-align: left;line-height: 40px;height:40px;font-size:14px;padding-left:5px;}
    .color ul li{border:1px solid #ddd;width: 27%;height: 30px;line-height: 30px;text-align: center;margin:5px;}
</style>