import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

import user from './modules/user';
import members from './modules/members';
import follows from './modules/follows';

Vue.use(Vuex);
Vue.use(VueResource);

export const store = new Vuex.Store({
  modules: {
    user,
    members,
    follows
  }
});