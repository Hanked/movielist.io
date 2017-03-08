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
};

export default {
  state,
  mutations,
  actions,
  getters
}



// this.$http.get(`http://www.omdbapi.com/?t=${this.movieSearchTerm}&y=&plot=short&r=json`)
//   .then(function(response){
//     this.handleMovieSearchResponse(response)
//   });