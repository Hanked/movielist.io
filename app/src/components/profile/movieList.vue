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

      <div v-show="this.activeTab == 0">
        <div v-for="(movie, i) in userMovieList" v-show="[this.activeTab == 0]">
          <movie-list-item
            :movie="movie">
          </movie-list-item>
        </div>
      </div>

      <div v-if="this.activeTab == 1">
        <div v-for="(movie, i) in userWatched">
          <movie-list-item
            :movie="movie">
          </movie-list-item>
        </div>
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
      activeTab: 0
    }
  },

  methods: {
    tabClickHandler(index, isActive) {
      if (isActive) { return };

      for (let i=0; i<this.tabs.length; i++) {
        if (i == index) {
          // make the tab active
          this.tabs[i].active = true;
          this.activeTab = i;
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
      return this.$store.getters.MOVIE_LIST;
    },
    userWatched() {
      return this.$store.getters.WATCHED_LIST;
    }
  }
}
</script>
