import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'font-awesome/css/font-awesome.min.css'
import 'element-ui/lib/theme-default/index.css'
import './common/css/global.css'
import mock from './mock'
import $ from 'jquery'

Vue.config.productionTip = false
Vue.config.devtools=true; //允许使用调试工具
/* eslint-disable no-new */
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
