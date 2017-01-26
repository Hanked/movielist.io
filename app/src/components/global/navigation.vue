<template>
<div class="navigation">
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a
          v-for="(navItem, i) in navLeftWithActiveState"
          :href="navItem.url"
          class="nav-item is-tab"
          :class="[navItem.active ? activeClass : '']">
            {{ navItem.name }}
        </a>
      </div>

      <div class="nav-center">
        <a class="nav-item" href="/">
          <span class="icon">
            <i class="fa fa-film"></i>
          </span>
        </a>
      </div>

      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div class="nav-right nav-menu">
        <span class="nav-item">
          <a
            v-for="(navItem, i) in navRightWithSessionState"
            class="button"
            :href="navItem.url"
            @click="navItemClickHandler(navItem.name, $event)">
            <span>{{ navItem.name }}</span>
          </a>
        </span>
      </div>
    </div>
  </nav>
</div>
</template>


<script>
export default {
  name: 'navigation',

  data() {
    return {
      navLeft: [
        {
          name: "Members",
          url: "/members",
          active: false
        },
        {
          name: "Profile",
          url: `/profile/${localStorage.getItem('username')}`,
          active: false
        }
      ],
      navRight: [
        {
          name: "Login",
          url: "/login",
          activeSession: false
        },
        {
          name: "Register",
          url: "/register",
          activeSession: false
        },
        {
          name: "Account",
          url: "/account",
          activeSession: true
        },
        {
          name: "Logout",
          url: "/logout",
          activeSession: true
        }
      ],
      activeClass: "is-active"
    }
  },

  methods: {
    navItemClickHandler(navItemName, e) {
      if (navItemName === 'logout') {
        e.preventDefault();
        this.killSession();
      }
    },

    killSession() {
      let sessionItems = ['userId', 'username', 'token'];

      for (let i=0; i<sessionItems.length; i++) {
        localStorage.removeItem(sessionItems[i]);
      }

      window.location.href = '/members';
    }
  },

  computed: {
    navLeftWithActiveState() {
      let activeItemIndex = this.navLeft.findIndex(
        x => x.name === this.$route.name
      );

      // handle root domain like this for now
      if (activeItemIndex !== -1) {
        this.navLeft[activeItemIndex].active = true;
      }

      return this.navLeft;
    },

    navRightWithSessionState() {
      let hasActiveSession = this.hasActiveSession;

      let navRight = this.navRight.filter(function(navItem) {
        return navItem.activeSession == hasActiveSession;
      });
      return navRight;
    },

    hasActiveSession() {
      let hasActiveSession = localStorage.getItem('token') ? true : false;
      return hasActiveSession
    }
  }
}
</script>


<style scoped>

</style>
