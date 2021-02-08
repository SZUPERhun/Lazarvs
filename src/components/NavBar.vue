<template>
  <b-navbar toggleable="lg">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">BIO</b-nav-item>
        <b-nav-item href="#">LIVE</b-nav-item>
        <b-nav-item href="#">STORE</b-nav-item>
        <b-nav-item href="#"><img height="70" width="40" src="../assets/spotify.svg" alt="Spotify"></b-nav-item>
        <b-nav-item href="#"><img height="70" width="40" src="../assets/facebook.svg" alt="Facebook"></b-nav-item>
        <b-nav-item href="#"><img height="70" width="40" src="../assets/twitter.svg" alt="Twitter"></b-nav-item>
        <b-nav-item href="#"><img height="70" width="40" src="../assets/youtube.svg" alt="Youtube"></b-nav-item>
        <b-nav-item href="#"><img height="70" width="40" src="../assets/bandcamp.svg" alt="Bandcamp"></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
 </b-navbar>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>
  .navbar {
    z-index: 150;
    font-family: 'OldLondon', sans-serif !important;
    font-size: 50px;

    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    text-align: center;

    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 0 0 25px 25px;
  }
  .navbar-light .navbar-nav .nav-link {
    color: black;
  }
  a:hover {
    color: black;
  }
  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .nav-link:hover {
    opacity: 0.75;
  }
  .navbar-toggler {
    margin: 0 auto;
  }
</style>