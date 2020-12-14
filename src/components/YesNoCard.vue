<template>
  <div class="resources2">
    <h3><slot name="header"></slot></h3>
    <SimpleCard widthStyle="580px" paddingStyle="20px">
      <h1><slot name="name"></slot></h1>
      <h2>
        <span class="hip-blue">claim to fame:</span> <slot name="claim-to-fame"></slot>
      </h2>
      <blockquote><slot name="source"></slot></blockquote>
      <slot name="content"></slot>
      <h2>
        <span class="hip-blue">type of dude:</span><slot name="type-of-dude"></slot>
      </h2>
      <h2>
        <span class="hip-blue">'the Hedge' credibility rating:</span>
        <slot name="rating"></slot> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          class="hip-blue"
        ></span
        ><slot name="date"></slot>
      </h2>
    </SimpleCard>
    <div class="flex-buts">
      <a class="btn btn-blue" v-on:click="$emit('on-navigate-home')">Back</a
      ><a class="btn btn-blue" v-on:click="$emit('on-navigate-next')">Next</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SimpleCard from "@/components/SimpleCard.vue";

export default {
  name: "YesNoCard",
  components: {
    SimpleCard,
  },
};
</script>

<style scope></style>
