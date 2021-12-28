<template>
  <div class="c-pictures">
    <q-img
      v-for="(picture, i) of pictures"
      class="c-pictures__picture"
      :src="picture"
      height="15em"
      width="15em"
      :key="i"
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
      required: true,
    },
  },
  methods: {
    onClick(e) {
      e.stopPropagation();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "~/src/css/mixins" as *;

.c-pictures {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;

  &__picture {
    @include paperBg($yellow, $red-5);
    margin: 0.5rem;
  }
}
</style>
