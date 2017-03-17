<template>
  <div class="movie-list-item">
    <article class="media movie">
        <div class="media-left">
          <figure class="image is-48x48">
            <a :href="imdbUrl">
              <img :src="movie.Poster" :alt="movie.Title">
            </a>
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <a :href="imdbUrl">
                <strong>{{ movie.Title }}</strong>
              </a>
              <small>({{ movie.Year }}) {{ movie.Runtime }}</small>

              <small style="float:right;">
                <strong>{{ movie.imdbRating }}&nbsp;</strong>
                <span class="icon is-small">
                    <i class="fa fa-star"></i>
                </span>
              </small>
              <br>
              {{ movie.Plot }}
            </p>
          </div>
          <nav class="level">
            <div class="level-left">
              <p class="control has-addons">
                <a class="button is-small is-outlined">
                  <span class="icon is-small">
                    <i class="fa fa-tv"></i>
                  </span>
                  <span>Watched</span>
                </a>
                <a class="button is-small is-outlined">
                  <span class="icon is-small">
                    <i class="fa fa-thumbs-o-up"></i>
                  </span>
                  <span>Recommend</span>
                </a>
                <a class="button is-small is-outlined">
                  <span class="icon is-small">
                    <i class="fa fa-thumbs-o-down"></i>
                  </span>
                  <span>Dislike</span>
                </a>
                <a class="button is-small is-outlined" @click="removeMovie">
                  <span class="icon is-small">
                    <i class="fa fa-remove"></i>
                  </span>
                  <span>Remove</span>
                </a>
                <a class="button is-small is-outlined">
                  <span class="icon is-small">
                    <i class="fa fa-sort"></i>
                  </span>
                  <span>Sort</span>
                </a>
              </p>
            </div>
          </nav>
        </div>
      </article>
  </div>
</template>


<script>
export default {
  name: 'movie-list-item',

  props: [
    'movie'
  ],

  methods: {
    removeMovie() {
      this.$store.dispatch('REMOVE_MOVIE', this.movie.imdbID);
    }
  },

  computed: {
    imdbUrl() {
      return `http://www.imdb.com/title/${this.movie.imdbID}`;
    }
  }
}
</script>


<style scoped>

</style>