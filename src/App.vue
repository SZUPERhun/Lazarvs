<template>
  <div id="app">
    <NavBar/>
    <Index/>
    <Footer></Footer>
  </div>
</template>

<script>
import Index from "@/views/Index";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Index,
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
    margin: 0;
  }

  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

</style>
