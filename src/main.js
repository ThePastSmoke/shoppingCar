import Vue from 'vue'
import App from './App.vue'
// 引入第三方库bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// 引入axios插件
import axios from 'axios'
axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net'
axios.defaults.timeout = 3000
Vue.config.productionTip = false
new Vue({
  render: (h) => h(App)
}).$mount('#app')
