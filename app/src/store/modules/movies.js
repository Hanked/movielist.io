import Vue from 'vue';

const state = {
  movieList = []
};

const getters = {

};

const mutations = {

};

const actions = {
  ADD_MOVIE: ({ commit, dispatch }, searchTerm) => {
    Vue.http.get(`http://www.omdbapi.com/?t=${searchTerm}&y=&plot=short&r=json`)
      .then(function(res) {
        console.log(res.body);
        dispatch('UPDATE_MOVIELIST', res.body.imdbID);
      })
      .catch(function(res) {
        console.log('could not get movie');
      })
  },

  UPDATE_MOVIELIST: ({ commit, dispatch }, imdbID) => {
    console.log('imdbId:', imdbID);
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
