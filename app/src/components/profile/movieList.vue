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

      <movie-list-item></movie-list-item>

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

  }
}
</script>


<style scoped>

</style>