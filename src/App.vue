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
  
  .template {
    min-height: 100vh;
  }
  .container {  
    background-color: rgba(220, 220, 220, 0.7);
    border-radius: 25px;
    padding: 30px;
  }
  .cursor {
    cursor: pointer;
  }
  .back {
    display: block;
    text-align: center;
    color: black;
    font-family: 'OldLondon', sans-serif !important;
    font-size: 30px;
  }
  .back:hover {
    opacity: 0.75;
  }

</style>
