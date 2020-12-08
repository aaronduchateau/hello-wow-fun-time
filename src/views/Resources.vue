<template>
  <div class="resources">
    <SimpleCard paddingStyle="0px" >
      <h2>Are you like, sure you are ready for this?</h2>
      <img alt="Vue logo" src="../assets/dogetrans.png" />
    </SimpleCard>

    
    <div class="flex-buts">
      <a class="btn btn-blue" v-on:click="onNavigateNext()">Yeah</a><a class="btn btn-blue" v-on:click="onNavigateHome()()">Nah</a>
    </div>  
  </div>
</template>

<script>
// @ is an alias to /src
import SimpleCard from "@/components/SimpleCard.vue";

export default {
  name: "Home",
  components: {
    SimpleCard,
  },
  methods: {
    onNavigateHome: function () {
      this.$router.push("/");
    },
    onNavigateNext: function () {
      this.$router.push("/resources-main");
    },
  },
};
</script>

<style scope>
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
.resources {
  margin: 0 auto;
  max-width: 380px;
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
