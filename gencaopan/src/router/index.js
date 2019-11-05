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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
=======
      name: 'goods',
      component: goods
    },
    {
      path: '/goods',
>>>>>>> 339e37867af807fc1c037b54152299c14d0a0f2e
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
    }
  ]
})
