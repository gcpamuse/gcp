// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from '@/store/index';
// axios
import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api'

// echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// VueResource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// Vuelidate
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

//CSS
import './common/css/style.css'
import './common/css/reset.css'
import './style.css'


//Vant
import {Button ,Tabbar,TabbarItem,Tab,Tabs,Cell,CellGroup,Icon,Field,SwitchCell,Uploader,Dialog,RadioGroup,Radio,Checkbox,Toast,Popup,NavBar,List,Switch,DropdownMenu, DropdownItem,Area} from 'vant'
Vue.use(Button);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Tab).use(Tabs);
Vue.use(Cell).use(CellGroup);
Vue.use(Icon);
Vue.use(Field);
Vue.use(SwitchCell);
Vue.use(Uploader);
Vue.use(Dialog);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Toast);
Vue.use(Popup);
Vue.use(NavBar);
Vue.use(List);
Vue.use(Switch);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Area);

Vue.config.productionTip = false

//mock
// require('./mock/mock.js')

// 请求拦截器
axios.interceptors.request.use( 
  config => {
    Toast.loading({
      mask: true,
      message: '加载中...'
    });
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    } 
    return config; 
  }, 
  error => {  
   return Promise.error(error); 
})
// 响应拦截
axios.interceptors.response.use(res => {
  // 对响应数据做处理
  const code = res.data.code;
  const msg =  res.data.message
  if (code === 401) {
    Toast('请登录');
    router.push('/login')
    localStorage.removeItem('token')
    return false;
  } 
  if (code === 5003) {
    Toast('账号已在别处登陆，请重新登陆');
    router.push('/login')
    localStorage.removeItem('token')
    return false;
  }
  if (code === 429) {
    Toast('尝试次数较多，请稍后尝试');
    return false;
  }
  if (code === 408){
    Toast('请求超时');
    return false;
  }
  if (code === 400){
    Toast(msg);
    return false;
  }
  if (code === 404){
    Toast('请求地址错误');
    return false;
  }
  if (code === 403) {
    Toast('登录过期，请重新登录');
    router.push('/login')
    localStorage.removeItem('token')
    return false;
  }
  if (code === 5002) {
    Toast('token 已过期，请重新登录');
    router.push('/login')
    localStorage.removeItem('token')
    return false;
  }
  return res;

}, error => {
  return Promise.reject(error); // 对响应错误做处理
})  


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
