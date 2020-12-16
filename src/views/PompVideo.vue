<template>
  <div class="hello maxWidth500Center">
    <br /><br />
    <p class="maxWidth500Center">
      A birds eye view of Bitcoin in 2021.
    </p>
    <br /><br />
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/uvSM3y_BdS8?&autoplay=1"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <br /><br />
    <br /><br />
    <p class="maxWidth500Center">
      <i>O.k., that all made sense, but why don't any normal finance people talk about bitcoin? Actually, over the last 6 months...they have been.</i>
      
    </p>
    <br /><br />
    <a class="btn btn-blue" v-on:click="onNavigateBegin()">Next</a>
  </div>
</template>

<script>
export default {
  name: "PompVideo",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("signal");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
