<template>
  <div class="hello">
    <br /><br />
    <p class="maxWidth500Center">The following clip was released on Dec 11th, 2020 by</p>
    <h1>Anthony Pompliano</h1>
    <p class="maxWidth500Center">
      <b>Anthony Pompliano</b> is an American entrepreneur and investor. He served in such companies as Facebook and Snapchat and he is a founder of Morgan Creek Digital Assets, an early-stage venture capital fund.
      <br /><br />
       </p>
       
        <h2 class="maxWidth500Center">In this video he talks about our current financial climate, and how it relates to Bitcoin in 2021</h2>
    <br /><br />
    <a class="btn btn-blue" v-on:click="onNavigateBegin()">Next</a>
      <br /><br />
  </div>
</template>

<script>
export default {
  name: "PompIntro",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("pomp-intro");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
