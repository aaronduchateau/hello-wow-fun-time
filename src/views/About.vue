<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<style>

.bounce-enter-active {
  transform: scale(0);
  animation: bounce-in .5s .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
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
