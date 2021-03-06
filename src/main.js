// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

import apiPort from './port/port.js';
global.apiPort = apiPort;

Vue.use(ElementUI);
// Vue.use(axios);
axios.defaults.withCredentials = true; // 跨域请求时允许携带cookie
Vue.prototype.$axios = axios;

// 引入公共方法 方法注册在publicFun上
import tool from './public/tool.js';
// global.publicFun = publicFun;

// 富文本编辑器
import '../static/UE/ueditor.config.js';
import '../static/UE/ueditor.all.min.js';
import '../static/UE/lang/zh-cn/zh-cn.js';
import '../static/UE/ueditor.parse.min.js';



Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
