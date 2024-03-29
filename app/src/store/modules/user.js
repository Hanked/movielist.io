import Vue from 'vue';

const state = {
  user: {}
};

const getters = {
  USER: state => {
    return state.user;
  }
};

const mutations = {
  SET_USER: (state, user) => {
    state.user = user;
  }
};

const actions = {
  INIT_USER: ({ commit, dispatch }) => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (!token) { return }

    Vue.http.get(`http://localhost:3000/api/users/${username}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(function(res) {
      commit('SET_USER', res.body);
      dispatch('FETCH_FOLLOWEES');
      dispatch('FETCH_FOLLOWERS');
    })
    .catch(function(res, err) {
      console.log('failed to fetch current user', res);
    })
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
