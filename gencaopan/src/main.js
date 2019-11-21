// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import echarts from 'echarts'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import './common/css/style.css'
import './common/css/reset.css'
import './style.css'
import layer from 'vue-layer'
import vueiInfinite from 'vue-infinite-scroll'
Vue.use(vueiInfinite)
Vue.prototype.$layer = layer(Vue);

Vue.use(VueResource)
Vue.use(Vuelidate)
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
import {
  Button ,
  Tabbar,
  TabbarItem, 
  Tab, 
  Tabs,
  Cell,
  CellGroup,
  Icon,
  Field,
  SwitchCell,
  Uploader,
  Dialog,
  RadioGroup,
  Radio,
  Checkbox,
  Toast,
  Popup,
  NavBar,
  List,
} from 'vant'
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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
