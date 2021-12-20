<template>
  <div id="bio-container">
    <b-container id="bio" :style="{ 'margin-top': height + 'px' }">
      <div id="bio-content">
        <h1>LAZARVS</h1>
        formerly known as Apey & the Pea (changed their name in 2019) is a power trio formed in 2008 in the heart of Budapest, after the breakup of a Pantera tribute band where the three founding members met. The band succeeded far from their original plans after releasing
        four albums, and one EP, serving heavy riffs, loud amps, and sweaty live performances for over a decade. Throughout the years the band mastered their skills with their extremely aggressive live performances, and the commitment to their riff oriented devotion
        to give their audience the best live experience to walk home with. Such influences like Pantera, High on Fire, and Slayer gave the perfect combination to get on to the top acts in Hungary. LAZARVS became the biggest local metal act in the country selling 1500+
        tickets in Budapest. Supported legendary metal acts like Saint Vitus, or Crowbar, Dopethrone, Weedater, Bongripper, Primitive Man at London’s The Underworld several times, played at Desertfest London, and did a 25 date European nightliner tour in 2019. The
        band also played at Sziget Festival’s main stage, and won the Hungarian music contest ‘Nagyszínpad’. They achieved the best metal album twice throughout their 12 year career at the ‘Hungarian Grammys’ Fonogram Awards, and played at professional showcase festivals
        like ESNS19’ or Tallinn Music Week in 2019.
      </div>
      <br><br>
      <a class="cursor back" href="/"><img height="25" width="20" :src="require('../assets/back.svg')" alt="Back">Back</a>
      <br>
    </b-container>
  </div>

</template>

<script>
export default {
  name: "Bio",
  data() {
      return {
          height: 0,
      }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.height = document.getElementsByClassName("navbar")[0].clientHeight + 20;
    }
  }
}
</script>

<style scoped>
  #bio-container {
    min-height: 100vh;
  }
  #bio {
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
  }
  .back:hover {
    opacity: 0.75;
  }
</style>
