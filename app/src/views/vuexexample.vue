<template>
  <div class="vuexexample">
    <input type="text" v-model="name" @keyup="greeting(name)">
    <p>{{ customGreeting }}</p>
  </div>
</template>


<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import * as types from '../store/types';

export default {
  name: 'vuexexample',
  data () {
    return {
      name: 'World'
    }
  },

  methods: {
    ...mapActions({
      greeting: types.UPDATE_GREETING
    })
  },

  computed: {
    ...mapGetters({
      customGreeting: types.CUSTOM_GREETING
    })
  }
}
</script>


<style scoped>

</style>
