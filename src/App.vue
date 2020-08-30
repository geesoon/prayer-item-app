<template>
  <div class="container">
    <div class="animate__animated animate__fadeInDown">
      <Header></Header>
    </div>
    <div class="mt-3 animate__animated animate__fadeInUp">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}

body {
  margin-bottom: 50px; /* Margin bottom by footer height */
}

#navibar {
  color: black;
  font-weight: bold;
  font-size: 15px;
  font-family: Aclonica;
}
</style>