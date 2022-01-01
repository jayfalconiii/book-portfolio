<template>
  <q-carousel
    class="c-carousel-images"
    v-model="slide"
    height="100%"
    transition-prev="slide-right"
    transition-next="slide-left"
    control-type="flat"
    control-color="white"
    arrows
    animated
    infinite
    autoplay
    keep-alive
  >
    <q-carousel-slide
      v-for="(picture, i) in pictures"
      :key="i"
      :name="i"
      :img-src="picture"
    />
  </q-carousel>
</template>

<script>
export default {
  name: "CarouselImages",
  props: {
    pictures: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      slide: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "~/src/css/mixins" as *;

.c-carousel-images {
  @include paperBg($yellow, $red-5);
  width: 100%;
}
</style>
