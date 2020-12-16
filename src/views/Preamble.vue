<template>
  <div class="hello">
    <h1>Preamble</h1>
    <h3>My plea for your attention:</h3>
    <p class="maxWidth500Center">
      Since Bitcoin was invented in 2009, I have slowly watched the exact events for which it was designed predictably unfold over the last 10 years. As it stands, I am concerned about the welfare of my friends and family, and the goal of this resource is to hopefully lay out (in the most complete and reasonable way possible), why hedging into Bitcoin could be the most important decision you make as you enter 2021.
    </p>
    <h3>My Motive</h3>
    <p class="maxWidth500Center">
      I am not selling a product, nor do i purpose to benefit from disseminating this information in any meaninful way. If you recieve a benefit from the information on this website, I would simply ask that you consider donating to expand the reach of this project. The resources will undoubtadly go back into perpetuating the agenda of this program.
    </p>
     <h3>Keep an open mind</h3>
    <p class="maxWidth500Center">
      The concepts you are about to be exposed to will require you to redefine the way you percieve macro economics, and potentially the way you view the world. Once it 'clicks', there is no going back. You have been warned.
    </p>
   <br/><br/><br/>
    <a class="btn btn-blue" v-on:click="onNavigateBegin()">Next</a>
     <br/><br/><br/>
     

  </div>
</template>

<script>
export default {
  name: "Preamble",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("pomp-intro");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
