import VueRouter from 'vue-router';

let routes = [
  {
    path: '/members',
    component: require('./views/members')
  },
  {
    path: '/profile',
    component: require('./views/profile')
  }
];

export default new VueRouter({
  routes,
  linkActiveClass: 'is-active'
});
