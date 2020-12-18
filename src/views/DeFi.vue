<template>
  <div class="full-page-holder">
    <div class="instructions">
      <h1>Chapter 6:</h1>
      <div class="maxWidth500Center">
          <h2>The birth of DeFi:</h2>
        <h2>
          People have no idea how fast Decentralized Finance is going to be making it's
          entrance on the global stage.
        </h2>
        If it was a pizza in the oven, I would say the crust is <i>juuuust</i> about to
        start browning. We are watching the future of finance unfold infront of our eyes,
        and no one knows about it....yet. <br /><br />In 2017, When Bitcoin and Ethereum
        first started to make waves, we started to understand what Ethereum smart
        contracts were capable of. <b>Loans, Escrow, and Derivitives Markets, </b> could
        now be managed with a decentralized smart contract, and the best part was?
        <i>No banker required!</i> <br /><br />The problem however, was that all of the
        technology and tooling around the theoritical ideas had not been built yet. The
        'hype cart' was in front of the 'fundamentals horse'. <br /><br />
        While people try to make the definition of DeFi complex, to me Decentralized
        Finance is simply all the tooling around what Bitcoin and Ethereum have been able
        to do all along. <b>DeFi</b> is the <i>Google Chrome plugins</i>, digital wallet
        providers, lending schemas and liquidity pools that 'bridge the gap' for the
        normal user into the Bitcoin ecosystem. <br /><br />Think about it simply as all
        the 'software around the software' that simply wasn't ready in 2017.
        <br />
        <h2>O.k. that's cool, but why is that disruptive?</h2>
        Close your eyes for a minute and imagine if you will, that the same financial and
        lending instruments available to a hedge fund manager on <i>Wall Street</i>, are now
        available to an orphaned child in Rwanda with $20 in Bitcoin. <br /><br />
        Armed With Elon Musk's Star Link, and an old laptop computer, 'little Timmy' (or
        whatever the hypothetical kids name is) can now use that Bitcoin as collatoral to
        buy a second cow.<br />
        <br/>
        No paperwork, no rules, no b.s. If he has the collatoral, he gest the loan.

        <br />
        <br />
        <h2>
          Because the lending service <i>'little Timmy'</i> used was decentralized, he
          does not have to interface with a company. He can interface directly with a
          protocal which is hosted by millions of people world wide.
        </h2>
        <p>
          You cannot arrest, eliminate, jail, sue, or bankrupt a decentralized protocal.
          As long as the network continues to exist (and it will irregardless of the
          individual laws of any one country) Little Timmy get's his loan.
        </p>
        <h2>I'd say disruptive is an understatement.</h2>
        Of course we will have some gut check moments, and of course not all governments are just going to let this kind of thing fly...but it won't matter. The U.S. dollar is failing and (depending on where you live), a DeFi protocal may actually be your only choice as a dependable financial instrument.
        
    Not to mention (As we saw earlier), it would be 'Tech Sector Suicide' to ban crypto. The united states is not just going to hand over a trillion dollar tech sector to emergine markets.<br/><br/>It's over<br/><br/>
    
    The trojan horse is through the gates.
        <br /><br /><br />
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
      this.$router.push("core-concepts");
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
