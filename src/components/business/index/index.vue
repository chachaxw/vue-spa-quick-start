<template lang="html">
  <div>
    <h1>{{home}}</h1>
    <section1 />
  </div>
</template>

<script>
  import section1 from './section1';

  export default {
    data() {
      return {
        home: 'Business Home',
      };
    },
    components: { section1 },
  };
</script>

<style>
  h1 {
    text-align: center;
  }
</style>
