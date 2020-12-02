import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils'
import Icon from 'vue-svg-icon/Icon.vue' //引入svg插件
// import coverflow from 'vue-coverflow'//引入相册预览插件
import Moment from 'moment';
import 'amfe-flexible'
//初始化样式
import './common/stylus/index.styl'
//全局样式
import './common/style/index.css';


Vue.config.productionTip = false


Vue.component('icon', Icon) //注册svg插件

Vue.use(utils)

Vue.prototype.$moment = Moment
Vue.filter('comverTime',function(data,format){
  return Moment(data).format(format);
});

// Vue.use(coverflow)


import { Image as VanImage, Button, Tab, Tabs, Col, Row, Card, Skeleton, Divider, ImagePreview } from 'vant';
Vue.use(Button)
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Card);
Vue.use(Skeleton);
Vue.use(Divider);
Vue.use(ImagePreview);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
