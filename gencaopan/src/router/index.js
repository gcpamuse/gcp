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
import mychart from '@/components/mychart'
import zhifu from '@/components/zhifu'
import futuresDetails from '@/components/futuresDetails'
import login from '@/components/login'
import register from '@/components/register'
import findPasswd from '@/components/findPasswd'
import applyInvestor from '@/components/applyInvestor'
import wechatPay from '@/components/wechatPay'
import subscribes from '@/components/subscribes'
import looknotes from '@/components/looknotes'
import reward from '@/components/reward'
import transaction from '@/components/transaction'
import holdPositions from '@/components/holdPositions'
import setUp from '@/components/setUp'
import inoutMoney from '@/components/inoutMoney'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      meta:{tabbar: true},
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      meta:{tabbar: true},
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      meta:{tabbar: true},
      component: seller
    },
    {
      path: '/myprofit',
      name: 'myprofit',
      meta:{tabbar: true},
      component: myprofit
    },
    {
      path: '/myconcem',
      name: 'myconcem',
      meta:{tabbar: true},
      component: myconcem
    },
    {
      path: '/myFans',
      name: 'myFans',
      meta:{tabbar: true},
      component: myFans
    },
    {
      path: '/mynotes',
      name: 'mynotes',
      meta:{tabbar: true},
      component: mynotes
    },
    {
      path: '/mediainfo',
      name: 'mediainfo',
      meta:{tabbar: true},
      component: mediainfo
    },
    {
      path: '/apply',
      name: 'applyShow',
      meta:{tabbar: true},
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
      meta:{tabbar: true},
      component: teacherSubscribe
    },
    {
      path: '/pushSetting',
      name: 'pushSetting',
      meta:{tabbar: true},
      component: pushSetting
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      meta:{tabbar: true},
      component: cooperation
    },
    {
      path: '/applyManager',
      name: 'applyManager',
      meta:{tabbar: true},
      component: applyManager
    },
    {
      path: '/release',
      name: 'release',
      meta:{tabbar: true},
      component: release
    },
    {
      path: '/mychart',
      name: 'mychart',
      meta:{tabbar: true},
      component: mychart
    },
    {
      path: '/zhifu',
      name: 'zhifu',
      meta:{tabbar: true},
      component: zhifu
    },
    {
      path: '/futuresDetails',
      name: 'futuresDetails',
      component: futuresDetails
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/findPasswd',
      name: 'findPasswd',
      component: findPasswd
    },
    {
      path: '/applyInvestor',
      name: 'applyInvestor',
      meta:{tabbar: true},
      component: applyInvestor
    },
    {
      path: '/wechatPay',
      name: 'wechatPay',
      component: wechatPay
    },
    {
      path: '/subscribes',
      name: 'subscribes',
      component: subscribes
    },
    {
      path: '/looknotes',
      name: 'looknotes',
      meta:{tabbar: true},
      component: looknotes
    },
    {
      path: '/reward',
      name: 'reward',
      component: reward
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: transaction
    },
    {
      path: '/holdPositions',
      name: 'holdPositions',
      component: holdPositions
    },
    {
      path: '/setUp',
      name: 'setUp',
      component: setUp
    },
    {
      path: '/inoutMoney',
      name: 'inoutMoney',
      component: inoutMoney
    },
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');
 
//     if (token === null || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });
 
// export default router;
