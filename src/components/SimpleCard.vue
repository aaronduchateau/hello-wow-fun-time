<template>
  <div class="card" :style="s">
    <slot>Hmmmm....looks like some content is missing</slot>
  </div>
</template>

<script>
export default {
  name: "SimpleCard",
  props: { widthStyle: String, paddingStyle: String },
  setup(props) {
    
    return { s: { width: "100%", minWidth: (props.widthStyle || "380px"), padding: props.paddingStyle || "20px" } };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$card-spacer-x: 1.25rem;
$card-spacer-y: 0.75rem;
$card-border-width: 0.0625rem;
$card-border-color: #e5e5e5;

$card-cap-bg: #f5f5f5;

.card {
  margin: 0 auto;
  font-size: 12px;
  margin-bottom: $card-spacer-y;
  border: $card-border-width solid $card-border-color;
  -webkit-box-shadow: 6px 6px 28px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 6px 6px 28px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 6px 6px 28px 0px rgba(0, 0, 0, 0.5);
  background-color: white;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
-moz-box-sizing: border-box;    /* Firefox, other Gecko */
box-sizing: border-box;   
}

.card-block {
  padding: $card-spacer-x;
}

.card-title {
  margin-top: 0;
  margin-bottom: $card-spacer-y;
}

.card-subtitle {
  margin-top: -($card-spacer-y / 2);
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}
</style>
