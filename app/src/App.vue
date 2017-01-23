<template>
  <div id="app">
    <navigation></navigation>
    <container></container>
  </div>
</template>

<script>
import Navigation from './components/global/navigation';
import Container from './components/global/container';

export default {
  name: 'app',
  components: {
    Navigation,
    Container
  }
}
</script>

<style>
#app {

}
</style>
