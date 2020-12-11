<template>
  <div class="hello">
    <h1>Bitcoin Going Mainstream</h1>
    <p class="maxWidth500Center">
      As in, Bitcoin is going mainstream...right now.
    </p>
    <br/><br/>
    <SimpleCard styleWidth="500px">
    <span>Wall Street Journal</span> - <span class="red-date">Dec 10, 2020</span>
    <h2>MassMutual Joins the Bitcoin Club With $100 Million Purchase</h2>
    <p class="maxWidth500Center">
      "Investment is latest sign of mainstream acceptance for upstart digital currency"
    </p>

    <a class="btn btn-blue" v-on:click="onNavigateBegin()">View</a>
    </SimpleCard>
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
    

  </div>
</template>

<script>
export default {
  name: "Mainstream",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("raul-intro");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
    display: block;
    margin-top: 20px;
}
.red-date {
    color: red;
    font-weight: bold;
}

</style>
