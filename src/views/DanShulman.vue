<template>
  <YesNoCard @on-navigate-home="doNavigateHome" @on-navigate-next="doNavigateNext">
    <template v-slot:header>
      Since then, Cash App generated over $1.63 billion in revenue selling Bitcoin. Only a few months later, Paypal made plans to
      start selling too. They understood that to remain competative it would be <i>negligent</i> not to. On Nov 16th, 2020 Paypal announced that its <i>286 million customers</i> could buy cryptocurrency through their primary application. 
    </template>
    <template v-slot:name> Dan Schulman </template>
    <template v-slot:claim-to-fame> CEO of Paypal, Priceline.com, and more </template>
    <template v-slot:source> CNN Business </template>
    <template v-slot:type-of-dude>
      Tech mogal directly responsible for turning Priceline.com into a BILLION dollar
      company.
    </template>
    <template v-slot:rating> 66% </template>
    <template v-slot:date> Nov 23, 2020</template>
    <template v-slot:content>
      <iframe
        width="535"
        height="315"
        src="https://www.youtube.com/embed/DtkrSzhDk4U"
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
  name: "DanShulman",
  components: {
    YesNoCard,
  },
  methods: {
    doNavigateHome: function () {
      this.$router.push("/");
    },
    doNavigateNext: function () {
      this.$router.push("/grayscale");
    },
  },
};
</script>

<style scope></style>
