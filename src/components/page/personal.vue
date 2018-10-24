<template>
    <div>
        <myheader></myheader>
        <div class="personal">
            <div class="background">
                <button>立即登录</button>
                <button>新人注册</button>
            </div>
            <div class="padding">
                <mt-cell title="全部订单" to="">
                    <span>></span>
                    <font-awesome-icon icon="folder" slot="icon"/>
                </mt-cell>
                <mt-tabbar >
                    <mt-tab-item :id="item.id" v-for="(item,index) in orders" :key="index">
                        <font-awesome-icon :icon="item.icon" slot="icon"/>
                        {{item.title}}
                    </mt-tab-item>
                </mt-tabbar>
            </div>
            
            <div class="padding">
                <mt-cell title="我的钱包" to="">
                    <font-awesome-icon icon="wallet" slot="icon"/>
                </mt-cell>
                <mt-tabbar >
                    <mt-tab-item :id="bar.id" v-for="(bar,idx) in carts" :key="idx">
                        <span>{{bar.money}}</span>
                        {{bar.title}}
                    </mt-tab-item>
                </mt-tabbar>
            </div>
            
            <div class="padding">
                <mt-cell v-for="(list,index) in lists" :title="list.title" to="" :key="index">
                    <span>></span>
                    <font-awesome-icon :icon="list.icon" slot="icon"/>
                </mt-cell>
            </div>
            
        </div>
    </div>
</template>

<script>
import myheader from '@/components/common/top'
export default {
    data(){
        return {
            orders:[
                {id:'payment',icon:'hands-helping',title:'待付款'},
                {id:'shipments',icon:'hourglass',title:'待发货'},
                {id:'order',icon:'shopping-cart',title:'待收货'},
                {id:'comment',icon:'edit',title:'待评价'},
                {id:'mine',icon:'smile',title:'我的售后'}
            ],
            carts:[
                {id:'moneycard',money:0,title:'现金卷'},
                {id:'bags',money:0,title:'品牌红包'},
                {id:'mitcoin',money:0,title:'米币'},
                {id:'balance',money:0.00,title:'余额'},
            ],
            lists:[
                {id:'address',icon:'map-marker-alt',title:'我的收货地址'},
                {id:'love',icon:'heart',title:'我的收藏'},
                {id:'contact',icon:'headset',title:'联系客服'},
            ]
        }
    },
    components:{
        myheader
    },
}
</script>
<style lang="scss" scoped>
    .personal{
        background-color:#eee;
        top: 40px;
        position: relative;
        .mint-cell{
             text-align:left;
        }                                        
        
        .padding{
            padding-top:10px;
            .mint-tabbar{
                position:relative;
                .mint-tab-item{
                    .mint-tab-item-label{
                        border-right:1px solid #ddd;
                        span{
                            display: block;
                            color: #fe9815;
                            margin: .375rem;
                        }
                    }
                }
            }
        }
        .background{
            min-height:6rem;
            background-color:#fe9815;
            display:flex;
            justify-content: space-around;
            align-items: center;
            button{padding:.25rem;margin:0;}
            button:first-child{
                background-color:#fff;
                color:#fe9815;
            }
            button:last-child{
                background-color:#fe9815;
                color:#fff;
                border-color:#fff;
            }
        }
    }
</style>

