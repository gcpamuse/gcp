// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import './common/css/style.css'
import './common/css/reset.css'
import './style.css'

Vue.use(VueResource)
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
  Checkbox
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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
