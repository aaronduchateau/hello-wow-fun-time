<template>
  <div class="full-page-holder">
    <div class="instructions">
      <h1>Pool Entry</h1> 
      <div class="maxWidth500Center">
        <h2>This is step 1.</h2>
        The goal of this step is aquire Ethereum (ticker symbol: <b>ETH</b>) using a
        credit card or a bank account. <br />
        <br />
        Note: <b>ETH</b> is different than <i><b>ETC</b> (Ethereum Classic)</i>).
       
        <br /><br />
        Here is an example of the right thing.<br />
        <br />
        <img class="instructions-img" src="../assets/ETH.png" />
        <br />
        <br /><br /><br />
        Here is an example of the wrong thing. <br />
        <img class="instructions-img" src="../assets/ETC.png" />
        <br /><br />
        <br /><br />
        While <b>ETH</b> is not the thing you will be holding long term, you will still need it as the 'entry
        point' currency to be included in the pool. <br />
        <br />
        In order to do this you are going to need to use an <b>Exchange</b> to turn money
        from your bank account into ETH. In order to send your ETH to the pool, you will
        likely need to use: <br /><br />
        <a href="https://r.kraken.com/c/2601920/696580/10583" target="_blank">Kraken</a>,
        Coinbase, or
        Bittrex. <br /><br />

        You might be tempted to google another exchange to buy your <b>ETH</b>, but
        <i>BEWARE</i>, services like Paypal, CashApp, and Robinhood do NOT allow you to
        send your <b>ETH</b> oustide of thier systems. <br /><br />
        Bastards.<br /><br />
        Remember, if you are not able to send your ETH off the exchange, you do not
        actually 'own' your cryptocurrency, and you will not be able to complete this
        exercise. <br />
        <br /><br />
        <b>Note:</b> If you are linking a bank account, recieving your ETH may take 3-5
        days. That's because banks are slow. While many of these exchanges have different
        characteristics, we <i>currently</i> believe that the
        <a href="https://r.kraken.com/c/2601920/696580/10583" target="_blank">Kraken</a> exchange will get you an available balance the fastest. <br /><br />
        Regardless of the exchange you choose (from the approved 3 above) the process will
        be mostly the same. You will need to verify your identiy with photo id (just like
        you are getting a new bank account), hook up some form of payment system, and
        'pull the trigger' on purchasing some ETH.
        <br /><br />
        <i
          >A photo of how that might look before you purchase may be something like
          this:</i
        >
      </div>
      <br />

      <hr />
      <br /><br />
      <img src="../assets/resource5.png" class="step-img-resource" />
      <br /><br />
      <hr />
      <br /><br />
      <img src="../assets/resource6.png" class="step-img-resource" />

      <br /><br />
      <SimpleCard styleWidth="500px">
        <h2>Good Job! That wasn't so bad was it?</h2>
        <p>( Let's be honest, It kinda was.... )</p>

        <a class="btn btn-blue" v-on:click="onNavigateBegin()">Do Step 2</a>
      </SimpleCard>

      <br /><br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Mainstream",
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
