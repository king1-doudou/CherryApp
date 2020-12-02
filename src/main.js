import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'
import Icon from 'vue-svg-icon/Icon.vue' //引入svg插件
import 'amfe-flexible'
//初始化样式
import './common/stylus/index.styl'
//全局样式
import './common/style/index.css';


Vue.config.productionTip = false


Vue.component('icon', Icon) //注册svg插件
Vue.use(utils)


import { Button, Tab, Tabs } from 'vant';
Vue.use(Button)
Vue.use(Tab);
Vue.use(Tabs);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
