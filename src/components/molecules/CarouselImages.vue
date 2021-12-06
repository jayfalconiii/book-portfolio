<template>
    <q-carousel
        class="c-carousel-images"
        v-model="slide"
        height="100%"
        transition-prev="slide-right"
        transition-next="slide-left"
        arrows
        swipeable
        animated
        infinite
        autoplay
        keep-alive
    >
        <q-carousel-slide
          v-for="picture in pictures"
          :key="picture['title']"
          :name="picture['title']"
          :img-src="picture['src']"
        />
    </q-carousel>
</template>

<script>
export default {
    name: "CarouselImages",
    props: {
        pictures: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            slide: ""
        }
    },
    created() {
        this.slide = this.pictures[0].title;
    }
}
</script>

<style lang="scss" scoped>
    @use "~/src/css/mixins" as *;

    .c-carousel-images {
        @include paperBg($yellow, $red-5);
        width: 100%;
    }
</style>