<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/resources">Resources</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test-area">Test Area</router-link>
    </div>

    <router-view v-slot="{ Component }">
      <transition name="bounce">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@import url(https://fonts.googleapis.com/css?family=Poiret+One);

@mixin button-bg($bg) {
  background: $bg;
  &:hover {
    background: darken($bg, 8%);
    transition: all 0.3s ease;
  }
  &:active {
    background: darken($bg, 25%);
  }
}

.btn {
  color: white !important;
  text-decoration: none;
  padding: 10px 40px;
  border-radius: 3px;
  font-family: "Poiret One", cursive;
  font-size: 4em;
  cursor: pointer;
}

.btn-green {
  @include button-bg(#2ecc71);
}

.btn-blue {
  @include button-bg(#3498db);
}

.btn-yellow {
  @include button-bg(#f1c40f);
}

.btn-red {
  @include button-bg(#e74c3c);
}

/*Other Stylez*/
.wrap {
  margin: 0 auto;
  width: 800px;
  text-align: center;
}

h1 {
  font-family: "Poiret One", cursive;
  font-size: 4em;
}

.maxWidth500Center {
  max-width: 500px;
  margin: 0 auto;

}
</style>
