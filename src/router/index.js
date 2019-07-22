import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerMode } from '../config/env'

import HelloWorld from '@/components/HelloWorld'
import Chapter2 from '@/components/Chapters/Chapter2'
import Chapter3 from '@/components/Chapters/Chapter3'
import Chapter6 from '@/components/Chapters/Chapter6'
import Chapter7 from '@/components/Chapters/Chapter7'
import Chapter8 from '@/components/Chapters/Chapter8'
import Chapter9 from '@/components/Chapters/Chapter9'
import Chapter11 from '@/components/Chapters/Chapter11'

import TodoList from '@/components/Todo/TodoList'

Vue.use(VueRouter)

const routes = [
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
  },
  {
    path: '/chapter11',
    name: 'Components',
    component: Chapter11
  },
  {
    path: '/TodoList',
    name: 'TodoList',
    component: TodoList
  }
]

export default new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production'
})
