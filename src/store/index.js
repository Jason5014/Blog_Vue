
import Vue from 'vue'
import Vuex from 'vuex'
import TodoStore from './TodoStore'
import CountStore from './CountStore'
import {myPlugin, createWebSocketPlugin} from './../plugins/index'

Vue.use(Vuex)

const socket = {}
const webSocketPlugin = createWebSocketPlugin(socket)

export default new Vuex.Store({
  plugins: [myPlugin, webSocketPlugin],
  modules: {
    todoStore: TodoStore,
    countStore: CountStore
  },
  strict: process.env.NODE_ENV !== 'production'
})
