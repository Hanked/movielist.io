import Vue from 'vue';

const state = {
  userFollows: {
    followees: [],
    followers: []
  }
};

const getters = {
  FOLLOWS: state => {
    return state.userFollows.followees;
  }
};

const mutations = {
  SET_FOLLOWS: (state, follows) => {
    state.userFollows.followees = follows;
  },
  ADD_FOLLOW: (state, follow) => {
    state.userFollows.followees.push(follow);
  },
  REMOVE_FOLLOW: (state, follow) => {
    const updatedFollowsArr = state.userFollows.followees.filter(e => e !== follow)
    state.userFollows.followees = updatedFollowsArr;
  }
};

const actions = {
  FETCH_FOLLOWS: ({ commit }) => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token) { return }

    Vue.http.get(`http://localhost:3000/api/followees/${userId}`, {
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