// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { DatePicker, Table } from 'element-ui';
import App from './App'

// Vue.config.productionTip = false
Vue.prototype.$ELEMENT = { size: 'small' };
Vue.component(DatePicker.name, DatePicker);
Vue.component(Table.name, Table);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  render: h => h(App)
  // template: '<App/>'
})
