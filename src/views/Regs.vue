<template>
  <div class="full-page-holder">
    <div class="instructions">
      <h1>What if they ban bitcoin?</h1>
      <div class="maxWidth500Center">
        <h2>The regulations are coming, but the reality is...they can't ban it.</h2>
        <img class="instructions-img" src="../assets/mnuchin.jpg" />
        <p>
          The SEC is an extremely tricky place when it comes to cryptocurrency regulation.
          On one hand you have a superior, non-depreciating asset that threatens the
          soverienty of the U.S. dollar. On the other hand we are on the brink of a
          technological revolution (the technology of which) is as disruptive as internet
          was in the 90's. If the U.S. were to outright ban cryptocurrency it would
          castrate the United States' abiity to remain competative in the techsector. This
          isn't an option. <br /><br />
          <i
            >Imagine all of the hip tech kids from Palo Alto packing up their electric VW
            buses and getting out of dodge. Without those tech kids, American GDP takes a
            nose dive. Steve Mnuchin and Janet Yellin understand this, and their ability
            to impose any kind of meaningful regulation into this space that could stiffle
            innovation will not be tolerated.</i
          ><br /><br />

          <b
            >That being said, the rules will change (probably within the next few weeks).
            It is likely the U.S. regulations will look very similar to the French
            policies which were just announced on Dec 8,2020.</b
          >
          <br /><br />The days of sending cryptocurrency to and from an exchange without
          providing a drivers license are probably over. Since most exchanges already have
          KYC policies in place (for transactiosn over $2,000), in practice this does very
          little to change the digital currency ecosystem. <br /><br />That's as far as
          they can take it<br /><br />If they make the regulatios too stringent, the 'hip'
          tech companies will simply pack up and move somewhere else where they can
          participate in the technological revolution. For purposes both practical and
          vain, banning crypto is simply not an option. <br /><br />
          <br />
          This sentiment was confirmed on Dec 4, 2020 when Brian Brooks went on CNBC and
          told everyone to chill out. <br /><br />
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/j8gSEk8LNPc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <br /><br /><b
            >Over the next five years, banning the ability to transact in digital
            currencies, would effectively be equivelent to banning currency itself.
          </b>
        </p>
        <p>
          The
          <a
            href="https://www.scmp.com/tech/e-commerce/article/3113823/chinese-e-commerce-platform-jdcom-kicks-digital-yuan-trial-double"
            target="_blank"
            >the digital Yaun</a
          >
          is already in use in mainland China. JP Morgan and Russia are currently
          collaborating on Russia's digital currency as well, which may debute before the
          end of 2021. It is likely blockchain technology will be the backbone of all
          major national currencies within the next five years, and cash will be phased
          out.
        </p>

        <br />When it comes down to 'what they can do' at the SEC, their hands are
        basically tied, and as soon as the regulations are clear, billions of dollars of
        institutional money is going to flood into crypto. It's going to be like the 2017 tidal wave, but this time the rally will be fueled by fundamentals (not speculators). <b>It is likely that the blockchain boom will be similar to the interent boom of the 90's.</b> 
        While scarey sounding regulations may temporarily 'shock' the
        market, this news flashes a <b>GREEN LIGHT</b> to Institutional Money that
        previously avoided the space due to a lack of clarity around regulations.

        Just yesterday, JP morgan strategists said Bitcoin will recieve an influx of 600 billion dollars once the regulations are clear. Don't believe me? <br/><br/><a href="https://www.forbes.com/sites/youngjoseph/2020/12/14/bitcoin-faces-a-600-billion-catalyst-jpmorgan-strategists-say/?sh=40b4a5111e6c" target="_blank">Check it out for yourself!</a>
<br/><br/><br/>
<br /><br />
     <a class="btn btn-blue" v-on:click="onNavigateBegin()">Next</a>
      <br /><br />
        
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regs",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("mass-mutual");
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
