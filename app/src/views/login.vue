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
                  <div v-show="error.isVisible" class="notification is-danger">
                    {{ error.message }}
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
      password: '',
      error: {
        isVisible: false,
        message: ''
      }
    }
  },

  methods: {
    login() {
      this.$http.post('http://localhost:3000/api/users/authenticate',
        {
          email: this.email,
          password: this.password
        })
        .then(function(res) {
          this.handleSuccessResponse(res)
        })
        .catch(function(res) {
          this.handleErrorResponse(res)
        })
    },

    handleSuccessResponse(res) {
      this.error.isVisible = false;
      localStorage.setItem('token', res.body.id_token);
      localStorage.setItem('userId', res.body.user_id);
      localStorage.setItem('username', res.body.username);
      window.location.href = `/profile/${res.body.username}`
    },

    handleErrorResponse(res) {
      this.error.isVisible = true;

      if (res.status === 401) {
        this.error.message = res.body.message;
      } else {
        this.error.message = 'Please enter a password and a valid email address';
      }
    },

    cancel() {
      window.location.href = '/members'
    }
  }
}
</script>


<style scoped>

</style>