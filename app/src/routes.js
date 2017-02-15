import VueRouter from 'vue-router';

import Members from './views/Members';
import Profile from './views/Profile';
import Login from './views/Login';

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
    },
    {
      name: 'Login',
      path: '/login',
      component: Login,
      props: true
    }
  ],

  mode: 'history',
  linkActiveClass: 'is-active'
});
