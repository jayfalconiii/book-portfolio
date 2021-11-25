<template>
  <div class="p-skills"></div>
</template>

<script>
export default {
    name: "TheSkills"
}
</script>

<style lang="scss" scoped>
    @use "./src/css/mixins" as *;

    .p-skills {
        @include paperBg;
        @include addPageNumber("3");
        display: flex;
        height: 100vh;
        padding: 2rem;
        box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);
    }
</style>