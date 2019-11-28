import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index.vue'
import Todos from '~/pages/todos.vue'

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  routes: [
    {path: '/', component: Index, name: 'index'},
    {path: '/todos', component: Todos, name: 'todos'}
  ]
}

export function createRouter (ctx) {
  return new Router(routerOptions)
}
