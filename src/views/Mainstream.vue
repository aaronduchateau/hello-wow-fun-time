<template>
  <div class="hello maxWidth500Center">
    <h1>Conclusion:</h1>
    <h2 style="max-width: 800px; margin: 0 auto">
      It is becoming increasingly difficult to make the argument that Bitcoin is not going
      mainstream. It will likely be part of your 401k, your plan with Fidelity, something
      that will be 'irresponsible' not to own. <br /><br />Soon Bitcoin will be
      <i>boring.</i>
    </h2>
    <br /><br />
    <p class="maxWidth500Center">
      You can buy before or after that happens. That part is up to you.
      <i
        >While I cannot offer financial advice, I am happy to help when i can. If you
        would like to have a conversation about the cryptocurrency ecosystem, please
        email:
        <a href="mailto:satoshidogomoto@gmail.com" target="_blank"
          >satoshidogomoto@gmail.com</a
        >, with attn: to Satoshi Dogomoto</i
      >

     
    </p> <br /><br /><h1>C'mon:</h1>
    <br /><br />
    <div class="hello-holder">
      <SimpleCard styleWidth="500px">
        <span>Northern Trust Website</span> - <span class="red-date">Dec 16, 2020</span>
        <h2>
          Standard Chartered and Northern Trust partner to launch Zodia, a cryptocurrency
          custodian for institutional investors
        </h2>
        <p class="maxWidth500Center">
          "13.1 Trillion dollars of custody. That's all you need to know. 13.1 Trillion"
        </p>

        <a
          class="btn btn-blue"
          href="https://www.northerntrust.com/united-states/pr/2020/standard-chartered-northern-trust-launch-zodia"
          target="_blank"
          >View</a
        >
      </SimpleCard>
      <br />
      <br />
      <br />
      <SimpleCard styleWidth="500px">
        <span>Wall Street Journal</span> - <span class="red-date">Dec 11, 2020</span>
        <h2>The Wealthy Are Jumping Into Bitcoin as Stigma Around Crypto Fades</h2>
        <p class="maxWidth500Center">
          "With Bitcoin surging more than 270% since March, the rich are ratcheting up
          investments in digital currencies and anticipating further gains."
        </p>

        <a
          class="btn btn-blue"
          href="https://www.bloomberg.com/news/articles/2020-12-11/bitcoin-btc-rich-investors-are-jumping-into-cryptocurrencies-as-stigma-fades"
          target="_blank"
          >View</a
        >
      </SimpleCard>
      <br />
      <br />
      <br />
      <SimpleCard styleWidth="500px">
        <span>Wall Street Journal</span> - <span class="red-date">Dec 11, 2020</span>
        <h2>Why the Winklevoss twins think bitcoin’s rally is different this time</h2>
        <p class="maxWidth500Center">
          “This is the most sophisticated investors, the smartest people in the room,
          buying the Bitcoin quietly,” said Tyler Winklevoss
        </p>

        <a
          class="btn btn-blue"
          href="https://www.cnbc.com/2020/12/11/why-the-winklevoss-twins-think-bitcoins-rally-is-different-this-time.html"
          target="_blank"
          >View</a
        >
      </SimpleCard>
      <br />
      <br />
      <br />
      <SimpleCard styleWidth="500px">
        <span>CNBC</span> - <span class="red-date">Dec 10, 2020</span>
        <h2>MassMutual Joins the Bitcoin Club With $100 Million Purchase</h2>
        <p class="maxWidth500Center">
          "Investment is latest sign of mainstream acceptance for upstart digital
          currency"
        </p>

        <a
          class="btn btn-blue"
          href="https://www.wsj.com/articles/massmutual-joins-the-bitcoin-club-with-100-million-purchase-11607626800"
          target="_blank"
          >View</a
        >
      </SimpleCard>
      <br />
      <br />
      <br />
      <SimpleCard styleWidth="500px">
        <span>Decrypt</span> - <span class="red-date">Dec 10, 2020</span>
        <h2>Grayscale Buys $266 Million of Bitcoin and $58 Million of ETH</h2>
        <p class="maxWidth500Center">
          "https://decrypt.co/51007/grayscale-buys-266-million-of-bitcoin-and-58-million-of-eth"
        </p>

        <a
          class="btn btn-blue"
          href="https://www.wsj.com/articles/massmutual-joins-the-bitcoin-club-with-100-million-purchase-11607626800"
          target="_blank"
          >View</a
        >
      </SimpleCard>
      <br />
      <br />
      <br />
      <SimpleCard styleWidth="500px">
        <span>CNBC</span> - <span class="red-date">Oct 8, 2020</span>
        <h2>
          Square buys $50 million in bitcoin, says cryptocurrency ‘aligns with company’s
          purpose’
        </h2>
        <p class="maxWidth500Center">
          "This represents about 1% of Square’s total assets as of the end of the second
          quarter of 2020."
        </p>

        <a class="btn btn-blue" v-on:click="onNavigateBegin()">View</a>
      </SimpleCard>
      <br />
      <br />
      <br />
  <h1>...there is so much more</h1>
    <h3>I'm trying to launch this site tonight, but trust me...stories about institutional money entering this new asset class have only just begun.</h3>
    </div>
    <br />
    <br />
    <a class="btn btn-blue" v-on:click="onNavigateBegin()">Next</a>
    <br /><br />
    <br />
    <br /><br />
  </div>
</template>

<script>
export default {
  name: "Mainstream",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("what-to-buy");
    },
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
.hello-holder {
  max-width: 450px;
  margin: 0 auto;
}
</style>
