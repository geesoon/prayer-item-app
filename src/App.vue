<template>
  <div class="container">
    <Header></Header>

    <section class="mt-3">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>
  </div>
</template>

<script>
import Header from "./components/header";

export default {
  components: {
    Header,
  },
};
</script>

<style>
body {
  height: 100vh;
  width: 100vw;
  background-image: url("https://images.unsplash.com/photo-1584098115468-0f5307581d31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80");
}

#navibar {
  color: black;
  font-weight: bold;
  font-size: 15px;
  font-family: Aclonica;
}
/* Transition */
.slide-enter-active {
  animation: slide-in 500ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 500ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opcaity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 0;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>