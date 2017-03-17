import Vue from 'vue';

const state = {
  userMovies: [],
  memberMovies: [],
  error: {
    isVisible: false,
    message: ''
  }
};

const getters = {
  MOVIE_ERROR_MSG: state => {
    return state.error.message;
  },
  MOVIE_ERROR_IS_VISIBLE: state => {
    return state.error.isVisible;
  },
  MOVIES: state => {
    return state.userMovies;
  }
};

const mutations = {
  SET_MOVIES: (state, movies) => {
    state.userMovies = movies;
  },
  UPDATE_MOVIES: (state, movie) => {
    state.userMovies.push(movie);
  },
  REMOVE_MOVIE: (state, movieId) => {
    const index = state.userMovies.findIndex(item => item.imdbID === movieId);
    state.userMovies.splice(index, 1);
  },
  UPDATE_ERROR: (state, error) => {
    state.error = error;
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
        if (res.body.Response == 'False') {
          commit('UPDATE_ERROR', {
            isVisible: true,
            message: 'Could not find movie'
          })
          return;
        }

        const movie = res.body;
        movie.userId = userId;
        movie.watched = false;
        movie.recommended = false;
        movie.disliked = false;
        movie.position = 0;

        // update state
        commit('UPDATE_MOVIES', movie);
        // make api request to save to db
        dispatch('SAVE_MOVIE', movie);
      })
      .catch(function(res) {
        console.log('failed to add movie');
      })
  },

  SAVE_MOVIE: ({ commit }, movie) => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    if (!token) { return }

    // if error message is showing from previous attempt
    // reset and hide it
    commit('UPDATE_ERROR', {
      isVisible: false,
      message: ''
    })

    Vue.http.post(`http://localhost:3000/api/movies/${userId}`,
      {
        movie: movie
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
        console.log('failed to save movie', res);
      })
  },

  REMOVE_MOVIE: ({ commit }, movieId) => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    if (!token) { return }

    console.log({
      userId: userId,
      token: token,
      movieId: movieId
    });

    Vue.http.delete(`http://localhost:3000/api/movies/${userId}/${movieId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(function(res) {
        commit('REMOVE_MOVIE', movieId);
        console.log('movie deleted');
      })
      .catch(function(res) {
        console.log('failed to delete movie', res);
      })
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