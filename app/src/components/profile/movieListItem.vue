<template>
  <div class="movie-list-item">
    <article class="media movie">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1OTA5OTkyNV5BMl5BanBnXkFtZTgwODMwNDU5OTE@._V1_SX300.jpg" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>A Monster Calls</strong> <small>(2016) 1h 48min</small> <small style="float:right;"><strong>7.7&nbsp;</strong><span class="icon is-small"><i class="fa fa-star"></i></span></small>
              <br>
              A boy seeks the help of a tree monster to cope with his single mom's terminal illness.
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
                <a class="button is-small is-outlined">
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