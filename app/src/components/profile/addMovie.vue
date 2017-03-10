<template>
  <div class="add-movie">
    <div class="notification search is-primary">
      <p class="control has-addons">
        <input class="input is-expanded" type="text" v-model="movieSearchTerm" @keydown.enter="addMovie">
        <a class="button is-primary is-active" @click="addMovie">
          Add
        </a>
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'add-movie',

  data() {
    return {
      movieSearchTerm: ''
    }
  },

  methods: {
    addMovie() {
      this.movieSearch();
      this.movieSearchTerm = '';
    },

    movieSearch() {
      this.$store.dispatch('ADD_MOVIE', this.movieSearchTerm);
    }
  }
}
</script>


<style scoped>
  .search {
    margin-bottom: 15px;
  }
</style>