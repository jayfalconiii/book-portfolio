<template>
    <div class="c-pictures">
        <q-img
            v-for="picture of pictures"
            class="c-pictures__picture"
            :src="picture['src']"
            height="15rem"
            width="15rem"
            :key="picture['title']"
            @click="onClick"
        />
    </div>
</template>

<script>
export default {
    name: "PictureLists",
    props: {
        pictures: {
            type: Array,
            required: true
        }
    },
    methods: {
        onClick(e) {
            e.stopPropagation();
        }
    }
}
</script>

<style lang="scss" scoped>
    @use "~/src/css/mixins" as *;

    .c-pictures {
        margin: auto;

        &__picture {
            @include paperBg($yellow, $red-5);
            margin: 0.5rem;
        }
    }
</style>