<template>
  <YesNoCard @on-navigate-home="doNavigateHome" @on-navigate-next="doNavigateNext">
    <template v-slot:header>
      Just one year before Paul Tudor Jones fessed up to owning bitcoin, Jack Dorsey (despite much criticism) integrated Crypto purchasing into 'Cash App'...
    </template>
    <template v-slot:name> Jack Dorsey </template>
    <template v-slot:claim-to-fame>
      co-founder of Twitter, CEO of US-based payments companies 'Square' and 'Cash App'
    </template>
    <template v-slot:source> joe rogan podcast </template>
    <template v-slot:type-of-dude>
      Despite unclear regulations by the SEC, he integrated BTC custodial services into Cash App in 2019
    </template>
    <template v-slot:rating> 86% </template>
    <template v-slot:date> Feb 1,2019 </template>
    <template v-slot:content>
      <iframe
        width="535"
        height="315"
        src="https://www.youtube.com/embed/G6q1Wi42E9E?start=280"
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
      this.$router.push("/jack-dorsey-2");
    },
  },
};
</script>

<style scope></style>
