import Vue from 'vue';

const state = {
  userMovies: [],
  memberMovies: []
};

const getters = {

};

const mutations = {
  SET_MOVIES: (state, movies) => {
    state.userMovies = movies;
  },
  UPDATE_MOVIES: (state, movie) => {
    state.userMovies.push(movie);
  }
};

const actions = {
  INIT_MOVIES: ({ commit, dispatch, rootState}) => {
    // console.log(rootState.user);
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (!token) { return }

    Vue.http.get(`http://localhost:3000/api/movies/${userId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(function(res) {
        commit('SET_MOVIES', res.body);
      })
      .catch(function(res) {
        console.log('failed to init movies');
      })
  },

  ADD_MOVIE: ({ commit, dispatch }, searchTerm) => {
    const userId = localStorage.getItem('userId');
    if (!userId) { return }

    Vue.http.get(`http://www.omdbapi.com/?t=${searchTerm}&y=&plot=short&r=json`)
      .then(function(res) {

        // if movie not found
        if (res.body.Response == 'False') { return };

        commit('UPDATE_MOVIES', {
          userId: userId,
          movieId: res.body.imdbID,
          watched: false,
          recommended: false,
          disliked: false,
          position: 0
        });

        dispatch('SAVE_MOVIE', res.body.imdbID);
      })
      .catch(function(res) {
        console.log('could not get movie', res);
      })
  },

  SAVE_MOVIE: ({ commit }, movieId) => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    if (!token) { return }

    Vue.http.post(`http://localhost:3000/api/movies/${userId}`,
      {
        movieId: movieId
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(function(res) {
        console.log('movie saved');
      })
      .catch(function(res) {
        console.log('failed to save movie');
      })
  },

  REMOVE_MOVIE: ({ commit, dispatch }) => {

  },

  UPDATE_MOVIE: ({ commit, dispatch }) => {

  }

};

export default {
  state,
  mutations,
  actions,
  getters
}