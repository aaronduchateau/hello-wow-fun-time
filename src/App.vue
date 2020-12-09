<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/resources">Normal People think...</router-link> |
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
body {
    background-color: #fafafa;
  min-height: 100%;
}
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

.space20 {
  width: 100%;
  min-height: 20px;
  display: block;
}

.space40 {
  width: 100%;
  min-height: 20px;
  display: block;
}

.space60 {
  width: 100%;
  min-height: 20px;
  display: block;
}

.space80 {
  width: 100%;
  min-height: 20px;
  display: block;
}

.bounce-enter-active {
  transform: scale(0);
  animation: bounce-in 0.5s 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
.flex-buts {
  display: flex;
  flex-direction: row;
  min-width: 380px;
}
.hip-blue {
  color: #3498db;
}

.flex-buts a {
    width: 100%;
    padding: 0px 0px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    color: #2c2c2c;
    transition: all 0.3s ease;
    margin: 10px;
}
.resources2 {
  margin: 0 auto;
  max-width: 580px;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
