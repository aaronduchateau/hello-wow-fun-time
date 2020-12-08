<template>
  <div class="resources2">
    <h2>Normal folks think that traditional investment advisors don't take bitcoin seriously</h2>
    <SimpleCard widthStyle="580px" paddingStyle="20px" >
      
      <h1>Paul Tudor Jones</h1>
      <h2><span class="hip-blue">claim to fame:</span> invented the hedge fund to protect billions of dollars of assets from depreciating in the 1980's wall street crash. May have banged your mom.</h2>
      <blockquote> source yahoo</blockquote>
      <iframe width="535" height="315" src="https://www.youtube.com/embed/hDsraIr81qU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h2><span class="hip-blue">type of dude:</span> old as fuck, probably gets off on pornographic films feature maidens wearing the outfit's of 'yore'</h2>
      <h2><span class="hip-blue">'the Hedge' credibility rating:</span> 92% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hip-blue"></span>Dec 4th, 2020</h2>
    </SimpleCard>

    
    <div class="flex-buts">
      <a class="btn btn-blue" v-on:click="onNavigateHome()">No</a><a class="btn btn-blue" v-on:click="onNavigateHome()()">Yeah</a>
    </div>  
  </div>
</template>

<script>
// @ is an alias to /src
import SimpleCard from "@/components/SimpleCard.vue";

export default {
  name: "ResourcesThru",
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
