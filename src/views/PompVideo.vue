<template>
  <div class="hello">
    <br /><br />
    <p class="maxWidth500Center">
      ( I know, I know,...The title slide to this video makes me want to gouge my eyes out, but unfortunately until we go full mainstream, these are the kind of attention grabbing splash pages some of these guys still use. Try to ignore that and focus on the content.)
      <br /><br />
      <b>Enjoy!</b>
    </p>
    <br /><br />
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/uvSM3y_BdS8"
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
      this.$router.push("resources-main");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
