<template>
  <div class="hello">
    <h1>Bitcoin Going Mainstream</h1>
    <p class="maxWidth500Center">As in, Bitcoin is going mainstream...right now.</p>
    <br /><br />
    <SimpleCard styleWidth="500px">
      <span>Wall Street Journal</span> - <span class="red-date">Dec 11, 2020</span>
      <h2>The Wealthy Are Jumping Into Bitcoin as Stigma Around Crypto Fades</h2>
      <p class="maxWidth500Center">
        "With Bitcoin surging more than 270% since March, the rich are ratcheting up investments in digital currencies and anticipating further gains."
      </p>

      <a class="btn btn-blue" href="https://www.bloomberg.com/news/articles/2020-12-11/bitcoin-btc-rich-investors-are-jumping-into-cryptocurrencies-as-stigma-fades" target="_blank">View</a>
    </SimpleCard>
    <br/>
    <br/>
    <br/>
    <SimpleCard styleWidth="500px">
      <span>Wall Street Journal</span> - <span class="red-date">Dec 11, 2020</span>
      <h2>Why the Winklevoss twins think bitcoin’s rally is different this time</h2>
      <p class="maxWidth500Center">
        “This is the most sophisticated investors, the smartest people in the room, buying the Bitcoin quietly,” said Tyler Winklevoss
      </p>

      <a class="btn btn-blue" href="https://www.cnbc.com/2020/12/11/why-the-winklevoss-twins-think-bitcoins-rally-is-different-this-time.html" target="_blank">View</a>
    </SimpleCard>
    <br/>
    <br/>
    <br/>
    <SimpleCard styleWidth="500px">
      <span>CNBC</span> - <span class="red-date">Dec 10, 2020</span>
      <h2>MassMutual Joins the Bitcoin Club With $100 Million Purchase</h2>
      <p class="maxWidth500Center">
        "Investment is latest sign of mainstream acceptance for upstart digital currency"
      </p>

      <a class="btn btn-blue" href="https://www.wsj.com/articles/massmutual-joins-the-bitcoin-club-with-100-million-purchase-11607626800" target="_blank">View</a>
    </SimpleCard>
    <br/>
    <br/>
    <br/>
    <SimpleCard styleWidth="500px">
      <span>Decrypt</span> - <span class="red-date">Dec 10, 2020</span>
      <h2>Grayscale Buys $266 Million of Bitcoin and $58 Million of ETH</h2>
      <p class="maxWidth500Center">
        "https://decrypt.co/51007/grayscale-buys-266-million-of-bitcoin-and-58-million-of-eth"
      </p>

      <a class="btn btn-blue" href="https://www.wsj.com/articles/massmutual-joins-the-bitcoin-club-with-100-million-purchase-11607626800" target="_blank">View</a>
    </SimpleCard>
    <br/>
    <br/>
    <br/>
    <SimpleCard styleWidth="500px">
      <span>Wall Street Journal</span> - <span class="red-date">Dec 10, 2020</span>
      <h2>MassMutual Joins the Bitcoin Club With $100 Million Purchase</h2>
      <p class="maxWidth500Center">
        "Investment is latest sign of mainstream acceptance for upstart digital currency"
      </p>

      <a class="btn btn-blue" v-on:click="onNavigateBegin()">View</a>
    </SimpleCard>
    <br/>
    <br/>
    <br/>
    <SimpleCard styleWidth="500px">
      <span>Wall Street Journal</span> - <span class="red-date">Dec 10, 2020</span>
      <h2>MassMutual Joins the Bitcoin Club With $100 Million Purchase</h2>
      <p class="maxWidth500Center">
        "Investment is latest sign of mainstream acceptance for upstart digital currency"
      </p>

      <a class="btn btn-blue" v-on:click="onNavigateBegin()">View</a>
    </SimpleCard>
    <br/>
    <br/>
    <br/>
    <br /><br />
  </div>
</template>

<script>
export default {
  name: "Mainstream",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("raul-intro");
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
</style>
