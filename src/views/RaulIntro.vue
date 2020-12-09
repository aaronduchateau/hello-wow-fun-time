<template>
  <div class="hello">
    <br /><br />
    <p class="maxWidth500Center">The following clip was released on Dec 7th, 2020 by</p>
    <h1>Raoul Pal</h1>
    <p class="maxWidth500Center">
      Raoul Pal was co-head of <b>hedge fund</b> sales in equities and equity derivatives
      at <b>Goldman Sacks</b> in Europe.
      <br /><br />
      Raoul Pal is interesting because although he comes from the world of traditional
      finance, he is extremely bullish (i.e. he has a postive outlook) on Bitcoin.
       <br /><br />
       Some of these concepts may seem a little complicated, but I am sharing this particular resource because i feel as though it does a good job of summarazing where we are at in this particular point in history, and outlines why that matters for Bitcion.
    <br /><br />
    Do not worry if you don't understand everything but try to understand the broader concepts, and it will be a good basis moving forward.
    </p>
    <br /><br />
    <a class="btn btn-blue" v-on:click="onNavigateBegin()">Next</a>
  </div>
</template>

<script>
export default {
  name: "RaulIntro",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("raul-video");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
