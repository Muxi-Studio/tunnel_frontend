// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import DatePicker from 'element-ui';
import Table from 'element-ui';
import Form from 'element-ui';
import FormItem from 'element-ui';
import Input from 'element-ui';
import Button from 'element-ui';
import Tag from 'element-ui';
import TableColumn from 'element-ui';
import Popover from 'element-ui';
import pagination from 'element-ui';

Vue.use(DatePicker);
Vue.use(Table);
Vue.use(Form);
Vue.use(Button);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(pagination);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Tag);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
