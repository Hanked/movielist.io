<template>
  <div class="movie-list">
    <div class="box">
      <div class="tabs is-boxed">
        <ul>
          <li class="is-active">
            <a>
              <span class="icon is-small"><i class="fa fa-list"></i></span>
              <span>Movie List</span>
            </a>
          </li>
          <li>
            <a>
              <span class="icon is-small"><i class="fa fa-tv"></i></span>
              <span>Watched</span>
            </a>
          </li>
        </ul>
      </div>

      <div v-for="(movie, i) in userMovies">
        <movie-list-item
          :movie="movie">
        </movie-list-item>
      </div>

    </div>
  </div>
</template>


<script>
import MovieListItem from './movieListItem';

export default {
  name: 'movie-list',

  components: {
    MovieListItem
  },

  data() {
    return {

    }
  },

  methods: {

  },

  computed: {
    userMovies() {
      return this.$store.getters.MOVIES;
    }
  }
}
</script>


<style scoped>

</style>