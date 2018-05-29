// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { DatePicker, Table, Form, Button, TableColumn, Popover, pagination} from 'element-ui';
// import ElDatePicker from 'element-datepicker'

// Vue.use(ElDatePicker);
Vue.use(DatePicker);
Vue.use(Table);
Vue.use(Form);
Vue.use(Button);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(pagination);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
