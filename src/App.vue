<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    NavBar
  }
}
</script>

<style>
  @font-face {
    font-family: OldLondon;
    src: url(./assets/OldLondon.ttf);
  }
  html, body {
    height: 100%;
  }

  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background: black;
  }

</style>
