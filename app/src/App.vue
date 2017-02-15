<template>
  <div id="app">
    <navigation></navigation>
    <container></container>
  </div>
</template>

<script>
import Navigation from './components/global/navigation';
import Container from './components/global/container';
import Login from './components/login/login';

export default {
  name: 'app',
  components: {
    Navigation,
    Container,
    Login
  },
  data() {
    return {

    }
  }
}
</script>

<style>
#app {

}
</style>
