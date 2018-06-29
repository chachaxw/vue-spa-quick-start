<template>
  <div class="user-info">
    <img src="../../assets/logo.png">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'user-info',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    mounted() {

    },
  };
</script>

<style lang="scss" scoped>
  @import '../../style/flexible';
  img {
    display: block;
    width: pr(200);
    margin: pr(400) auto pr(50);
  }
  h1 {
    text-align: center;
  }
</style>
