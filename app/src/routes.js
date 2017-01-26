import VueRouter from 'vue-router';

import Members from './views/Members'
import Profile from './views/Profile'

export default new VueRouter({
  routes: [
    {
      name: 'Members',
      path: '/members',
      component: Members,
      props: true
    },
    {
      name: 'Profile',
      path: '/profile/:userId',
      component: Profile,
      props: true
    }
  ],

  mode: 'history',
  linkActiveClass: 'is-active'
});
