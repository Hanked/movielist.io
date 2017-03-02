import Vue from 'vue';

const state = {
  error: {
    isVisible: false,
    message: ''
  }
};

const getters = {
  ERROR_MSG: state => {
    return state.error.message;
  },
  ERROR_IS_VISIBLE: state => {
    return state.error.isVisible;
  }
};

const mutations = {
  SET_ERROR_MSG: (state, message) => {
    state.error.message = message;
  },
  ERROR_IS_VISIBLE: (state, isVisible) => {
    state.error.isVisible = isVisible;
  }
};

const actions = {
  LOGIN: ({ commit, dispatch }, creds) => {
    Vue.http.post('http://localhost:3000/api/users/authenticate',
      {
        email: creds.email,
        password: creds.password
      })

      .then(function(res) {
        commit('ERROR_IS_VISIBLE', false);
        localStorage.setItem('token', res.body.id_token);
        localStorage.setItem('userId', res.body.user_id);
        localStorage.setItem('username', res.body.username);
        commit('SET_USER', res.body);
        window.location.href = `/profile/${res.body.username}`
      })

      .catch(function(res) {
        if (res.status === 401) {
          commit('SET_ERROR_MSG', res.body.message);
        } else {
          commit('SET_ERROR_MSG', 'Please enter a password and a valid email address');
        }
        commit('ERROR_IS_VISIBLE', true);
      })
  },

  REGISTER: ({ commit, dispatch }, regData) => {
    Vue.http.post('http://localhost:3000/api/users',
      {
        fullName: regData.fullName,
        username: regData.username,
        email: regData.email,
        password: regData.password
      })
      .then(function(res) {
        localStorage.setItem('token', res.body.id_token);
        localStorage.setItem('userId', res.body.user_id);
        localStorage.setItem('username', res.body.username);

        dispatch('INIT_USER', res.body);
        window.location.href = `/profile/${res.body.username}`;
      })

      .catch(function(res) {
        if (res.status === 401) {
          commit('SET_ERROR_MSG', res.body.message);
        } else {
          commit('SET_ERROR_MSG', 'Please complete all fields and check that your details are valid');
        }
        commit('ERROR_IS_VISIBLE', true);
      })
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
