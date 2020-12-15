<template>
  <div class="home">
    <br/> <br/>
    <HelloWorld msg="Welcome to 'the Hedge'"/>
  
   
    <div class="space80" />
    <div src="../assets/doge-thinks.png" class="doge">
    <div><div class="btc-price-contain">One Bitcoin is <br/><h2 style="padding-left: 50px;">${{ info }}</h2>
    <h1>WOW</h1>
    </div>
    
    </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'


export default {
  name: 'Home',
  components: {
    HelloWorld,
  
  },
  data () {
 
    return {info: 'loading...'}
  },
  mounted () {
    /*
     const ufo = this.$el.querySelector('.ufo');

ufo.addEventListener('mousemove', (e) => {
  console.log('wtf');
  let eyes = document.querySelector('.eyes');
  let mouseX = (eyes.getBoundingClientRect().left); 
  let mouseY = (eyes.getBoundingClientRect().top);
  let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
  let rotationDegrees = (radianDegrees * (180/ Math.PI) * -1) + 180;
  eyes.style.transform = `rotate(${rotationDegrees}deg)`
});
*/
    
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi.USD.rate))
    }
}
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
  font-size: .8em;
}

.bounce-enter-active {
  transform: scale(0);
  animation: bounce-in  .5s .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
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
