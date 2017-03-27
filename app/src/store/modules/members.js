import Vue from 'vue';

const state = {
    members: [],
    member: {}
};

const getters = {
  MEMBERS: state => {
    return state.members;
  },
  MEMBER: state => {
    return state.member;
  },
  FILTERED_MEMBERS: (state, getters) => (searchTerm) => {
    let matchableProps = ['username', 'fullName'];
    let results = [];

    // for each of the member properties we want to search against
    matchableProps.forEach((matchableProp, i) => {
      // store the results in a temporary array
      let tempArr = state.members.filter((member) => {
        // convert the member property value and the search string to lowercase
        // for case-insensitive comparison
        return member[matchableProp].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      });
      // merge the new matches in to the cumulative results array
      // removing any duplicates at the same time
      results = results.concat(tempArr.filter((member) => {
        return results.indexOf(member) < 0;
      }));
    });
    return results;
  }
};

const mutations = {
  SET_MEMBERS: (state, members) => {
    state.members = members;
  },
  SET_MEMBER: (state, member) => {
    state.member = member;
  }
};

const actions = {
  INIT_MEMBERS: ({ commit }) => {
    Vue.http.get('http://localhost:3000/api/users')
      .then(function(res) {
        commit('SET_MEMBERS', res.body);
      })
      .catch(function(res) {
        console.log('failed to fetch members');
      })
  },

  FETCH_MEMBER: ({ commit, dispatch }, memberUsername) => {
    Vue.http.get(`http://localhost:3000/api/users/${memberUsername}`)
    .then(function(res) {
      commit('SET_MEMBER', res.body);
      dispatch('FETCH_FOLLOWEES', res.body._id);
      dispatch('FETCH_FOLLOWERS', res.body._id);
      // dispatch('FETCH_MEMBER_MOVIES', res.body._id);
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