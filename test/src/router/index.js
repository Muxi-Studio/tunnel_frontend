import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import time from '@/components/time'
// import control from '@/components/control'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'time',
      component: time
    }
  ]
})
