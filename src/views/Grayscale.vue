<template>
  <div class="full-page-holder">
    <div class="instructions">
      <h1>More Fundamentals</h1>
      <div class="maxWidth500Center">
        <h2>The performance of Grayscale trust (GBTC) in 2020</h2>  
        <p>Grayscale trust (GBTC) allows exposure to cryptocurrency assets under a traditional ticker symbol on the NYSE. Year-to-date GBTC is up over 100% and now holds over half a million bitcoin.</p>
        <br />
        <img class="instructions-img" src="../assets/gray.png" />
        <br />
         <br />
          <br />
         <br />
       
        <h2>The performance of Microstratgies in 2020</h2>  
        <p>MicroStrategy® Incorporated (Nasdaq: MSTR), the largest independent publicly-traded business intelligence company</p>
        <br />
        <img class="instructions-img" src="../assets/microOne.png" />
        <br />
        <br /><br /><br />
        It's not a secret, you just have to follow the smartest guys in the room. <br />
         <br /><br />
        <img class="instructions-img" src="../assets/microTwo.png" />
        <br /><br />
        <br /><br />
        All of the purchasing done by Grayscale and Microstrategies thus far has been <b>over the counter</b>. This means they are buying Bitcoin that has been set aside in a special reservere and was not currently on the market. Because of this, these two orgs can make massive purchases without moving the market. That only lasts as long as there is reserve supply, however. Every metric available currently suggests that those <b>reserves are running out. </b><br />
        <br />
        During the last week of June 2020, Grayscale had purchased Bitcoin (BTC) about 3x faster, on average, than the cryptocurrency’s miners could actually generate new blocks. 184 million of it's reserves were purchased in the last week of June alone. There is a massive supply shortage for Bitcoin, and that will trigger a price movement as soon as off the market reserves dry up. 
<h2>There is no way around it, as long as these fundamentals hold, the days of Bitcoin under 20k are numbered</h2>  
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grayscale",
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
