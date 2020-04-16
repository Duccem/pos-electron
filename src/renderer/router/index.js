import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/Home'
import login from '../Views/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
     path: '/home',
     name: 'home',
     component: home
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
