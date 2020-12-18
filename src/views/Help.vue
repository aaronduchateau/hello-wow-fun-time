<template>
  <div class="home maxWidth500Center">
    <br />
    <br />
    <b>Don't know where to start?</b>

   <br />
    <br />Take the time to complete 1-8 in the
    <a href="#/preamble" target="_blank">tutorial</a>, and I think you will start to
    understand how exciting it is to be alive right now! Everything is going to be different from what you used to know, in just a few short years. <br />
    <br />
    Have more questions? You can email me
    <a href="satoshidogomoto@gmail.com" target="_blank">here</a>.

    <div class="space80" />
    <div src="../assets/doge-thinks.png" class="doge">
      <div>
        <div class="btc-price-contain">
          One Bitcoin is <br />
          <h2 style="padding-left: 50px">${{ info }}</h2>
          <h1>WOW</h1>
        </div>
      </div>
    </div>
    <br /><br />
    <h3>
      "Boy, I sure did learn alot, but this all still seems kinda weird to me, I think i'm
      gunna stick with my <i>traditional investments </i> in 2021. After all, This Bitcoin stuff sounds complicated. At least we can count on those!"
     
    </h3>
    <br /><br />
    <p>Oh jesus...I thought we were done for the day!...</p>
    <br /><br />
    <br /><br />
    
    <a class="btn btn-blue" v-on:click="onNavigateBegin()">Next</a>
      <br/><br/><br/><br/>
    <br/><br/>
    <hr/>
    <br/><br/>  <br/><br/>
    <Donate />
    <br /><br />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Donate from '../views/Donate.vue'

export default {
  name: "Help",
  components: {Donate},
  data() {
    return { info: "loading..." };
  },
  methods: {
    onNavigateBegin: function () {
      this.$router.push("cash");
    },
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response.data.bpi.USD.rate));
  },
};
</script>

<style>
.doge {
  background-image: url("../assets/doge-thinks.png");

  background-repeat: no-repeat;
  width: 490px;
  height: 520px;
  min-width: 490px;
  min-height: 520px;
  max-width: 490px;
  max-height: 520px;
  margin: 0 auto;
  background-size: contain;
}

.btc-price-contain {
  text-align: left;
  padding-top: 45px;
  padding-left: 80px;
  line-height: 12px;
  font-size: 0.8em;
}

.bounce-enter-active {
  transform: scale(0);
  animation: bounce-in 0.5s 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
