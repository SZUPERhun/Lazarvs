<template>
 <div id="footer">
   <div class="centered">
     <img @click="scrollToTop" class="cursor" width="35" height="35" :src="require('../assets/uparrow.svg')" alt="up">
   </div>
   <div class="centered-bottom">
     © 2009-{{ currentYear }} LAZARVS
   </div>

 </div>
</template>

<script>

export default {
  name: "Footer",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
  #footer {
    position: relative;
    height: 200px;
    background-color: #1d1d1d;
    color: #8c8c8c;
    font-size: 14px;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    text-align: center;
  }
  .centered-bottom {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    text-align: center;
  }
  .cursor {
    cursor: pointer;
  }
</style>
