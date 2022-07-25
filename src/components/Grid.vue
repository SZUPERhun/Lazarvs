<template>
    <div>
        <div class="row d-flex" :class="{ 'justify-content-center': justify }" v-for="i in rowCount" :key="i">
            <div v-for="item in rowItems(i)" :class="itemClass" :style="itemStyle" :key="item.id">
                <slot :item="item"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Grid",
        props: {
            justify: Boolean,
            items: {
                type: Array,
                required: true,
            },
            itemsPerRow: {
                type: Number,
                default: 3,
            },
            itemClass: {
                type: String,
                default: '',
            },
            itemStyle: {
                type: String,
                default: '',
            },
        },
        computed:{
            rowCount() {
                return Math.ceil(this.items.length / this.itemsPerRow);
            },
        },
        methods: {
            rowItems(i) {
                return this.items.slice((i - 1) * this.itemsPerRow, i * this.itemsPerRow);
            },
        },
    }
</script>

<style scoped>
    .row {
        margin: 0;
    }
    .tight {
        padding: 0;
        margin: 0;
    }
    .videos {
        padding: 10px;
    }
</style>