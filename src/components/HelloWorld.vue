<template>
  <div class="hello">
    <h1 class="text-shadow-welcome title-head">{{ msg }}</h1>
    <p class="maxWidth500Center" style="display:none;">
      This is in no way meant to be financial advice, and the author of this
      content is not a licensed financial advisor. Taking financial advice from
      a dog (in general) is not usually a good idea.
    </p>
    <br /><br />
    <a class="btn btn-blue btn-head" v-on:click="onNavigateBegin()">Let's Begin</a>
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "Welcome to the Hedge",
  props: {
    msg: String,
  },
  methods: {
    onNavigateBegin: function () {
      this.$router.push("preamble");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title-head {
   @media (max-width: 768px) {
    font-size: 1.9em;
  }
}
.btn-head {
   @media (max-width: 768px) {
    font-size: 1.9em;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.text-shadow-welcome {
   text-shadow: 2px 2px  2px #ffffff;
}

.big-butt {
  background: #3498db;
  width: 180px;
  padding: 4px 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 3px;

  p {
    font-family: "Roboto";
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    user-select: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 10%;
    border-radius: 50%;
    background-color: darken(#f1c40f, 20%);
    opacity: 0.4;
    bottom: -30px;
  }
}
</style>
