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
      currentUser: {},
      members: [],
      follows: [],
      memberSearchTerm: '',
      error: {
        isVisible: false,
        message: ''
      }
    }
  },

  created() {
    this.fetchMembers();
    this.fetchCurrentUser();
  },

  methods: {
    fetchMembers() {
      this.$http.get('http://localhost:3000/api/users')
        .then(function(res) {
          this.fetchMemebersSuccess(res)
        })
        .catch(function(res) {
          console.log('failed to fetch members');
        })
    },
    fetchMemebersSuccess(res) {
      this.members = res.body;
    },

    fetchCurrentUser() {
      let token = localStorage.getItem('token');

      if (!token) { return }

      this.$http.get('http://localhost:3000/api/users/current',
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(function(res) {
          this.fetchCurrentUserSuccess(res)
          this.fetchFollows();
        })
        .catch(function(res) {
          console.log('failed to fetch current user');
        })
    },
    fetchCurrentUserSuccess(res) {
      this.currentUser = res.body;
    },

    fetchFollows() {
      this.$http.get(`http://localhost:3000/api/follows/${this.currentUser.id}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(function(res) {
          this.fetchFollowsSuccess(res)
        })
        .catch(function(res) {
          console.log('failed to fetch follows');
        })
    },
    fetchFollowsSuccess(res) {
      this.follows = res.body;
    }
  },

  computed: {
    filteredMembers() {
      let self = this;
      let matchableProps = ['username', 'fullName'];
      let results = [];

      // for each of the member properties we want to search against
      matchableProps.forEach((matchableProp, i) => {
        // store the results in a temporary array
        let tempArr = self.members.filter((member) => {
          // convert the member property value and the search string to lowercase
          // for case-insensitive comparison
          return member[matchableProp].toLowerCase().indexOf(self.memberSearchTerm.toLowerCase()) !== -1
        });
        // merge the new matches in to the cumulative results array
        // removing any duplicates at the same time
        results = results.concat(tempArr.filter((member) => {
          return results.indexOf(member) < 0;
        }));
      });

      return results;
    }
  }
}
</script>


<style scoped>

</style>
