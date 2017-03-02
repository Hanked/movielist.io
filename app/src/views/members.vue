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
            :member-follows="follows"
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
  },

  computed: {
    filteredMembers() {
      return this.$store.getters.FILTERED_MEMBERS(this.memberSearchTerm);
    },
    follows() {
      return this.$store.getters.FOLLOWS;
    }
  }
}
</script>
