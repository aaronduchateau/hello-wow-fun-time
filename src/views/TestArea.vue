<template>
  <div class="hello">
    <h1>{{ dice }}</h1>
    <p class="maxWidth500Center">
      This is in no way meant to be financial advice, and the author of this content is not a licensed financial advisor. 
      Taking financial advice from a dog (in general) is not usually a good idea. 
    </p>
    <br/><br/>
    <a class="btn btn-blue" v-on:click="onFireOffButton">Let's Begin {{ count }}</a>
    <br/>
    <ul>
  <li
    v-for="todo in iteratorTestObj"
    v-bind:key="todo.id"
  >
    {{ todo.name }}
  </li>
</ul>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "TestArea",
  props: {
    msg: String,
  },
  methods: {
    onNavigateBegin: function () {
      this.$router.push("about");
    },
    onFireOffButton: function(){
      this.count = this.count +=1;
      this.dice = this.dice +=5;
    }
  },
  data() {
    console.log("called before first render but after setup")
    return {
      dice: 4,
      iteratorTestObj: [{id: 1, name: 'bananas are cool'}, {id: 1, name: 'bananas are yellow'}, {id: 1, name: 'bananas are the best'}, ]
    }
  },
  setup(props, context) {
      console.log(context.slots)
      const count = ref(5);
      //const object = reactive({ dice: 5 });
     
      return {
        count,
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
