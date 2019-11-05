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
<<<<<<< HEAD
import mediainfo from '@/components/mediainfo'

=======
import applyShows from '@/components/applyShows'
>>>>>>> 2c2f736c9f9f8d9de5fe258735b373fb4dd108a0
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/goods',
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
<<<<<<< HEAD
      path: '/mediainfo',
      name: 'mediainfo',
      component: mediainfo
=======
      path: '/applyShows',
      name: 'applyShows',
      component: applyShows
>>>>>>> 2c2f736c9f9f8d9de5fe258735b373fb4dd108a0
    }
  ]
})
