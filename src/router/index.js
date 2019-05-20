import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Chapter2 from '@/components/Chapter2'
import Chapter3 from '@/components/Chapter3'
import Chapter6 from '@/components/Chapter6'
import Chapter7 from '@/components/Chapter7'
import Chapter8 from '@/components/Chapter8'
import Chapter9 from '@/components/Chapter9'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/chapter2',
      name: 'DataBinding',
      component: Chapter2
    },
    {
      path: '/chapter3',
      name: 'Direct',
      component: Chapter3
    },
    {
      path: '/chapter6',
      name: 'Filter',
      component: Chapter6
    },
    {
      path: '/chapter7',
      name: 'Class&Style',
      component: Chapter7
    },
    {
      path: '/chapter8',
      name: 'Transition',
      component: Chapter8
    },
    {
      path: '/chapter9',
      name: 'Method',
      component: Chapter9
    }
  ]
})
