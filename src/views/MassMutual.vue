<template>
  <div class="full-page-holder">
    <div class="instructions">
      <h1>Chapter 5:</h1>
      <div class="maxWidth500Center">
        <h2>The Mass Mutual buy:</h2>
        <h2>
          This is perhaps the most important event for Bitcoin in 2020...and it just
          happened.
        </h2>
        
        <p>
          <b>From Bloomberg on Dec 13th, 2020</b> - <br /><br />"A recent investment in
          Bitcoin by Massachusetts Mutual Life Insurance Co. highlights the potential for
          additional institutional demand for the cryptocurrency in coming years,
          according to JPMorgan Chase & Co." <br /><br />
          "The $100 million purchase suggests adoption of Bitcoin is spreading from family
          offices and wealthy investors to insurance firms and pension funds, strategists
          including Nikolaos Panigirtzoglou said in a note Friday. The latter two are
          unlikely to ever make high allocations, but even a small shift toward the
          cryptocurrency could be significant, according to the strategists."
          <br /><br />
          “MassMutual’s Bitcoin purchases represent another milestone in the Bitcoin
          adoption by institutional investors,” the strategists said. “One can see the
          potential demand that could arise over the coming years as other insurance
          companies and pension funds follow MassMutual’s example.”<br /><br />
        </p>
        <h1>THINK ABOUT WHAT THIS MEANS</h1>
       
        <h2>
          A life insurance company who's business IS data driven risk assesment, just put
          1% of it's net worth into Bitcoin
        </h2>
        <p>
          This means that they understand the risks and the benefits, and the data is
          telling them to buy. This is a massive buy signal to other institutions that
          hedging into Bitcoin is not only a reasonable thing to do, but a RESPONSIBLE
          thing to do as we enter 2021. Wow.
        </p>
         <br /><br />
        <a class="btn btn-blue" v-on:click="onNavigateBegin()">Next</a>
        <br /><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regs",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("defi");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.full-page-holder {
  margin-left: 0px;
}
.instructions-img {
  max-width: 100%;
}

.instructions {
  width: 100%;
}
.btn {
  display: block;
  margin-top: 20px;
}
.red-date {
  color: red;
  font-weight: bold;
}
</style>
