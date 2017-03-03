<template>
<div class="members">
  <section class="section main">
    <div class="container">
      <div class="columns">
        <div class="column is-9">
          <h1 class="title"></strong><slot></slot></strong></h1>
          <h2 class="subtitle">Follow our members for social film recommendations</h2>
        </div>

        <div class="column is-3">
          <div class="notification search is-primary">
            <input v-model="memberSearchTerm" class="input is-expanded" type="text" placeholder="Search">
          </div>
        </div>
      </div>

      <div class="columns is-multiline">
        <div v-for="(member, i) in filteredMembers" class="column is-one-quarter">
          <member
            :index="i"
            :followers-count="followCount('followee_id', member._id)"
            :following-count="followCount('follower_id', member._id)"
            :user-followees="userFollowees"
            :memberdata="member">
          </member>
        </div>
      </div>
    </div>
  </section>
</div>
</template>


<script>
import Member from './../components/global/member';

export default {
  name: 'members',

  components: {
    Member
  },

  data() {
    return {
      memberSearchTerm: ''
    }
  },

  created() {
    this.$store.dispatch('INIT_MEMBERS');
    this.$store.dispatch('INIT_FOLLOWS');
  },

  methods: {
    followCount(type, memberId) {
      let follows = this.$store.getters.FOLLOWS;
      let count = 0;

      follows.forEach((follow, i) => {
        if (follow[type] == memberId) {
          count++;
        }
      });

      return count;
    }
  },

  computed: {
    filteredMembers() {
      return this.$store.getters.FILTERED_MEMBERS(this.memberSearchTerm);
    },
    userFollowees() {
      return this.$store.getters.FOLLOWEES;
    }
  }
}
</script>
