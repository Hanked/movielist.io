import Vue from 'vue';

const state = {
  userFollows: [],
  allFollows: []
};

const getters = {
  FOLLOWS: state => {
    return state.allFollows;
  },
  USER_FOLLOWS: state => {
    return state.userFollows;
  }
};

const mutations = {
  SET_USER_FOLLOWS: (state, userFollows) => {
    state.userFollows = userFollows;
  },
  SET_FOLLOWS: (state, follows) => {
    state.allFollows = follows;
  },
  ADD_FOLLOW: (state, follow) => {
    state.userFollows.push(follow);
  },
  REMOVE_FOLLOW: (state, follow) => {
    const updatedUserFollowsArr = state.userFollows.filter(e => e !== follow)
    state.userFollows = updatedUserFollowsArr;
  }
};

const actions = {
  INIT_FOLLOWS: ({ commit }) => {
    Vue.http.get('http://localhost:3000/api/follows')
      .then(function(res) {
        commit('SET_FOLLOWS', res.body);
        console.log(res.body)
      })
      .catch(function(res) {
        console.log('failed to fetch follows', res);
      })
  },

  FETCH_USER_FOLLOWS: ({ commit }, type) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token) { return }

    // if required create query string to be appended to request url
    let query = type ? `?${type}=true` : '';

    Vue.http.get(`http://localhost:3000/api/follows/${userId}${type}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(function(res) {
      commit('SET_USER_FOLLOWS', res.body);
    })
    .catch(function(res) {
      console.log('failed to fetch userFollows');
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