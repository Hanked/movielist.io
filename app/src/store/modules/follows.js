import Vue from 'vue';

const state = {
  userFollows: {
    followees: [],
    followers: []
  }
};

const getters = {
  FOLLOWEES: state => {
    return state.userFollows.followees;
  },
  FOLLOWERS: state => {
    return state.userFollows.followers;
  }
};

const mutations = {
  SET_FOLLOWEES: (state, followees) => {
    state.userFollows.followees = followees;
  },
  SET_FOLLOWERS: (state, followers) => {
    state.userFollows.followers = followers;
  },
  ADD_FOLLOWEE: (state, followee) => {
    state.userFollows.followees.push(followee);
  },
  REMOVE_FOLLOWEE: (state, followee) => {
    const updatedFollowsArr = state.userFollows.followees.filter(e => e !== followee)
    state.userFollows.followees = updatedFollowsArr;
  }
};

const actions = {
  INIT_FOLLOWS: ({ commit }, memberId) => {

  },

  FETCH_FOLLOWEES: ({ commit }) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token) { return }

    Vue.http.get(`http://localhost:3000/api/followees/${userId}`)
      .then(function(res) {
        commit('SET_FOLLOWEES', res.body);
      })
      .catch(function(res) {
        console.log('failed to fetch followees');
      })
  },

  FETCH_FOLLOWERS: ({ commit }) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token) { return }

    Vue.http.get(`http://localhost:3000/api/followers/${userId}`)
      .then(function(res) {
        commit('SET_FOLLOWERS', res.body);
      })
      .catch(function(res) {
        console.log('failed to fetch followers');
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
        commit('ADD_FOLLOWEE', res.body.followee_id);
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
        commit('REMOVE_FOLLOWEE', res.body.followee_id);
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