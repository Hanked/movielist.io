<template>
  <div class="login">

    <section class="hero is-fullheight is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-4 is-offset-4">
              <div class="login-container">
                <h1 class="title">
                  Login
                </h1>
                <div class="box">
                  <div v-show="errorIsVisible" class="notification is-danger">
                    {{ errorMsg }}
                  </div>
                  <label class="label">Email</label>
                  <p class="control">
                    <input @keydown.enter="login" v-model="email" class="input" type="text">
                  </p>
                  <label class="label">Password</label>
                  <p class="control">
                    <input @keydown.enter="login" v-model="password" class="input" type="password">
                  </p>
                  <hr>
                  <p class="control">
                    <button @click="login" class="button is-primary">Login</button>
                    <button @click="cancel" class="button is-default">Cancel</button>
                  </p>
                </div>
                <p class="has-text-centered">
                  <a href="/register">Register</a> · <a href="#">Forgot password</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>


<script>
export default {
  name: 'login',

  data () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    login() {
      this.$store.dispatch('LOGIN', {
        email: this.email,
        password: this.password
      })
    },
    cancel() {
      window.location.href = '/members';
    }
  },

  computed: {
    errorMsg() {
      return this.$store.getters.ERROR_MSG;
    },
    errorIsVisible() {
      return this.$store.getters.ERROR_IS_VISIBLE;
    }
  }
}
</script>
