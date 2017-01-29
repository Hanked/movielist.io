import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import router from './routes';
import { store } from './store/store';

window.Vue = Vue;

Vue.use(VueRouter);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
});
