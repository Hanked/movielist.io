import Vue from 'vue';

const state = {
    user: {},
    follows: []
};

const getters = {
  USER: state => {
    return state.user;
  },
  FOLLOWS: state => {
    return state.follows;
  }
};

const mutations = {
  SET_USER: (state, user) => {
    state.user = user;
  },
  SET_FOLLOWS: (state, follows) => {
    state.follows = follows;
  },
  ADD_FOLLOW: (state, follow) => {
    state.follows.push(follow);
  },
  REMOVE_FOLLOW: (state, follow) => {
    const updatedFollowsArr = state.follows.filter(e => e !== follow)
    state.follows = updatedFollowsArr;
  }
};

const actions = {
  INIT_USER: ({ commit, dispatch }) => {
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
      console.log('failed to fetch current user', res);
    })
  },

  FETCH_FOLLOWS: ({ commit }) => {
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
  },

  FOLLOW_MEMBER: ({ commit }, memberData) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId')
    if (!token || !userId) { return };

    Vue.http.post(`http://localhost:3000/api/follows?follower_id=${userId}`,
      {
        followee_id: memberData._id,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(function(res) {
        commit('ADD_FOLLOW', res.body.followee_id);
      })
      .catch(function(res) {
        console.log('failed to follow member');
      })
  },

  UNFOLLOW_MEMBER: ({ commit, dispatch }, memberData) => {
    let token = localStorage.getItem('token');
    let userId = localStorage.getItem('userId')
    if (!token || !userId) { return };

    Vue.http.delete(`http://localhost:3000/api/follows?follower_id=${userId}&followee_id=${memberData._id}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(function(res) {
        commit('REMOVE_FOLLOW', res.body.followee_id);
      })
      .catch(function(res) {
        console.log('failed to unfollow member', res);
      })
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}