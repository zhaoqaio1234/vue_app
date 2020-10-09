import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'// 自定义全局样式
import vant from 'vant'// 引入vant组件
import 'vant/lib/index.css'// vant样式全局注册
import 'amfe-flexible'// 移动端rem适配

Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
