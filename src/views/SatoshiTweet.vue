<template>
  <div class="hello">
    <h1>Satoshi Dogomoto</h1>
    <p>Satoshi Dogomoto himself. He isn't as active as we would like to be yet, but he'll get there.</p>
    <a data-width="500" class="twitter-timeline" href="https://twitter.com/FoisGrasFauxPas?ref_src=twsrc%5Etfw">Tweets by thisisbullish</a>
    
  </div>
</template>

<script>
export default {
  name: "Bullish",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("raul-intro");
    },
  },
  mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      document.head.appendChild(recaptchaScript)
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
