<template>
  <div class="p-achievements"></div>
</template>

<script>
export default {
    name: "TheAchievements"
}
</script>

<style lang="scss" scoped>
    @use "./src/css/mixins" as *;

    .p-achievements {
        @include paperBg;
        @include addPageNumber("2");
        display: flex;
        height: 100vh;
        padding: 2rem;
        box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);
    }
</style>