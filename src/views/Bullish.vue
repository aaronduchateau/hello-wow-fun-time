<template>
  <div class="hello">
    <h1>This is Bullish</h1>
    <p>This is just the twitter feed of some dude who finds bullish bitcoin shit and tweets about it. I love it.</p>
    <a data-width="500" class="twitter-timeline" href="https://twitter.com/thisisbullish?ref_src=twsrc%5Etfw">Tweets by thisisbullish</a>
    
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
