import Vue from 'vue';

const state = {

};

const getters = {

};

const mutations = {

};

const actions = {
  ADD_MOVIE: ({ commit }, searchTerm) => {
    Vue.http.get(`http://www.omdbapi.com/?t=${searchTerm}&y=&plot=short&r=json`)
      .then(function(res) {
        console.log(res.body);
      })
      .catch(function(res) {
        console.log('could not get movie');
      })
  },

  CREATE_MOVIELIST: ({ commit }, userId) => {
    const token = localStorage.getItem('token');

    Vue.http.post(`http://localhost:3000/api/movielist/${userId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(function(res) {
        console.log(res.body);
      })
      .catch(function(res) {
        console.log('could not create movielist', res);
      })
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
