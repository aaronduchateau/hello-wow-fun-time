<template>
  <div class="hello">
    <h1>Core Concepts</h1>
    <h3>Macro Economics</h3>
    <p class="maxWidth500Center">
      The part of economics concerned with large-scale or general economic factors, such as interest rates and national productivity. 
    </p>
    <h3>Currency Debacement</h3>
    <p class="maxWidth500Center">
      This is the process by which a national currency (like the U.S. dollar), loses value over time, due to inlation or the failings of macro economics 
    </p>
     <h3>Central Banks</h3>
    <p class="maxWidth500Center">
      The national authority that conducts monetary policy, regulates banks, and provides financial services including economic research. Its goals are to stabilize the nation's currency, keep unemployment low, and prevent inflation. We also refer to this group as 'The Fed'
    </p>
    <h3>"The Death of Macro"</h3>
    <p class="maxWidth500Center">
      The concept that the way our Central Banks impliment monetary policy (macro economics) is flawed, and will have to be rethought in 2021 to save the economy.
    </p>
    <h3>Behavioral Based Economics and Incentive Systems</h3>
    <p class="maxWidth500Center">
      The best way for the Fed to jump start the economy again is to divy out precision level stimulus. Individuals and organizations may have access to different interest rates or financial aid (in real time) depending on thousands of data points that represent their financial situation. The way this stimulus will be managed (and distributed) will be through a digital currency.
    </p>
    <br /><br />
    <a class="btn btn-blue" v-on:click="onNavigateBegin()">Next</a>

  </div>
</template>

<script>
export default {
  name: "CoreConcepts",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("raul-intro");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
