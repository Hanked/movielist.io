<template>
  <div class="members">
    <button class="btn btn-primary" @click="increment(1)">Increment</button>
    <button class="btn btn-primary" @click="decrement(5)">Decrement</button>
    <p>count is {{ counter }}</p>
  </div>
</template>


<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import * as types from '../store/types';

export default {
  name: 'members',
  data () {
    return {

    }
  },

  methods: {
    ...mapActions({
      increment: types.COUNTER_INCREMENT,
      decrement: types.COUNTER_DECREMENT
    })
  },

  computed: {
    ...mapGetters({
      counter: types.DOUBLE_COUNTER
    })
  }
}
</script>


<style scoped>

</style>
