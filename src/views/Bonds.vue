<template>
  <div class="hello maxWidth500Center">
    <br /><br />
    <h1>Bonds are Bunk</h1>
    <h3>
      Long term government bonds during a period of high inflation is basically just like
      ...
    </h3>
    <img src="../assets/hello.png" class="step-img-resource-qr" />

    <br /><br />
    <br /><br />
    <br /><br />
    But then again, that's just my 'opinion or whatever', man,
    <br /><br />
    <img src="../assets/sig.png" class="step-img-resource-qr" />
    <br /><br /><br /><br />
    <a class="btn btn-blue" v-on:click="onNavigateBegin()">Next</a>
  </div>
</template>

<script>
export default {
  name: "RealEstate",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("gold");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
