<template>
  <div class="template">
    <b-container class="container" :style="{ 'margin-top': height + 'px' }">
      <div v-if="concerts.length">
        <b-table-simple striped responsive>
        <b-tbody>
          <b-tr v-for="concert in concerts" :key="concert.id">
            <b-td>{{ concert.date }}</b-td>
            <b-td>{{ concert.name }}</b-td>
            <b-td>{{ concert.place }}</b-td>
            <b-td><a :href="concert.link"><img height="25" width="25" :src="require('../assets/facebook.svg')" alt="Facebook"></a></b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
      </div>
      <div v-else class="center">
        No Concerts
      </div>
      <br><br>
      <router-link class="cursor back" to="/"><img height="25" width="20" :src="require('../assets/back.svg')" alt="Back">Back</router-link>
      <br>
    </b-container>
  </div>
</template>

<script>

export default {
  name: "Concerts",
  data() {
    return {
      all: false,
      concerts: [],
      height: 0,
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    //this.getConcertData();
    /*this.concerts = [
      {
        id: 1,
        date: "date1date1date1date1date1date1date1date1date1date1date1",
        name: "name1name1name1name1name1name1name1name1name1name1name1",
        place: "place1place1place1place1place1place1place1place1place1place1place1place1place1place1place1place1place1place1",
        link: "link1",
      },
      {
        id: 2,
        date: "date2",
        name: "name2",
        place: "place2",
        link: "link2",
      },
    ];*/
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
    getConcertData() {
      this.axios.get('https://api.momgmt.hu/concerts/lazarvs').then( res => {
        const concerts = res.data.filter( concert => {
            return new Date(concert.date) > new Date();
        });
        if (concerts.length) {
          this.concerts = this._.sortBy( concerts, 'date' );
          if (!this.all) {
            this.concerts = this.concerts.slice(0, 10);
          }
        }
      }).catch( () => {

      });
    },
  },
}
</script>

<style scoped>
  .center {
  margin: auto;
  width: 50%;
  text-align: center;
  font-family: 'OldLondon', sans-serif !important;
  font-size: 60px;
}
</style>
