<template>
  <div v-bind:class="[isHome ? 'main-alien-app' : 'other']">
    <div class="all">
      <div id="left-nav" class="menu" v-bind:class="[isActive ? 'slideIn' : 'slideOut']">
        <h2 class="logo" @click="onNavigate('/')">The Hedge</h2>
        <Menu class="close-icon" @click="toggleClass()"></Menu>
        <hr style="clear: both; opacity: 0.3" />
        <div id="scroller-holder">
          <div class="scroller">
            <h2 class="sec-title">Tutorial: Bitcoin in 2021</h2>
            <ol>
              <li>
                <router-link to="/preamble"
                  >Institutional Momentum: Next year and the 1000 foot view</router-link
                >
              </li>
              <li>
                <router-link to="/signal">Acceptance: The 3 Signals</router-link>
              </li>

              <li>
                <router-link to="/grayscale"
                  >The purchasing trends of Microstrategies and GrayScale</router-link
                >
              </li>
              <li>
                <router-link to="/regs">Regulatory FUD, it's actually good.</router-link>
              </li>
              <li><router-link to="/mass-mutual">*The Mass Mutual Event</router-link></li>
              <li><router-link to="/defi">Overview: The Rise of DeFi</router-link></li>
              <li>
                <router-link to="/core-concepts"
                  >Raoul Paul & the Big Picture moving forward (Crack a beer for this
                  one)</router-link
                >
              </li>
              <li>
                <router-link to="/mainstream"
                  >Review: The Undeniably bullish news</router-link
                >
              </li>
            </ol>
            <hr style="clear: both; opacity: 0.3" />
            <h2 class="sec-title">Getting Started</h2>
            <ol>
              <li>
                <router-link to="/what-to-buy"
                  >Example of diversified Crytpo Exposure entering 2021</router-link
                >
              </li>
              <li>
                <router-link to="/help">This is complicated! Where to start?</router-link>
              </li>
            </ol>
            <hr style="clear: both; opacity: 0.3" />
            <h2 class="sec-title">The 'Normal asset' problem of 2021</h2>
            <ol>
              <li><router-link to="/cash">Cash is trash</router-link></li>
              <li><router-link to="stocks">Stocks are Sketch</router-link></li>
              <li>
                <router-link to="/real-estate">Real Estate is Complicated</router-link>
              </li>
              <li><router-link to="/bonds">Bonds are Busted</router-link></li>
              <li><router-link to="/gold">Gold is Gone</router-link></li>
            </ol>

            <hr style="clear: both; opacity: 0.3" />
            <h2 class="sec-title">Feeds to Watch</h2>
            <ol>
              <li><router-link to="/rtweet">Raoul Paul</router-link></li>
              <li><router-link to="/atweet">Anthony Pompliano</router-link></li>
              <li><router-link to="/bullish">This Bullish</router-link></li>
              <li><router-link to="/stweet">Satoshi Dogomoto</router-link></li>
            </ol>
          

            <hr style="clear: both; opacity: 0.3" />
            <h2 class="sec-title">Other</h2>
            <ol>
              <li><router-link to="/help">About</router-link></li>
              <li><a
              href="https://discord.gg/DmV23YMUbJ"
              target="_blank"
              >Join us on Discord</a></li>
            </ol>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
        </div>
      </div>
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition
            name="bounce"
            v-on:after-leave="afterLeave"
            v-on:before-enter="beforeEnter"
          >
            <component :is="Component" />
          </transition>
        </router-view>
        <div>
          <br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br />
          
          <div>
            questions? <br /><a href="mailto:satoshidogomoto@gmail.com" target="_blank"
              >satoshidogomoto@gmail.com</a
            >
          </div>
          <br /><br />
          <div>
            join the conversation on discord: <br /><a
              href="https://discord.gg/DmV23YMUbJ"
              target="_blank"
              >https://discord.gg/DmV23YMUbJ</a
            >
          </div>
          <br /><br /><br /><br /><br /><br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const screenWidthTrig = 768;
const windowWidth = window.innerWidth;
import { Menu } from "mdue";

export default {
  name: "App",
  components: {
    Menu,
  },
  data: () => {
    return {
      isActive: screen.width > screenWidthTrig,
      hasError: false,
      isHome: true,
    };
  },
  mounted() {
    /*
    const ufo = this.$el.querySelector(".all");

    ufo.addEventListener("mousemove", (e) => {
      
      let eyes = document.querySelector(".eyes");
      if(!eyes){
        return false;
      }
      let mouseX = eyes.getBoundingClientRect().left;
      let mouseY = eyes.getBoundingClientRect().top;
      let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
      let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
      eyes.style.transform = `rotate(${rotationDegrees}deg)`;
    });
    */
  },
  methods: {
    toggleClass: function () {
      this.isActive = !this.isActive;
    },
    onNavigate: function (r) {
      this.$router.push(r);
    },
    afterLeave: function () {
      document.getElementById("app").scrollIntoView();
      if (windowWidth < screenWidthTrig) {
        this.isActive = false;
      }
    },
    beforeEnter: function () {
      if (this.$route.name === "Home") {
        this.isHome = true;
      } else {
        this.isHome = false;
      }
    },
  },
};
</script>

<style lang="scss">
#scroller-holder {
  overflow-y: scroll;
  max-height: 100%;
}
.logo {
  float: left;
  margin-left: 20px;
  font-family: "Poiret One", cursive;
  cursor: pointer;
}

.close-icon {
  color: white;
  font-size: 25px;
  float: right;
  margin-right: 6px;
  margin-top: 20px;
  cursor: pointer;
}
body {
  background-color: #fafafa;
  min-height: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content {
  margin-left: 300px;
  @media (max-width: 768px) {
    margin-left: 40px;
  }
  margin-right: 5px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.sec-title {
  font-size: 20px;
  font-family: "Poiret One", cursive;
  margin-left: 27px;
  line-height: 20px;
  letter-spacing: 1px;
  margin-right: 34px;
}

.main-alien-app-saved {
  background-image: url("./assets/sdogodark.jpg");
  background-size: contain;
  min-height: 100%;

  width: 100%;
  background-repeat: no-repeat;
}

.menu {
  min-width: 300px;
  max-width: 300px;
  z-index: 5;
  min-height: 100%;
  height: 100%;
  background-color: #3498db;
  margin-left: -10px;
  top: 0px;
  padding: 0px;
  color: white;
  position: fixed;
  text-align: left;
  a {
    color: white;
    text-decoration: none;
    line-height: 17px;
    margin-left: 4px;
    margin-right: 34px;
    max-width: 250px;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0px;
    opacity: 0.7;
    &.router-link-exact-active {
      opacity: 1;
      text-shadow: 2px 2px 8px #000;
    }
    &:hover {
      color: #ffffff;
      opacity: 1;
    }
  }
}
.slideIn {
  left: 0px;
  /* for chrome and safari*/
  animation-duration: 0.5s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    left: -255px;
  }

  to {
    left: 0px;
  }
}

.slideOut {
  left: -255px;
  /* for chrome and safari*/
  animation-duration: 0.5s;
  animation-name: slideOut;
}

@keyframes slideOut {
  from {
    left: 0px;
  }

  to {
    left: -255px;
  }
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@import url(https://fonts.googleapis.com/css?family=Poiret+One);

@mixin button-bg($bg) {
  background: $bg;
  &:hover {
    background: darken($bg, 8%);
    transition: all 0.3s ease;
  }
  &:active {
    background: darken($bg, 25%);
  }
}

.btn {
  color: white !important;
  text-decoration: none;
  padding: 10px 40px;
  border-radius: 3px;
  font-family: "Poiret One", cursive;
  font-size: 4em;
  cursor: pointer;
}

.btn-green {
  @include button-bg(#2ecc71);
}

.btn-blue {
  @include button-bg(#3498db);
}

.btn-yellow {
  @include button-bg(#f1c40f);
}

.btn-red {
  @include button-bg(#e74c3c);
}

/*Other Stylez*/
.wrap {
  margin: 0 auto;
  width: 800px;
  text-align: center;
}

h1 {
  font-family: "Poiret One", cursive;
  font-size: 4em;
}

.maxWidth500Center {
  max-width: 500px;
  margin: 0 auto;
}

.space20 {
  width: 100%;
  min-height: 20px;
  display: block;
}

.space40 {
  width: 100%;
  min-height: 20px;
  display: block;
}

.space60 {
  width: 100%;
  min-height: 20px;
  display: block;
}

.space80 {
  width: 100%;
  min-height: 20px;
  display: block;
}

.bounce-enter-active {
  transform: scale(0);
  animation: bounce-in 0.5s 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
.flex-buts {
  display: flex;
  flex-direction: row;
  min-width: 380px;
}
.hip-blue {
  color: #3498db;
}

.flex-buts a {
  width: 100%;
  padding: 0px 0px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #2c2c2c;
  transition: all 0.3s ease;
  margin: 10px;
}
.resources2 {
  margin: 0 auto;
  max-width: 580px;
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
