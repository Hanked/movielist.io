import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

import members from './modules/members';
import user from './modules/user';

Vue.use(Vuex);
Vue.use(VueResource);

export const store = new Vuex.Store({
  modules: {
    members,
    user
  }
});