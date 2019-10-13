import Vue from 'vue'
import Router from 'vue-router'
import Todos from './views/Todos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Todos
    },
    {
      path: '/todos',
      name: 'todos',
      component: () =>
        import(/* webpackChunkName: "todos" */ './views/Todos.vue')
    },
    {
      path: '/logs',
      name: 'logs',
      component: () =>
        import(/* webpackChunkName: "logs" */ './views/TodoLogs.vue')
    }
  ]
})
