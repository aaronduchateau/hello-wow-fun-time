<template>
  <div class="full-page-holder">
    <div class="instructions">
      <h1>Pool Entry</h1>
      <div class="maxWidth500Center">
        <h2>This is step 3.</h2>
        The goal of this step is send the purchased balance from whatever exhange you
        choose to use <i>(i.e., kraken, coinbase, or bittrex)</i> to the wallet address
        <b>you now own</b> on metamask.<br />
        <br />
        <br /><br />
        <img src="../assets/coinbase.jpeg" class="step-img-resource img-small" />
        <img src="../assets/down-arrow.png" class="step-img-resource img-small rotate" />
        <img src="../assets/metamask.png" class="step-img-resource img-small" />

        <br /><br />
        <br /><br />
        Go ahead and open your metamask google chrome extension by clicking the little
        puzzle piece at the top right of your chrome browser, and then clicking the cute
        little fox<br />
        <br /><br />
        <img src="../assets/resource9.png" class="step-img-resource" />
        <br /><br />
        <br />
        Then copy the account address from the top of Metamask. It should say 'Account 1',
        and when you click it, then it should say 'copied'. This is your public wallet
        address, and is not a secret.<br />
        <br /><br />
        <img src="../assets/resource10.png" class="step-img-resource" />
        <br />
        <br /><br /><br />
        Now log into the exchange you purchased <b>ETH</b> <br />on and click the
        <b>SEND</b> button. An interface should pop up that has an address field, a note
        field, and an amount field (like the picture below).<br />
        <br /><br />
        <img src="../assets/resource11.png" class="step-img-resource" />
        <br /><br />
        <br /><br />
        <br /><br />
        Paste in the <b>wallet address</b> you just copied from your new Metamask wallet
        into the 'to' field. Then enter the amount of funds in ETH you would like to put
        in the pool (most likely the total amount of ETH you purchased). <br /><br />
        Take a deep breath and click send.
        <br /><br />
        Note: Most exchanges (these days) will not let you send a balance to an ETH
        addrress that doesn't exist. As long as you copied the correct value from
        metamask, and the exchanges interface didn't warn you that the address wasn't
        valid, the transaction will go through.

        <br />
        <br />
        In 1 to 10 minutes your <b>ETH balance</b> should magically appear in your very
        own Ethereum wallet on Metamask. <br /><br />
        You know 'actually own' your balance of Ethereum, and as long as you remember your
        backup phrase and do not share it with anyone, NOBODY on earth can take that
        balance away from you.
        <br />
        <br />
        Cool Right?
        <h2>
          Good Job Crypto Pioneer!
          <br />
          <br />You just did something 99% of folks do not understand. Way to level up,
          and welcome to the future! <br /><br />if you have completed this step you are
          now ready for some hands on help from Satoshi Dogomoto or one of his friends.
          Let them know you are ready to go!
        </h2>
        <br /><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepThree",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("step-two");
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

.img-small {
  max-width: 100px;
}

.rotate {
  transform: rotate(270deg);
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
