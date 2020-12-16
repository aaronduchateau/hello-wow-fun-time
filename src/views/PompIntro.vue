<template>
  <div class="hello">
  
    <h1>Concepts</h1>
    <h2>Dollar cost Averaging</h2>
    <p class="maxWidth500Center">
        (DCA) is an investment strategy in which an investor divides up the total amount to be invested across periodic purchases of a target asset in an effort to reduce the impact of volatility on the overall purchase. ... Dollar-cost averaging is also known as the constant dollar plan.
    </p>
    <br />
     <h2>Market Cap</h2>
    <p class="maxWidth500Center">
        The number of shares (or 'coins') multipled by the number of those shares. This is a metric that is used to evaluate the value of an asset. 
    </p>
    <br />
     <h2>2% Inflation Targets</h2>
    <p class="maxWidth500Center">
        Since 2012, the U.S. Federal Reserve has targeted inflation at 2% as measured by PCE inflation. Keeping inflation low is one of the Federal Reserve's dual mandate objectives, along with stable, low unemployment levels.
    </p>
    <br />
     <h2>Financial Asymmetry</h2>
    <p class="maxWidth500Center">
        Asymmetric information, also known as "information failure," occurs when one party to an economic transaction possesses greater material knowledge than the other party. This typically manifests when the seller of a good or service possesses greater knowledge than the buyer; however, the reverse dynamic is also possible. Almost all economic transactions involve information asymmetries.
    </p>
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
      this.$router.push("pomp-video");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
