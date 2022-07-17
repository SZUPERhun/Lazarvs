<template>
  <div class="template">
    <b-container class="container" :style="{ 'margin-top': height + 'px' }">
      <a class="button languageButton" @click="updateLanguage(oppositeLanguage)">
            <img height="40" width="40" :src="require(`../assets/${ oppositeLanguage }.svg`)" :alt=oppositeLanguage>
        </a>
      <div v-if="language === 'en'">
        <h1>LAZARVS</h1>
        formerly known as Apey & the Pea (changed their name in 2019) is a power trio formed in 2008 in the heart of Budapest, after the breakup of a Pantera tribute band where the three founding members met. The band succeeded far from their original plans after releasing
        four albums, and one EP, serving heavy riffs, loud amps, and sweaty live performances for over a decade. Throughout the years the band mastered their skills with their extremely aggressive live performances, and the commitment to their riff oriented devotion
        to give their audience the best live experience to walk home with. Such influences like Pantera, High on Fire, and Slayer gave the perfect combination to get on to the top acts in Hungary. LAZARVS became the biggest local metal act in the country selling 1500+
        tickets in Budapest. Supported legendary metal acts like Saint Vitus, or Crowbar, Dopethrone, Weedater, Bongripper, Primitive Man at London’s The Underworld several times, played at Desertfest London, and did a 25 date European nightliner tour in 2019. The
        band also played at Sziget Festival’s main stage, and won the Hungarian music contest ‘Nagyszínpad’. They achieved the best metal album twice throughout their 12 year career at the ‘Hungarian Grammys’ Fonogram Awards, and played at professional showcase festivals
        like ESNS19’ or Tallinn Music Week in 2019.
      </div>
      <div v-if="language === 'hu'">
        <h1>LAZARVS</h1>
        2008 végén ‘Apey & the Pea’ néven alakult budapesti zenekar, amely Áron András (ex-Neck Sprain) szólóprojektjéből átalakulva, illetve egykori Superbutt tagokkal (Makai László, Prepelicza Zoltán) kiegészülve született meg. 2011-ben jelent meg az első, 5 dalt tartalmazó
        EP ’The Day Ends’ címmel. 2013 júniusában megjelent az első nagylemezük a ’Devil’s Nectar’ címmel, amely az “Év debütáló lemeze” lett a HangSúly zenei díj szavazásán és elnyerték az “Év albuma” díjat a Kettőnégy Gumizsiráf Díjátadón. 2014 szeptemberében kiadták a
        második nagylemezüket, a ‘Hellish’-t, amely  2015-ben Fonogram díjat nyert az "Év hazai hard rock vagy metálalbuma" kategóriában. A HangSúly zenei díj szavazásán is elnyerte az "Év albuma" címet, illetve az Apey & The Pea lett az “Év koncertzenekara”. 2016 áprilisában
        elindult az első önálló országos turnéjuk, valamint elkezdték a harmadik nagylemezük írását. Az évek során felléptek már Magyarország valamennyi vidéki klubjában és fesztiváljain, játszottak olyan legendás előadókkal mint a Saint Vitus, a Crowbar, Dopethrone, vagy a
        kultikus londoni ‘The Underworld’ helyszínén olyan bandák társaságában mint a Weedater, a Bongripper vagy a Primitive Man. 2017 szeptemberében adták ki harmadik és egyben legelismertebb lemezüket ‘HEX’ címmel, melyet egye teltházas A38 hajós lemezbemutató követett, illetve
        az országos ‘RATS’ belföldi turné. 2018 májusában a NAGY-SZIN-PAD fődíját a közönségszavazatok alapján a zenekar nyerte, így 2018-ban a Sziget fesztivál, a  VOLT fesztivál, a Strand fesztivál nagyszínpadán léphettek fel. Számos egyéb nyári fesztivál fellépés mellett jártak
        Csehországban a Rock For Churchill fesztiválon és Lengyelországban a Pol’and’Rock fesztiválon. 2019-ben a zenekar képviselte Magyarországot a 2019-es Eurosonic (ESNS19’) fesztiválon, illetve a Tallinn Music Week-en. Áprilisban egy 25 állomásos nightliner Európa turnéra indultak,
        majd szeptemberben több ezer ember előtt, tizedik születésnapi koncertjük végén jelentették be a zenekar tagjai, hogy ez volt az Apey & the Pea utolsó fellépése. A jubileum ugyanis egyben korszakváltást is jelent, a trió LAZARVS néven folytatja tovább.
      </div>
      <br><br>
      <router-link class="cursor back" to="/"><img height="25" width="20" :src="require('../assets/back.svg')" alt="Back">Back</router-link>
      <br>
    </b-container>
    <br><br>
  </div>

</template>

<script>
export default {
  name: "Bio",
  data() {
      return {
          height: 0,
          language: 'en',
          oppositeLanguage: 'hu',
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
      if (document.getElementsByClassName("navbar-toggler")[0].clientHeight !== 0) {
        this.height = document.getElementsByClassName("navbar-toggler")[0].clientHeight + 20;
        return;
      }
      this.height = document.getElementsByClassName("navbar")[0].clientHeight + 20;
    },
    updateLanguage(oppositeLanguage) {
      this.oppositeLanguage = this.language;
      this.language = oppositeLanguage;
    }
  }
}
</script>

<style scoped>
  h1 {
    font-family: 'OldLondon', sans-serif !important;
  }
  .container {
    position: relative;
  }
  .languageButton {
    position: absolute;
    top: 20px;
    right: 40px;
    padding: 0;
    border: 3px solid transparent;
    border-radius: 50%;
    background-color: transparent;
    color: black;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
  }
  .languageButton:focus {
    outline:0 !important;
    -webkit-appearance:none !important;
    box-shadow: none !important;
  }
</style>
