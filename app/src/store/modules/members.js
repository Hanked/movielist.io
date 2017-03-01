import Vue from 'vue';

const state = {
    members: []
};

const getters = {
  MEMBERS: state => {
    return state.members;
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
  }
};

export default {
    state,
    mutations,
    actions,
    getters
}