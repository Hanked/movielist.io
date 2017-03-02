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
                    <div v-show="errorIsVisible" class="notification is-danger">
                      {{ errorMsg }}
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

  data() {
    return {
      fullName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },

  methods: {
    register() {
      // validate for empty fields
      let fields = this._data;

      for (var fieldName in fields) {
        if (!fields[fieldName]) {
          this.$store.commit('ERROR_IS_VISIBLE', true);
          this.$store.commit('SET_ERROR_MSG', 'Please complete all fields');
          return;
        }
      }

      if (!this.passwordsMatch()) {
        this.$store.commit('ERROR_IS_VISIBLE', true);
        this.$store.commit('SET_ERROR_MSG', 'Your passwords do not match, please try again');
        return;
      }

      this.$store.dispatch('REGISTER', {
        fullName: this.fullName,
        username: this.username,
        email: this.email,
        password: this.password
      })
    },

    cancel() {
      window.location.href = '/members'
    },

    passwordsMatch() {
      return this.password == this.confirmPassword;
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
