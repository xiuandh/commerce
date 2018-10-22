// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'// 根组件
import router from './router'

//fontawesome图标库
import './sass/main.scss' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser,faSearch, faWindowMinimize,faInfo } from '@fortawesome/free-solid-svg-icons'
library.add(faUser,faSearch,faWindowMinimize,faInfo)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

import Mint from 'mint-ui'
Vue.use(Mint)
//引入mint-ui的样式
import 'mint-ui/lib/style.css'

//引入axios
import axios from 'axios'
Vue.prototype.$http = axios

//引入正在加载的动图
import { Indicator } from 'mint-ui'
Vue.prototype.$loading = Indicator

Vue.config.productionTip = false

// 引入轮播图
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
