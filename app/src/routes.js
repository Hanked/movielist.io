import VueRouter from 'vue-router';

import Members from './views/Members'
import Profile from './views/Profile'

export default new VueRouter({
  routes: [
    {
      path: '/members',
      component: Members
    },
    {
      path: '/profile',
      component: Profile
    }
  ],

  mode: 'history',
  linkActiveClass: 'is-active'
});
