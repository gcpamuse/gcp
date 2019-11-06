import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'
import myprofit from '@/components/myprofit'
import myconcem from '@/components/myconcem'
import myFans from '@/components/myFans'
import mynotes from '@/components/mynotes'
import applyShow from '@/components/applyShow'
import mediainfo from '@/components/mediainfo'
import prizes from '@/components/prizes'
import teacherSubscribe from '@/components/teacherSubscribe'
import pushSetting from '@/components/pushSetting'
import cooperation from '@/components/cooperation'
import applyManager from '@/components/applyManager'
import release from '@/components/release'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/myprofit',
      name: 'myprofit',
      component: myprofit
    },
    {
      path: '/myconcem',
      name: 'myconcem',
      component: myconcem
    },
    {
      path: '/myFans',
      name: 'myFans',
      component: myFans
    },
    {
      path: '/mynotes',
      name: 'mynotes',
      component: mynotes
    },
    {
      path: '/mediainfo',
      name: 'mediainfo',
      component: mediainfo
    },
    {
      path: '/apply',
      name: 'applyShow',
      component: applyShow
    },
    {
      path: '/prizes',
      name: 'prizes',
      component: prizes
    },
    {
      path: '/teacherSubscribe',
      name: 'teacherSubscribe',
      component: teacherSubscribe
    },
    {
      path: '/pushSetting',
      name: 'pushSetting',
      component: pushSetting
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: cooperation
    },
    {
      path: '/applyManager',
      name: 'applyManager',
      component: applyManager
    },
    {
      path: '/release',
      name: 'release',
      component: release
    },
  ]
})
