// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// api url
// import api from './request/api'
// Vue.prototype.$api = api

// import http from './request/http'
// Vue.prototype.$http = http;

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
import {Button ,Tabbar,TabbarItem,Tab,Tabs,Cell,CellGroup,Icon,Field,SwitchCell,Uploader,Dialog,RadioGroup,Radio,Checkbox,Toast,Popup,NavBar,List,} from 'vant'
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

Vue.config.productionTip = false

//mock
// require('./mock/mock.js')

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
