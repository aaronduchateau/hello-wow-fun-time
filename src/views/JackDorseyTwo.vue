<template>
  <YesNoCard @on-navigate-home="doNavigateHome" @on-navigate-next="doNavigateNext">
    <template v-slot:header>
      Then in October of 2020, he put his money where his mouth was...
    </template>
    <template v-slot:name> Jack Dorsey (cont.)</template>
    <template v-slot:claim-to-fame>
      Just a few months ago he invested 1% of Squares Net Worth into Bitcoin (50 million dollars)
    </template>
    <template v-slot:source> CNBC </template>
    <template v-slot:type-of-dude>
       Was the first major payment platform to offer Bitcoin, just a few months ago.
    </template>
    <template v-slot:rating> 86% </template>
    <template v-slot:date> Oct 9,2019 </template>
    <template v-slot:content>
      <iframe width="535" height="315" src="https://www.youtube.com/embed/1u40BrYb9mk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </template>
  </YesNoCard>
</template>

<script>
// @ is an alias to /src
import YesNoCard from "@/components/YesNoCard.vue";

export default {
  name: "ResourcesThru",
  components: {
    YesNoCard,
  },
  methods: {
    doNavigateHome: function () {
      this.$router.push("/");
    },
    doNavigateNext: function () {
      this.$router.push("/dan-schulman");
    },
  },
};
</script>

<style scope></style>
