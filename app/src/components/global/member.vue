<template>
  <div class="member">

    <div class="card is-fullwidth">
        <header class="card-header" :style="heroBackgroundCssProp">
          <a v-if="canFollow" @click="followMemberToggle(memberData)" class="button follow is-small is-primary">
            {{ followBtnValue }}
          </a>
        </header>
        <div class="card-content">
          <a class="card-avatar">
            <img :src="memberData.profileImageUrl" class="card-avatar-img">
          </a>

          <div class="card-user">
            <div class="card-user-name">
              <a href="#">{{ memberData.fullName }}</a>
            </div>
            <span>
              <a :href="profileUrl">
                <span>{{ memberData.username }}</span>
              </a>
            </span>
          </div>

          <div class="card-stats">
            <ul class="card-stats-list">
              <li class="card-stats-item">
                <a href="#">
                  <span class="card-stats-key">Watched</span>
                  <span class="card-stats-val">{{ counts.watched }}</span>
                </a>
              </li>
              <li class="card-stats-item">
                <a href="#">
                  <span class="card-stats-key">Movie list</span>
                  <span class="card-stats-val">{{ counts.unwatched }}</span>
                </a>
              </li>
              <li class="card-stats-item">
                <a href="">
                  <span class="card-stats-key">Following</span>
                  <span class="card-stats-val">{{ counts.following }}</span>
                </a>
              </li>
              <li class="card-stats-item">
                <a href="#">
                  <span class="card-stats-key">Followers</span>
                  <span class="card-stats-val">{{ counts.followers }}</span>
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
    'memberData',
    'index',
    'userFollows'
  ],

  data() {
    return {
      counts: {
        watched: 0,
        unwatched: 0,
        following: 0,
        followers: 0
      },
      following: false,
      canFollow: true
    }
  },

  created() {
    this.noFollowForLoggedOutUser(
      !localStorage.getItem('userId')
    );
  },

  watch: {
    userFollows() {
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
      if (this.memberData._id === localStorage.getItem('userId')) {
        this.canFollow = false;
      }
      // already following this user?
      else if (this.$store.getters.USER_FOLLOWS.indexOf(this.memberData._id) > -1) {
        this.following = true;
      }
    },

    noFollowForLoggedOutUser(token) {
      // prevent logged out user from following anyone
      if (token) {
        this.canFollow = false;
      }
    }
  },

  computed: {
    heroBackgroundCssProp() {
      let prop = 'none';
      if (this.memberData.heroImageUrl) {
        prop = `url("${this.memberData.heroImageUrl}")`;
      }
      return 'background-image: ' + prop;
    },

    profileUrl() {
      return `/profile/${this.memberData.username}`
    },

    followBtnValue() {
      return this.following ? 'Unfollow' : 'Follow';
    }
  }
}
</script>


<style scoped>

</style>