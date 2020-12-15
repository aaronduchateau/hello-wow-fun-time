<template>
  <div class="hello">
    <br /><br />
    <p class="maxWidth500Center">
      The following clip was released on Dec 7th, 2020. If you can ignore the silly music
      and the dramatic intro slide, It is likely the most important synopsis of the
      current economic situation in relationship to cryptocurrency i could find.
      <br /><br />
      <b>Enjoy!</b>
    </p>
    <br /><br />
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/_-pv4aDDzgM"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <br /><br />
    <br /><br />
    <a class="btn btn-blue" v-on:click="onNavigateBegin()">Next</a>
  </div>
</template>

<script>
export default {
  name: "RaulVideo",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("mainstream");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
