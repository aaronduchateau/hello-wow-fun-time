<template>
  <div class="home main-alien">
    <br />
    <br />
    <Alien />
    <HelloWorld msg="&nbsp;" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Alien from "@/components/Alien.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Alien,
  },
  data() {
    return { info: "loading..." };
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
