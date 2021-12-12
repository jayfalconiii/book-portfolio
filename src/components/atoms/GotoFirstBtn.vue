<template>
  <q-btn class="c-btn" round color="green" icon="arrow_back"/>
</template>

<script>
export default {
    name: "GotoFirstBtn"
}
</script>

<style lang="scss" scoped>
    .c-btn {
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 1rem;

        @media (min-width: $breakpoint-sm-min) {
            margin: 2rem;
            font-size: 1.3rem;
        }
    }
</style>