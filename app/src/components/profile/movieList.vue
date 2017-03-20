<template>
  <div class="movie-list">
    <div class="box">
      <div class="tabs is-boxed">
        <ul>
          <li
            v-for="(tab, i) in this.tabs"
            :class="[tab.active ? activeClass : '']"
            @click="tabClickHandler(i, tab.active)">
            <a>
              <span class="icon is-small">
                <i :class="tab.iconClass"></i>
              </span>
              <span>{{ tab.name }}</span>
            </a>
          </li>
        </ul>
      </div>

      <div v-for="(movie, i) in this.activeTabData || userMovieList">
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
      tabs: [
        {
          name: "Movie List",
          iconClass: 'fa fa-list',
          active: true
        },
        {
          name: "Watched",
          iconClass: 'fa fa-tv',
          active: false
        }
      ],
      activeClass: "is-active",
      activeTabData: ''
    }
  },

  methods: {
    tabClickHandler(index, isActive) {
      if (isActive) { return };

      for (let i=0; i<this.tabs.length; i++) {
        if (i == index) {
          // make the tab active
          this.tabs[i].active = true;
          // use the relevant getter to populate the list
          let getter = 'user' + this.tabs[i].name.replace(/\s/g,'');
          console.log(getter);
          this.activeTabData = this[getter];
        } else {
          this.tabs[i].active = false;
        }
      }
    }
  },

  computed: {
    userMovies() {
      return this.$store.getters.MOVIES;
    },
    userMovieList() {
      console.log('userMovieList!')
      return this.$store.getters.MOVIE_LIST;
    },
    userWatched() {
      console.log('userWatched!')
      return this.$store.getters.WATCHED_LIST;
    }
  }
}
</script>
