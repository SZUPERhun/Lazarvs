<template>
    <div>
        <h2>{{ albumTypeName }}</h2>
        <hr>
        <Grid :items="albums" itemClass="col-md-4 row-item videos" class="album" justify>
            <template slot-scope="{ item }">
                <b-img class="cursor cover" :src="item.image" fluid :alt="item.name" @click="clickOnAlbum(item.id)"></b-img>
                <span class="caption">{{ item.name }}</span>
            </template>
        </Grid>
        <sweet-modal ref="modal" modal-theme="dark" overlay-theme="dark">
            <iframe v-if="isModalOpen" :src="`https://open.spotify.com/embed/album/${ id }`"
                    width="300"
                    height="300"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media">
            </iframe>
        </sweet-modal>
    </div>
</template>

<script>
    import Grid from "../components/Grid";

    export default {
        name: "Album",
        components: {
            Grid,
        },
        props: {
            albumTypeName: {
                type: String,
                required: true,
            },
            albums: {
                type: Array,
                required: true,
            },
        },
        data() {
            return {
                id: null,
            }
        },
        methods: {
            isModalOpen() {
                return this.$refs.modal.is_open;
            },
            clickOnAlbum(selectedAlbumId) {
                this.$emit('updateAlbumId', selectedAlbumId);
                this.id = selectedAlbumId;
                this.$refs.modal.open();
            },
        }
    }
</script>

<style scoped>
    .album {
        width: 100%;
        height: auto;
        vertical-align: top;
        margin-left: 10px;
        margin-right: 10px;
        display: inline-block;
        text-align: center;
    }
    .cover {
        box-shadow: 8px 6px grey;
    }
    .caption {
        padding-top: 10px;
        display: block;
    }
    h2 {
      font-family: 'OldLondon', sans-serif !important;
      font-size: 50px;
    }
</style>