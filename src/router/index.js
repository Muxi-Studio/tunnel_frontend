import Vue from 'vue'
import Router from 'vue-router'
import timeback from '../components/timeback'
import admin from '../components/admin'
import login from '../components/login'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: 'login',
      component: login,
    },
    {
      path: "/admin",
      name: 'admin',
      component: admin,
    },
    {
      path: '/timeback',
      name: 'timeback',
      component: timeback,
    }
  ]
})
