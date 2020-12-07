<template>
  <div class="satoshi">
    <div class="space60"/>
    <img alt="Satoshi" src="../assets/satoshi.jpg" />
    <div class="space60"/>
    <SimpleCard widthStyle="300px">
      <div>“<b>Mr. Nakamoto</b> didn’t expect the price of Bitcoin to appreciate. 
He simply designed a system that was able to stand upon 
it’s own volition, while everything else burned to the ground”</div>
    </SimpleCard>
     <div class="space40"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SimpleCard from "@/components/SimpleCard.vue";

export default {
  name: "Satoshi2",
  components: {
    SimpleCard,
  },
};
</script>

<style scoped lang="scss">
.satoshi {
  text-align: center;
}
.bounce-enter-active {
  transform: scale(0);
  animation: bounce-in 0.5s 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
$image-dim: 250px;
img {
  border-radius: 50% ;
  width: $image-dim;
  height: $image-dim;
  -webkit-box-shadow: 6px 6px 28px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 6px 6px 28px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 6px 6px 28px 0px rgba(0, 0, 0, 0.5);
  object-fit: cover;
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
