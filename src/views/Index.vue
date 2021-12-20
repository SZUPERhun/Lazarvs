<template>
  <div id="index"></div>
</template>

<script>

export default {
  name: "Index",
}
</script>

<style scoped>
  #index {
    min-height: 100vh;
    display: inline-block;

    background: url(../assets/LAZARVS20FRONT.jpg) no-repeat center center fixed;
  }
  @media (max-width: 991px) {
    #index {
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
  }
  @media (min-width: 992px) {
    #index {
      -webkit-background-size: contain;
      -moz-background-size: contain;
      -o-background-size: contain;
      background-size: contain;
      -webkit-object-fit: contain;
      -moz-object-fit: contain;
      -o-object-fit: contain;
      object-fit: contain;
    }
  }
</style>
