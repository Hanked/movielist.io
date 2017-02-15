<template>
  <div class="register">

    <section class="hero is-fullheight is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-4 is-offset-4">
                <div class="register-container">
                  <h1 class="title text-is-centered">
                    Create an account
                  </h1>
                  <div class="box">
                    <div v-show="error.isVisible" class="notification is-danger">
                      {{ error.message }}
                    </div>
                    <label class="label">Full Name</label>
                    <p class="control">
                      <input @keydown.enter="register" v-model="fullName" class="input" type="text">
                    </p>
                    <label class="label">Username</label>
                    <p class="control">
                      <input @keydown.enter="register" v-model="username" class="input" type="text">
                    </p>
                    <label class="label">Email</label>
                    <p class="control">
                      <input @keydown.enter="register" v-model="email" class="input" type="text">
                    </p>
                    <hr>
                    <label class="label">Password</label>
                    <p class="control">
                      <input @keydown.enter="register" v-model="password" class="input" type="password">
                    </p>
                    <label class="label">Confirm Password</label>
                    <p class="control">
                      <input @keydown.enter="register" v-model="confirmPassword" class="input" type="password">
                    </p>
                    <hr>
                    <p class="control">
                      <button @click="register" class="button is-primary">Register</button>
                      <button @click="cancel" class="button is-default">Cancel</button>
                    </p>
                  </div>
                  <p class="has-text-centered">
                    <a href="/login">Already have an account</a>
                  </p>
                </div>
              </template>

            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>


<script>
export default {
  name: 'register',

  data () {
    return {
      fullName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: {
        isVisible: false,
        message: ''
      }
    }
  },

  methods: {
    register() {
      if (!this.passwordsMatch()) {
        this.error.isVisible = true;
        this.error.message = 'Your passwords do not match, please try again';
        return;
      }

      this.createUserApiRequest();
    },

    createUserApiRequest() {
      this.$http.post('http://localhost:3000/api/users',
        {
          fullName: this.fullName,
          username: this.username,
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
        this.error.message = 'Please complete all fields and check that your details are valid';
      }
    },

    cancel() {
      window.location.href = '/members'
    },

    passwordsMatch() {
      return this.password == this.confirmPassword;
    }
  }
}
</script>


<style scoped>

</style>
