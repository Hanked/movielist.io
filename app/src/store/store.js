import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

import members from './modules/members';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);
Vue.use(VueResource);

export const store = new Vuex.Store({
  state: {
      greeting: 'Hello, World'
  },

  getters,
  mutations,
  actions,

  modules: {
    members
  }
});