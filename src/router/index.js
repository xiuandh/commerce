import Vue from 'vue'
import Router from 'vue-router'
import goodslist from '@/components/page/goodslist'
import personal from '@/components/page/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/newup'
    },
    {
      path:'/newup',
      component:goodslist,
      name:'goodslist'
    },
    {
      path:'/personal',
      component:personal,
      name:'personal'
    }
  ]
})
