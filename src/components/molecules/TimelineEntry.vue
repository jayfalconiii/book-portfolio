<template>
    <q-timeline-entry
        class="u-font-praise"
        :style="{'text-align': 'left !important'}"
        :title="entry.title"
        :color="entry.color"
        :side="side"
    >
        <p
        class="q-timeline__subtitle u-font-roboto"
        :class="{
            'u-text-left': side === 'right' || $q.screen.gt.xs,
            'u-text-right': side === 'left' && $q.screen.gt.xs
        }"
        >{{ entry.subtitle }}</p>
        <p class="q-timeline__descr u-font-roboto" v-if="entry.description">{{ entry.description }}</p>
        <q-img
          v-if="entry.img"
          class="u-box-shadow q-mt-lg"
          :src="entry.img.src"
          :height="entry.img.height"
          :width="entry.img.width"
        />
        <q-space v-if="!!entry.gap" :style="{height: `${entry.gap}`}"/>
    </q-timeline-entry>
</template>

<script>
export default {
    name: "TimelineEntry",
    props: {
        side: {
            type: String,
            default: "left"
        },
        entry: {
            required: true,
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .q-timeline__subtitle {
        margin: -1.3rem 0 0 0;
        width: 100%;
        font-size: 0.7rem;
        font-weight: 400;
    }

    .q-timeline__descr {
        width: 100%;

        @media (min-width: $breakpoint-md-min) {
            width: 80%;
        }
    }
</style>