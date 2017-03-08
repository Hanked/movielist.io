import Vue from 'vue';

const state = {
  follows: [],
  userFollows: {
    followees: [],
    followers: []
  },
  memberFollows: {
    followees: [],
    followers: []
  }
};

const getters = {
  FOLLOWS: state => {
    return state.follows;
  },
  MEMBER_FOLLOWS: state => {
    return state.follows;
  },
  FOLLOWEES: state => {
    return state.userFollows.followees;
  },
  MEMBER_FOLLOWEES: state => {
    return state.memberFollows.followees;
  },
  MEMBER_FOLLOWERS: state => {
    return state.memberFollows.followers;
  },
  FOLLOWERS: state => {
    return state.userFollows.followers;
  }
};

const mutations = {
  SET_FOLLOWS: (state, follows) => {
    state.follows = follows;
  },
  SET_FOLLOWEES: (state, followees) => {
    state.userFollows.followees = followees;
  },
  SET_FOLLOWERS: (state, followers) => {
    state.userFollows.followers = followers;
  },
  SET_MEMBER_FOLLOWEES: (state, followees) => {
    state.memberFollows.followees = followees;
  },
  SET_MEMBER_FOLLOWERS: (state, followers) => {
    state.memberFollows.followers = followers;
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
  INIT_FOLLOWS: ({ commit }) => {
    Vue.http.get('http://localhost:3000/api/follows')
      .then(function(res) {
        commit('SET_FOLLOWS', res.body);
      })
      .catch(function(res) {
        console.log('failed to fetch follows');
      })
  },

  FETCH_FOLLOWEES: ({ commit }, memberId) => {
    const token = localStorage.getItem('token');
    const userId = memberId || localStorage.getItem('userId');
    if (!token) { return }

    Vue.http.get(`http://localhost:3000/api/followees/${userId}`)
      .then(function(res) {
        const action = memberId ? 'SET_MEMBER_FOLLOWEES' : 'SET_FOLLOWEES'
        commit(action, res.body);
      })
      .catch(function(res) {
        console.log('failed to fetch followees', res);
      })
  },

  FETCH_FOLLOWERS: ({ commit }, memberId) => {
    const token = localStorage.getItem('token');
    const userId = memberId || localStorage.getItem('userId');
    if (!token) { return }

    Vue.http.get(`http://localhost:3000/api/followers/${userId}`)
      .then(function(res) {
        const action = memberId ? 'SET_MEMBER_FOLLOWERS' : 'SET_FOLLOWERS'
        commit(action, res.body);
      })
      .catch(function(res) {
        console.log('failed to fetch followers', res);
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