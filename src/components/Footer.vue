<template>
 <div class="footer">
   <div class="centered">
     <img @click="scrollToTop" class="cursor" width="35" height="35" :src="require('../assets/uparrow.svg')" alt="up">
   </div>
 </div>
</template>

<script>
export default {
  name: "Footer",
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
  .footer {
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
    transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    text-align: center;
  }
  .cursor {
    cursor: pointer;
  }
</style>