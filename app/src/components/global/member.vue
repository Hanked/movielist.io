<template>
  <div class="member">
    <div class="card is-fullwidth">
        <header class="card-header" :style="heroBackgroundCssProp">
          <a v-if="canFollow" @click="followMemberToggle(memberdata)" class="button follow is-small is-primary">
            {{ followBtnValue }}
          </a>
        </header>
        <div class="card-content">
          <a class="card-avatar">
            <img :src="memberdata.profileImageUrl" class="card-avatar-img">
          </a>

          <div class="card-user">
            <div class="card-user-name">
              <a href="#">{{ memberdata.fullName }}</a>
            </div>
            <span>
              <a :href="profileUrl">
                <span>{{ memberdata.username }}</span>
              </a>
            </span>
          </div>

          <div class="card-stats">
            <ul class="card-stats-list">
              <li class="card-stats-item">
                <a href="#">
                  <span class="card-stats-key">Movie list</span>
                  <span class="card-stats-val">{{ movieListCount }}</span>
                </a>
              </li>
              <li class="card-stats-item">
                <a href="#">
                  <span class="card-stats-key">Watched</span>
                  <span class="card-stats-val">{{ watchedCount }}</span>
                </a>
              </li>
              <li class="card-stats-item">
                <a href="">
                  <span class="card-stats-key">Following</span>
                  <span class="card-stats-val">{{ followingCount }}</span>
                </a>
              </li>
              <li class="card-stats-item">
                <a href="#">
                  <span class="card-stats-key">Followers</span>
                  <span class="card-stats-val">{{ followersCount }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

  </div>
</template>


<script>
export default {
  name: 'member',

  props: [
    'memberdata',
    'index',
    'userFollowees',
    'followingCount',
    'followersCount'
  ],

  data() {
    return {
      counts: {
        following: 0,
        followers: 0
      },
      following: false,
      canFollow: true
    }
  },

  created() {
    this.noFollowForLoggedOutUser(
      localStorage.getItem('userId')
    );
  },

  watch: {
    userFollowees() {
      this.isFollowing();
    }
  },

  methods: {
    followMemberToggle(memberData) {
      if (this.following == false) {
        this.$store.dispatch('FOLLOW_MEMBER', memberData)
        this.following = true;
      } else {
        this.$store.dispatch('UNFOLLOW_MEMBER', memberData)
        this.following = false;
      }
    },

    isFollowing() {
      // prevent logged in user from following themselves
      if (this.memberdata._id === localStorage.getItem('userId')) {
        this.canFollow = false;
      }
      // already following this user?
      else if (this.$store.getters.FOLLOWEES.indexOf(this.memberdata._id) > -1) {
        this.following = true;
      }
    },

    noFollowForLoggedOutUser(token) {
      // prevent logged out user from following anyone
      if (!token) {
        this.canFollow = false;
      }
    }
  },

  computed: {
    heroBackgroundCssProp() {
      let prop = 'none';
      if (this.memberdata.heroImageUrl) {
        prop = `url("${this.memberdata.heroImageUrl}")`;
      }
      return 'background-image: ' + prop;
    },

    profileUrl() {
      return `/profile/${this.memberdata.username}`
    },

    followBtnValue() {
      return this.following ? 'Unfollow' : 'Follow';
    },

    movieListCount() {
      return this.$store.getters.MOVIE_LIST.length;
    },
    watchedCount() {
      return this.$store.getters.WATCHED_LIST.length;
    }
  }
}
</script>


<style scoped>

</style>