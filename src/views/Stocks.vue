<template>
  <div class="hello maxWidth500Center">
    <br /><br />
    <h1>Stocks are Sketch</h1>
    <p class="maxWidth500Center">
      Not only were we in a tech bubble <i>before</i> Covid hit, after the initial 2020
      market crash (following the first round of covid related job reports), something
      very strange happened. A sort of 'greed fueled mania' began to accumulate momentum
      around the floor. While traditional Macro economic models would have pointed to
      further downside, the opposite began to occur.
    </p>
    <h3>I believe this will be remembered as the 'Great Decoupling'</h3>
    <p>
      If you bought stocks during a time when the fundamentals of the economy had
      seperated from the stock market, and record inflation was on the table...
    </p>
    <br />
    <p>Well, I hate to say it but...you're gambling</p>

    <h3>This Shiba Inu didn't do that</h3>
    <p class="maxWidth500Center">
      Tesla is now evaluated at Germany's entire automotive industry, and no one
      domestically has a job to buy luxury vehicles<br /><br /><b
        >Don't get me wrong, I have a <b>Nikola Tesla</b> portrait in my room (and in my
        bathroom).</b
      ><br /><br />....sometimes you just have to put your Warren Buffet hat on....look at
      the fundamentals...and say 'this is fucked'.<br /><br />
    </p>
    <br /><br /><br /><br /><br /><br />
    But then again, that's just my 'opinion or whatever', man,
    <br /><br />
     <img src="../assets/sig.png" class="step-img-resource-qr" />

    <p class="maxWidth500Center"></p>

    <br /><br />
    <br /><br />
    <a class="btn btn-blue" v-on:click="onNavigateBegin()">Next</a>
  </div>
</template>

<script>
export default {
  name: "Cash",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("real-estate");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
