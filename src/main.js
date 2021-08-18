import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import {get} from './plugins/axios.js'
import api from './api/index.js'

import wx from 'weixin-js-sdk'

Vue.prototype.$api = api;
Vue.prototype.$get = get;
Vue.prototype.$wx = wx;


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
