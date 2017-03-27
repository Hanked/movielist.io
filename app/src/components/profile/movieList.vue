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
        <div v-for="(movie, i) in movieList" v-show="[this.activeTab == 0]">
          <movie-list-item
            :movie="movie">
          </movie-list-item>
        </div>
      </div>

      <div v-if="this.activeTab == 1">
        <div v-for="(movie, i) in watched">
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
      activeTab: 0,
      // this tell the computed properties which getter to use
      getterPrefix: '',
      isUser: true
    }
  },

  created() {
    const urlUsername = this.$route.params.userId;
    const sessionUsername = localStorage.getItem('username');

    if (urlUsername !== sessionUsername) {
      this.isUser = false;
      this.getterPrefix = 'MEMBER_';
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
      return this.$store.getters[`${this.getterPrefix}MOVIES`];
    },
    movieList() {
      return this.$store.getters[`${this.getterPrefix}MOVIE_LIST`];
    },
    watched() {
      return this.$store.getters[`${this.getterPrefix}WATCHED_LIST`];
    }
  }
}
</script>
