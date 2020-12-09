<template>
  <YesNoCard @on-navigate-home="doNavigateHome" @on-navigate-next="doNavigateNext">
    <template v-slot:header>
      Normal folks think that traditional investment advisors don't take bitcoin seriously
    </template>
    <template v-slot:name> Paul Tudor Jones </template>
    <h1>Paul Tudor Jones</h1>
    <template v-slot:claim-to-fame>
      invented the hedge fund to protect billions of dollars of assets from depreciating
      in the 1980's wall street crash. May have banged your mom.
    </template>
    <template v-slot:source> yahoo finance </template>
    <template v-slot:type-of-dude>
      old as fuck, probably gets off on pornographic films feature maidens wearing the
      outfit's of 'yore'
    </template>
    <template v-slot:rating> 92% </template>
    <template v-slot:date> Dec 4th, 2020 </template>
    <template v-slot:content>
      <iframe
        width="535"
        height="315"
        src="https://www.youtube.com/embed/hDsraIr81qU"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
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
      this.$router.push("/resources-main");
    },
  },
};
</script>

<style scope></style>
