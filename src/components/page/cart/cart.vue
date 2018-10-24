<template>
    <div class="cart">
        <div class="cars">
            <mt-cell title="居家百货专营店">
                <span>编辑</span>
                <input type="checkbox" value="test" name="btn" slot="icon">
            </mt-cell>
            <ul class="goods">
                <li v-for="item in goodsList" :key="item.id">
                    <div class="good-input"><input type="checkbox" ></div>   
                    <div class="good">
                        <a href=""><img :src="item.img" alt=""></a>
                        <div class="good-info">
                            <p class="title-info">{{item.title}}</p>
                            <div class="good-price">
                                <span class="price-info">￥{{item.price*0.1000}}</span>
                                <p class="btns">
                                    <span>-</span>
                                    <span>3</span>
                                    <span>+</span>
                                </p>
                            </div>
                            
                        </div>
                        <span class="remove">x</span>
                    </div>
                    
                </li>
            </ul>

        </div>
        <!-- 底部结算栏 -->
        <div class="acount">
            <p class="acount-input">
                <input type="checkbox">
                <span>全选</span>
            </p>
            <div class="setting"> 
                <p class="actual-price">总计：<span>￥<em>3777.00</em></span></p>
                <p class="discount">立减：<span>￥<em>0.00</em></span></p>
            </div>
            <button>结算(<em>2</em>)</button>
        </div>
        <!-- 点击删除弹出窗口 -->
        <!-- <mt-popup
            v-model="popupVisible"
            position="bottom">
        </mt-popup> -->
    </div>
</template>
<script>
import pathurl from '@/components/Global'

export default {
    
    data(){
        return {
            pathurl:pathurl.pathurl,
            goodsList:[]
        }
    },
    created(){
        this.$http.get(this.pathurl+'/mizhe/nvzhuang').then(res=>{
            this.goodsList = res.data
            console.log(this.goodsList)
        })
    }
}
</script>
<style lang="scss" scoped>
.cart{
    .mint-cell{
        text-align:left;
    }
    .goods{
        display: flex;
        flex-direction: column;
        position: relative;
        top: 40px;
        li{
            display:flex;
            align-items: center;
            .good-input{
                width:10%;
            }
            .good{
                display:flex;
                width:90%;
                align-items:center;
                a{
                    width:20%;
                    img{width:100%;}
                }
                .good-info{
                    display: flex;
                    width: 70%;
                    flex-direction: column;
                    .title-info{font-size:.75rem;}
                    .good-price{
                        display:flex;
                        justify-content: space-around;
                        .price-info{color:#f00;}
                        .btns{
                            margin: 0;
                            display: flex;
                            justify-content: space-between;
                            span{
                                width: 20px;
                                display: block;
                                height: 20px;
                                background-color: #fff;
                                margin-left: 4px;
                            }
                        }
                    }
                }
                .remove{
                    width: 10%;
                    color: #333;
                }
            }
            
        }
    }
    .acount{
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        .acount-input{
            width:20%;
            span{
                margin-left:.25rem;
            }
        }
        .setting{
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            p{
                margin:0;
                text-align:right;
                em{
                    font-style: normal;
                }
            }
            .actual-price{color:#f00;font-size:.875rem;}
            .discount{color:#333;font-size:.75rem;}
        }
        button{
            width:20%;
            background-color:#f00;
            color:#fff;
        }
    }
}
</style>

