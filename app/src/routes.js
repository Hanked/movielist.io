import VueRouter from 'vue-router';

import Members from './views/Members';
import Profile from './views/Profile';
import Login from './views/Login';
import Register from './views/register';

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
    },
    {
      name: 'Register',
      path: '/Register',
      component: Register,
      props: true
    }
  ],

  mode: 'history',
  linkActiveClass: 'is-active'
});
