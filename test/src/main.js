// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { DatePicker, Table } from 'element-ui';
// import ElDatePicker from 'element-datepicker'

// Vue.use(ElDatePicker);
Vue.use(DatePicker);
Vue.use(Table);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
