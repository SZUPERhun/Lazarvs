<template>
  <b-container class="container" :style="{ 'margin-top': height + 'px' }">
    <div v-if="render">
      <div>
        <div v-if="getAlbums.length">
          <Album album-type-name="Albums" :albums="getAlbums" @updateAlbumId="updateActiveAlbumId"></Album>
          <br/>
        </div>
        <div v-if="getSingles.length">
          <Album album-type-name="Singles" :albums="getSingles" @updateAlbumId="updateActiveAlbumId"></Album>
        </div>
      </div>
      <br/><br/>
    </div>
    <br><br>
    <router-link class="cursor back" to="/"><img height="25" width="20" :src="require('../assets/back.svg')" alt="Back">Back</router-link>
    <br>
  </b-container>

</template>

<script>
import Album from "../components/Album";

export default {
  name: "Albums",
  components: {
    Album
  },
  data() {
    return {
      height: 0,
      render: false,
      albums: [],
      activeAlbumId: null,
    }
  },
  computed: {
    getAlbums() {
      return this.albums.filter(album => album.type === 'album');
    },
    getSingles() {
      return this.albums.filter(album => album.type === 'single');
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.getAlbumData();
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
    updateActiveAlbumId(albumId) {
      if (this.activeAlbumId === albumId) {
        this.activeAlbumId = null;
        return;
      }
      this.activeAlbumId = albumId;
    },
    getAlbumData() {
      this.axios.get('https://api.momgmt.hu/albums/lazarvs').then( res => {
        this.albums = res.data;
        this.render = true;
      }).catch( () => {
        this.render = false;
      });
    },
  },
}
</script>

<style scoped>

</style>