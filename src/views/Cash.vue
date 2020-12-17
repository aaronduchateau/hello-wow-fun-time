<template>
  <div class="hello maxWidth500Center">
    <br /><br />
    <h1>Cash is trash</h1>
    <p class="maxWidth500Center">
      While Cash can be an important part of staying liquid during a crisis, it is not a long term hold. This video explains why.
      <br /><br />
    </p>
    <br /><br />
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/LZOWkXgHBAc"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <br /><br />
    <br /><br />
    <br /><br />
    But then again, that's just my 'opinion or whatever', man,
    <br /><br />
     <img src="../assets/sig.png" class="step-img-resource-qr" />
     <br /><br /><br /><br />
    <a class="btn btn-blue" v-on:click="onNavigateBegin()">Next</a>
    <br /><br />
  </div>
</template>

<script>
export default {
  name: "Cash",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("stocks");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
