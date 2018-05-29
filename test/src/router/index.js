import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import timeback from '@/components/timeback'
import control from '@/components/control'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'control',
      component: control
    }
  ]
})
