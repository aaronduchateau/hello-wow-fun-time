<template>
  
  <div class="maxWidth500Center">      <h3>Then in October of 2020, shortly after the disruptive Paul Tudor Jones interview <h2>Jack Dorsey Bets Big</h2> and becomes the first entreprenuer to put 1% of a publicly traded company into bitcoin...</h3>

              <iframe width="100%" height="315" src="https://www.youtube.com/embed/1u40BrYb9mk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p>This caught my attention, I mean...this was not somthing that 'real business' people do...</p>
    <br /><br />
    <a class="btn btn-blue" v-on:click="onNavigateNext()">Next</a>
      <br /><br />
  </div>    

</template>

<script>


export default {
  name: "ResourcesThru",
  
  methods: {
   
    onNavigateNext: function () {
      this.$router.push("/dan-schulman");
    },
  },
};
</script>

<style scope></style>
