import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/style.scss'
import '@/assets/iconfont.css'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import {get,post} from './plugins/axios.js'
import api from './api/index.js'

import wx from 'weixin-js-sdk'


// import VConsole from 'vconsole';
// new VConsole();

import {fileAppenToFormData,base64ToBlob,base64RULHandler} from '@/utils/utils.js'


Vue.prototype.$api = api;
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$wx = wx;
Vue.prototype.$fileAppenToFormData = fileAppenToFormData;
Vue.prototype.$base64ToBlob = base64ToBlob;
Vue.prototype.$base64RULHandler = base64RULHandler;


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
