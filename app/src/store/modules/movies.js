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
  },
  MOVIE_LIST: state => {
    let movieList = state.userMovies.filter((movie) => {
      return !movie.watched
    });
    return movieList;
  },
  WATCHED_LIST: state => {
    let watchedList = state.userMovies.filter((movie) => {
      return movie.watched
    });
    return watchedList;
  },
  MEMBER_MOVIES: state => {
    return state.memberMovies;
  },
  MEMBER_MOVIE_LIST: state => {
    let movieList = state.memberMovies.filter((movie) => {
      return !movie.memberMovies
    });
    return movieList;
  },
  MEMBER_WATCHED_LIST: state => {
    let watchedList = state.memberMovies.filter((movie) => {
      return movie.watched
    });
    return watchedList;
  }
};

const mutations = {
  SET_MOVIES: (state, movies) => {
    state.userMovies = movies;
  },
  SET_MEMBER_MOVIES: (state, movies) => {
    state.memberMovies = movies;
  },
  UPDATE_MOVIES: (state, movie) => {
    state.userMovies.push(movie);
  },
  UPDATE_MOVIE: (state, args) => {
    const index = state.userMovies.findIndex(item => item.imdbID === args.movieId);
    state.userMovies[index][args.type] = true;
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
    const username = localStorage.getItem('username');
    if (!token) { return }

    Vue.http.get(`http://localhost:3000/api/movies/${username}`)
      .then(function(res) {
        commit('SET_MOVIES', res.body);
      })
      .catch(function(res) {
        console.log('failed to init movies');
      })
  },

  FETCH_MEMBER_MOVIES: ({ commit, dispatch }, memberUsername) => {
    console.log('FETCH_MEMBER_MOVIES', memberUsername);

    Vue.http.get(`http://localhost:3000/api/movies/${memberUsername}`)
      .then(function(res) {
        console.log(res)
        commit('SET_MEMBER_MOVIES', res.body);
      })
      .catch(function(res) {
        console.log('failed to init movies');
      })
  },

  ADD_MOVIE: ({ commit, dispatch }, searchTerm) => {
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username');
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
        movie.username = username;
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

  UPDATE_MOVIE: ({ commit }, args) => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    if (!token) { return }

    let bodyData = {};
    bodyData.movieId = args.movieId;
    bodyData[args.type] = true;

    // recommending or disliking a film should automatically set the movie to watched
    if (args.type !== 'watched') {
      bodyData.watched = true;
    }

    Vue.http.patch(`http://localhost:3000/api/movies/${userId}`,
      bodyData,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(function(res) {
        commit('UPDATE_MOVIE', {
          movieId: args.movieId,
          type: args.type
        });
        commit('UPDATE_MOVIE', {
          movieId: args.movieId,
          type: 'watched'
        });
        console.log('movie updated');
      })
      .catch(function(res) {
        console.log('failed to update movie', res);
      })
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}