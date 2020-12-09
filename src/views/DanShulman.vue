<template>
  <YesNoCard @on-navigate-home="doNavigateHome" @on-navigate-next="doNavigateNext">
    <template v-slot:header>
      After PayPal saw the revenue CashApp was bringing in, they immediatly made plans to
      start selling cryptocurrencies
    </template>
    <template v-slot:name> Dan Schulman </template>
    <template v-slot:claim-to-fame> CEO of Paypal </template>
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
      this.$router.push("/jack-dorsey-2");
    },
  },
};
</script>

<style scope></style>
