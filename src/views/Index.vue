<template>
  <div class="index"></div>
</template>

<script>
export default {
name: "Index"
}
</script>

<style scoped>
  .index {
    min-height: 100vh;

    background: url(../assets/LAZARVS20FRONT.jpg) no-repeat center center fixed, black;
  }
  @media (max-width: 1199px) {
    .index {
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
  }
  @media (min-width: 1200px) {
    .index {
      -webkit-background-size: contain;
      -moz-background-size: contain;
      -o-background-size: contain;
      background-size: contain;
    }
  }

</style>