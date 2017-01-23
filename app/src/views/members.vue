<template>
  <div class="members">
    <h1>{{ title }}</h1>
  </div>
</template>


<script>
export default {
  name: 'members',
  data () {
    return {
      title: 'Members Page'
    }
  }
}
</script>


<style scoped>
h1 {
  color: blue;
}
</style>
