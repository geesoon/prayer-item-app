<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-light" id="navibar">
      <h3 class="mx-3">
        <strong>Prayer Item App</strong>
      </h3>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">KGC</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">BTGC</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">JBGC</a>
          </li>
        </ul>
      </div>
    </nav>
    <div id="main">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
// import sidebar from "./components/sidebar";

export default {
  data() {
    return {};
  },
  components: {
    // sidebar,
  },
};
</script>

<style>
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