<template>
  <div class="hello">
    <h1>Donate</h1>
    <h3>Throw me a bone?</h3>
    <img src="../assets/doge_man.png" class="step-img-resource-dog" />
    <h3 class="maxWidth500Center">
      I don't know where this project is going, and that's part of what makes it awesome
    </h3>
    <br />
    <p class="maxWidth500Center">
      All I can tell you is that the information on this website took thousands of hours
      over many years to gather and offer to you. For as long as i can remember (in my
      adult life anyway) i've been passionate about this space.
    </p>
    <br />
    <p class="maxWidth500Center">
      I don't expect to recivee any donations, as the most important part of this mission
      is to get the information out to folks who need it. That being said, any donations
      will be used to continue the Satoshi Dogomoto mission. <br />
      <br /><b>He will not rest until every man woman and child own .01 BTC</b>.
      <br /><br />
      "Wow" <br />
    </p>
    <br />
    <div class="scan-holder">
        BTC<br/>
     <img src="../assets/btcq.png" class="step-img-resource-qr" />
     <span class="small-num">1CyNqTgisrjAySnVnxra9Z3KCSvZyF9Ept</span>
     </div>
<br /><br />
<div class="scan-holder">
        ETH<br/>
     <img src="../assets/ethq.png" class="step-img-resource-qr" />
     <span class="small-num">0x1213c485f06717Ffa7314D57260e989E32aB5Ab8</span>
     </div>


<br/><br/><br/>
    <p>To all of you out there, all my love, <br/><br/>and as always....</p><br/><br/>
     <img src="../assets/sig.png" class="step-img-resource-qr" />
     <br/><br/><br/><br/>
    
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
.step-img-resource-dog {
  border: 20px solid white;
  border-radius: 50%;

  width: 250px;
  height: 235px;
}

.scan-holder {
    background-color: black;
    padding: 30px;
    max-width: 350px;
    margin: 0 auto;
    border-radius: 28%;
    font-size: 40px;
    color: white;
    .small-num{
        font-size: 14px;
        font-weight: bold;
    }
}
</style>
