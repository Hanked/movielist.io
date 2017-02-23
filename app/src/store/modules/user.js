import Vue from 'vue';

const state = {
    user: {},
    follows: []
};

const getters = {
  'USER': state => {
    return state.user;
  },
  'FOLLOWS': state => {
    return state.follows;
  }
};

const mutations = {
  'SET_USER': (state, user) => {
    state.user = user;
  },
  'SET_FOLLOWS': (state, follows) => {
    state.follows = follows;
  }
};

const actions = {
  'INIT_USER': ({ commit, dispatch }) => {
    const token = localStorage.getItem('token');
    if (!token) { return }

    Vue.http.get('http://localhost:3000/api/users/current', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(function(res) {
      commit('SET_USER', res.body);
      dispatch('FETCH_FOLLOWS');
    })
    .catch(function(res, err) {
      console.log('failed to fetch current user');
    })
  },

  'FETCH_FOLLOWS': ({ commit }) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token) { return }

    Vue.http.get(`http://localhost:3000/api/follows/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(function(res) {
      commit('SET_FOLLOWS', res.body);
    })
    .catch(function(res) {
      console.log('failed to fetch follows');
    })
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}