<template>
  <div class="test">
    <h1>Hello someline-table 2!</h1>
    <h2>Hello someline-table 2 ! YEAH!</h2>
    <input v-model="name" placeholder="Name" />
  </div>
</template>

<script>
export default {
  name: 'test',

  data () {
    return {
      name: 'world',
    }
  },
}
</script>

<style scoped>
.test h1 {
  color: #40b883;
}
</style>
