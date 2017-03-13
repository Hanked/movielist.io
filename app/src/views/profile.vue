<template>
  <div class="profile">

    <section class="section main">
        <div class="container">
          <div class="columns">
            <div class="column is-3">

              <member
                :index="0"
                :followers-count="memberFollowersCount"
                :following-count="memberFollowingCount"
                :user-followees="userFollowees"
                :memberdata="member">
              </member>

              <div class="spacer"></div>
              <div class="box trending">
                <p><span class="title is-5">Activity</span> · <a href="#"><small>clear</small></a>
                <hr>
                <p class="trend-hashtag"><small><a href="#">dan86</a> watched <em>Goodfells</em> - 22m</small></p>
                <p class="trend-hashtag"><small><a href="#">dan86</a> watched <em>Bleed For This</em> - 1h</small></p>
                <p class="trend-hashtag"><small><a href="#">vdaltonbanks</a> recommended <em>Eternal Sunshine of a Spotless Mind</em> - 4h</small></p>
                <p class="trend-hashtag"><small><a href="#">elmesy</a> didn't like <em>Snowden</em> - 15h</small></p>
                <p class="trend-hashtag"><small><a href="#">maggy</a> watched <em>In the Loop</em> - Dec 15</small></p>
                <p class="trend-hashtag"><small><a href="#">hanked</a> recommended <em>Bad Santa 2</em> - Dec 13</small></p>
              </div>
            </div>


            <div class="column is-6">
              <add-movie></add-movie>
              <movie-list></movie-list>
            </div>


            <div class="column is-3">
              <div class="box">
                <p class="trend-title"><span class="title is-5">Recommendations</span> · <a href="#"><small>clear</small></a></p>
                <hr>
                <div class="columns">
                  <div class="column is-2 is-marginless">
                    <div class="image is-32x32">
                      <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5OTM0OTY5NF5BMl5BanBnXkFtZTgwMDcxOTQ3ODE@._V1_SX300.jpg">
                    </div>
                  </div>
                  <div class="column is-10">
                    <p class="recs-title">
                      <a href="#">
                        <strong>Captain Fantastic</strong>
                      </a>
                    </p>
                    <a class="button is-primary is-small">
                        Add
                    </a>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-2 is-marginless">
                    <div class="image is-32x32">
                      <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5OTM0OTY5NF5BMl5BanBnXkFtZTgwMDcxOTQ3ODE@._V1_SX300.jpg">
                    </div>
                  </div>
                  <div class="column is-10">
                    <p class="recs-title">
                      <a href="#">
                        <strong>Captain Fantastic</strong>
                      </a>
                    </p>
                    <a class="button is-primary is-small">
                        Add
                    </a>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-2 is-marginless">
                    <div class="image is-32x32">
                      <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5OTM0OTY5NF5BMl5BanBnXkFtZTgwMDcxOTQ3ODE@._V1_SX300.jpg">
                    </div>
                  </div>
                  <div class="column is-10">
                    <p class="recs-title">
                      <a href="#">
                        <strong>Captain Fantastic</strong>
                      </a>
                    </p>
                    <a class="button is-primary is-small">
                        Add
                    </a>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-2 is-marginless">
                    <div class="image is-32x32">
                      <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5OTM0OTY5NF5BMl5BanBnXkFtZTgwMDcxOTQ3ODE@._V1_SX300.jpg">
                    </div>
                  </div>
                  <div class="column is-10">
                    <p class="recs-title">
                      <a href="#">
                        <strong>Captain Fantastic</strong>
                      </a>
                    </p>
                    <a class="button is-primary is-small">
                        Add
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  </div>
</template>


<script>
import Member from './../components/global/member';
import AddMovie from './../components/profile/addMovie';
import MovieList from './../components/profile/movieList';

export default {
  name: 'profile',

  components: {
    Member,
    AddMovie,
    MovieList
  },

  data () {
    return {

    }
  },

  created() {
    this.$store.dispatch('FETCH_MEMBER', this.$route.params.userId);
  },

  computed: {
    member() {
      return this.$store.getters.MEMBER;
    },
    userFollowees() {
      return this.$store.getters.FOLLOWEES;
    },
    memberFollowingCount() {
      return this.$store.getters.MEMBER_FOLLOWEES.length;
    },
    memberFollowersCount() {
      return this.$store.getters.MEMBER_FOLLOWERS.length;
    }
  }
}
</script>


<style scoped>

</style>
