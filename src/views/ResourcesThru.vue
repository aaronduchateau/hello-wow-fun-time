<template>
  <YesNoCard @on-navigate-home="doNavigateHome" @on-navigate-next="doNavigateNext">
    <template v-slot:header>
      Historical Moment (from just the other day):
    </template>
    <template v-slot:name> Paul Tudor Jones </template>
    <template v-slot:claim-to-fame>
       On May 11th, 2020 Paul Tudor Jones announced he had 1% of his net worth in bitcoin. Because of Paul Tudor Jone's background and reputation in <i>traditional finance markets</i>, this sent a shockwave of Bitcoin acceptance through traditional markets. Almost overnight, owning bitcoin wasn't silly anymore. <i>This all happened just six short months ago.</i>
    </template>
    <template v-slot:source> yahoo finance </template>
    <template v-slot:type-of-dude>
     
    invented the hedge fund to protect billions of dollars of assets from depreciating
      in the 1980's wall street crash. May have dated your mom.
    </template>
    <template v-slot:rating> 92% </template>
    <template v-slot:date> Dec 4th, 2020 </template>
    <template v-slot:content>
      <iframe
        width="100%"
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
      this.$router.push("/jack-dorsey");
    },
  },
};
</script>

<style scope></style>
