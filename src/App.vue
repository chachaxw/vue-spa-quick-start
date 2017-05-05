<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import 'lib/flexible';

/* eslint-disable */
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'trans'
    };
  }
};
</script>

<style lang="scss">
@import 'style/reset';
</style>
