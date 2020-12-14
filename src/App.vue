<template>
  <div>
    <div id="left-nav" class="menu" v-bind:class="[isActive ? 'slideIn' : 'slideOut']">
      <div>
        <h2 class="logo" @click="onNavigate('/')">The Hedge</h2>
        <Menu class="close-icon" @click="toggleClass()"></Menu>
        <hr style="clear: both; opacity: 0.3" />
        <div class="scroller">
        <h2 class="sec-title">Tutorial: Bitcoin in 2021</h2>
        <ol>
         <li><router-link to="/">Institutional Momentum: Next year and the 1000 foot view</router-link> </li>
        <li><router-link to="/">The Paul Tudor Jones Event</router-link> </li>
        <li><router-link to="/">The Jack Dorsey Event</router-link> </li>
        <li><router-link to="/">The Dan Schulman Event</router-link> </li>
        <li><router-link to="/">Performance of Grayscale Trust</router-link> </li>
        <li><router-link to="/">The purchasing trends of Microstrategies</router-link> </li>
        <li><router-link to="/">*The Mass Mutual Event</router-link> </li>
        <li><router-link to="/resources">Raoul Paul & the Big Picture moving forward (Crack a beer for this one)</router-link> </li>
        <li><router-link to="/resources">The Undeniably bullish news</router-link> </li>
        </ol>
        <hr style="clear: both; opacity: 0.3" />
        <h2 class="sec-title">Getting Started</h2>
        <ol>
         <li><router-link to="/">Example of diversified Crytpo Exposure entering 2021</router-link> </li>
        <li><router-link to="/">This is complicated! Where to start?</router-link> </li>
    
        </ol>
        <hr style="clear: both; opacity: 0.3" />
        <h2 class="sec-title">The 'Normal asset' problem of 2021</h2>
        <ol>
         <li><router-link to="/step-one">Cash is trash</router-link> </li>
        <li><router-link to="/">Stocks are Sketch</router-link> </li>
        <li><router-link to="/">Real Estate is Complicated</router-link> </li>
        <li><router-link to="/">Bonds are Busted</router-link> </li>
        <li><router-link to="/">Gold will lose Market Share</router-link> </li>
        
        </ol>
        
       
           <hr style="clear: both; opacity: 0.3" />
        <h2 class="sec-title">Feeds to Watch</h2>
        <ol>
         <li><router-link to="/">Raoul Paul</router-link> </li>
        <li><router-link to="/">Anthony Pompliano</router-link> </li>
        <li><router-link to="/">This Bullish</router-link> </li>
        <li><router-link to="/">Satoshi Dogomoto</router-link> </li>
        </ol>
        <br/><br/><br/>

           <hr style="clear: both; opacity: 0.3" />
        <h2 class="sec-title">Other</h2>
        <ol>
         <li><router-link to="/">About</router-link> </li>
        <li><router-link to="/">Join us on Discord</router-link> </li>
       
        </ol>
        <br/><br/><br/>



        <router-link to="/resources">Conclusion</router-link> 
        <router-link to="/about">About</router-link> 
        <router-link to="/test-area">Test Area</router-link>
        <router-link to="/mainstream">2021 BTC goes Mainstream</router-link>
        <router-link to="/bullish">This is bullish</router-link>
        <router-link to="/step-one">Step One</router-link>
         </div>
      </div>
    </div>
    <div class="content">

      <router-view v-slot="{ Component }">
        <transition name="bounce" v-on:before-leave="beforeLeave">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script>
import { Menu } from "mdue";

export default {
  name: "App",
  components: {
    Menu,
  },
  data: () => {
    return {
      isActive: true,
      hasError: false,
    };
  },
  methods: {
    toggleClass: function () {
      this.isActive = !this.isActive;
    },
    onNavigate: function (r) {
      this.$router.push(r);
    },
    beforeLeave: function(){
      document.getElementById('app').scrollIntoView();
    }
  },
};
</script>

<style lang="scss">
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
    &:hover {
      color: #d5ebe9;
    }
  }
}
.slideIn {
  left: 0px;
  /* for chrome and safari*/
  animation-duration: 1s;
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
  animation-duration: 1s;
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
