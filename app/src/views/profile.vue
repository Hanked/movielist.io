<template>
  <div class="profile">
    <h1>{{ title }}</h1>
  </div>
</template>


<script>
export default {
  name: 'profile',
  data () {
    return {
      title: 'Profile Page'
    }
  }
}
</script>


<style scoped>
h1 {
  color: green;
}
</style>
