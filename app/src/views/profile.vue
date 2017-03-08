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
                :user-followees="memberFollowees"
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
              <div class="notification search is-primary">
                <p class="control has-addons">
                  <input class="input is-expanded" type="text">
                  <a class="button is-primary is-active">
                    Add
                  </a>
                </p>
              </div>

              <div class="box">
                <div class="tabs is-boxed">
                  <ul>
                    <li class="is-active">
                      <a>
                        <span class="icon is-small"><i class="fa fa-list"></i></span>
                        <span>Movie List</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span class="icon is-small"><i class="fa fa-tv"></i></span>
                        <span>Watched</span>
                      </a>
                    </li>
                  </ul>
                </div>


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

export default {
  name: 'profile',

  components: {
    Member
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
    memberFollowees() {
      return this.$store.getters.MEMBER_FOLLOWEES;
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
