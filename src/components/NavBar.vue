<template>
  <b-navbar toggleable="lg">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/bio">BIO</b-nav-item>
        <b-nav-item href="./bio">LIVE</b-nav-item>
        <b-nav-item href="/concerts">CONCERTS</b-nav-item>
        <b-nav-item href="https://lazarvs.empiremerch.com">STORE</b-nav-item>
        <b-nav-item href="https://urlzs.com/cKAVW"><img height="70" width="40" src="../assets/spotify.svg" alt="Spotify"></b-nav-item>
        <b-nav-item href="https://www.facebook.com/lazarvsofficial"><img height="70" width="40" src="../assets/facebook.svg" alt="Facebook"></b-nav-item>
        <b-nav-item href="https://twitter.com/lazarvs666"><img height="70" width="40" src="../assets/twitter.svg" alt="Twitter"></b-nav-item>
        <b-nav-item href="https://urlzs.com/iSyHE"><img height="70" width="40" src="../assets/youtube.svg" alt="Youtube"></b-nav-item>
        <b-nav-item href="https://www.instagram.com/lazarvsofficial"><img height="70" width="40" src="../assets/instagram.svg" alt="Instagram"></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
 </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
  .navbar {
    z-index: 150;
    font-family: 'OldLondon', sans-serif !important;
    font-size: 45px;

    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    text-align: center;

    border-radius: 0 0 20px 20px;
  }
  @media (max-width: 991px) {
    .navbar {
      background-color: rgba(255, 255, 255, 0.9);
    }
  }
  @media (min-width: 992px) {
    .navbar {
      background-color: rgba(220, 220, 220, 0.7);
    }
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
