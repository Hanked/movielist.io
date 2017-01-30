import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App';
import router from './routes';
import { store } from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

window.Vue = Vue;

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
});
