import Vue from 'vue'
import Router from 'vue-router'
import newup from '@/components/page/newup'
import nvzhuang from '@/components/page/nvzhuang'
import xiebao from '@/components/page/xiebao'
import jujia from '@/components/page/jujia'
import meizhuang from '@/components/page/meizhuang'
import tongzhuang from '@/components/page/tongzhuang'
import muying from '@/components/page/muying'
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
      component:newup,
      name:'newup'
    },
    {
      path:'/personal',
      component:personal,
      name:'personal'
    },
    {
      path:'/xiebao',
      component:xiebao,
      name:'xiebao'
    },
    {
      path:'/jujia',
      component:jujia,
      name:'jujia'
    },
    {
      path:'/meizhuang',
      component:meizhuang,
      name:'meizhuang'
    },
    {
      path:'/tongzhuang',
      component:tongzhuang,
      name:'tongzhuang'
    },
    {
      path:'/muying',
      component:muying,
      name:'muying'
    },
    {
      path:'/nvzhuang',
      component:nvzhuang,
      name:'nvzhuang'
    }
  ]
})
