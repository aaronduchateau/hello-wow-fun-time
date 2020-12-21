<template>
  <div class="hello maxWidth500Center">
    <br /><br />
    <p class="maxWidth500Center" style="border: 1px solid red !important; display: block; padding: 10px">
      Disclaimer: I am not a financial advisor and this is not financial advice. I am simply a <a href="/#/donate">shiba inu</a> who obsessively pays attention to this space, and any decisions you make regarding the information you recieve on this website should be discussed with a licensed financial advisor.
    </p>
    <h1>What to own</h1>
    <h3>1) Bitcoin (BTC)</h3>
  <p class="maxWidth500Center">
      This is going to be the first entry point for institutional money into the space. The first round of regulations are going to be crafted around a legal understanding of what Bitcoin is, and how it is defined. While you will see some "Ethereum first" Investors, most of the asset management companies and hedgefunds are going to go all in on bitcoin first.
  </p>
   <h3>2) Ethereum (ETH)</h3>
  <p class="maxWidth500Center">
      Ethereum is likely going to be the 'winner' blockchain when it comes down to the preferred ecosystem to launch <b>dApps</b>. dApps (or decentralized applications) are the projects that run in the ecosystem of decentralized finance. Ethereum is complex, and the regulations surrounding what it is capable of are going to be more complex and take longer to litigate / articulate (from a legal perspective). 
  </p>
 
     <h3>3) A basket of DeFi projects</h3>
    <p class="maxWidth500Center">
      <i>Navigating this space is extremely complex, and you should not visit invidual websites and try to make investment decisions based off of 'what looks cool'. Exposure to this part of the cryptocurrency ecosystem can have a massive upside, but picking the 'winners' is extremely difficult.</i>
      
    </p>
    <br />
     <h3>4) Probably some other shit</h3>

 <br /><br /> 
 <p class="maxWidth500Center" style="border: 1px solid red !important; display: block; padding: 10px">
     If you are ready to purchase, I recommend buying Bitcoin on <a href="https://r.kraken.com/c/2601920/696580/10583" target="blank" id="696580">Kraken</a> because the turn around time is quick, and you are allowed to send what you purchase off of their system and onto your own hardware wallet. Just like with real gold, if you don't actualy 'own' it, you just own a record in a database that says you do. Not your keys, not your crypto!
    </p>
    <br /><br /> <h3>....</h3><br /><br />
    <p class="maxWidth500Center">
      <i>While I cannot offer financial advice, I am happy to help when i can. If you would like to have a conversation about the cryptocurrency ecosystem, please email: <a href="satoshidogomoto@gmail.com" target="_blank">satoshidogomoto@gmail.com</a>, with attn: to</i>
      <br /><br /><br /><br />
      
      <img src="../assets/sig.png" class="step-img-resource-qr" />
     <br />
    </p>
   
   
 <div>
      <i>Satoshi Dogomoto</i></div> 
      <br /><br />  
       <a class="btn btn-blue" v-on:click="onNavigateBegin()">Next</a>
    <br /><br />
      <br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
export default {
  name: "PompVideo",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("help");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
