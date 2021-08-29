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

// let env = 
import VConsole from 'vconsole';
new VConsole();

import {dataURLtoBlob,fileAppenToFormData} from '@/utils/utils.js'


Vue.prototype.$api = api;
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$wx = wx;
Vue.prototype.$dataURLtoBlob = dataURLtoBlob;
Vue.prototype.$fileAppenToFormData = fileAppenToFormData;


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
