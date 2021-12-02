<template>
  <div class="p-pictures"></div>
</template>

<script>
export default {
    name: "ThePictures"
}
</script>

<style lang="scss" scoped>
    @use "./src/css/mixins" as *;

    .p-pictures {
        @include paperBg;
        @include addPageNumber("3");
        display: flex;
        height: 100vh;
        padding: 2rem;
        box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);
    }
</style>