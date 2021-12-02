<template>
    <q-timeline-entry
        class="u-font-praise"
        :style="{'text-align': 'left !important'}"
        :color="entry.color"
        :icon="entry.icon"
        :side="side"
    >
        <!-- Title slot for q-timeline -->
        <template #title>
            <p class="q-ma-none" :style="{ color: getPaletteColor(entry.color) }">{{ entry.title }}</p>
        </template>

        <!-- Default slot for q-timeline -->
        <template #default>
            <!-- Custom timeline subtitle -->
            <p
                class="q-timeline__subtitle u-font-roboto"
                :class="{
                    'u-text-left': side === 'right' || $q.screen.gt.xs,
                    'u-text-right': side === 'left' && $q.screen.gt.xs
                }"
            >{{ entry.subtitle }}</p>
            
            <!-- Custom timeline body -->
            <p
                class="q-timeline__descr u-font-roboto"
                :class="{
                    'float-left': side === 'right' && $q.screen.gt.xs,
                    'float-right': side === 'left' && $q.screen.gt.xs
                }"
                v-if="entry.description"
            >{{ entry.description }}</p>

            <ul v-if="'projects' in entry && entry.projects.length > 0">
                <ProjectEntry
                  v-for="entry,i of entry.projects"
                  :entry="entry"
                  :key="i"
                />
            </ul>

            <q-img
                v-if="entry.img"
                class="u-box-shadow q-mt-lg"
                :src="entry.img.src"
                :height="entry.img.height"
                :width="entry.img.width"
            />

            <q-space v-if="!!entry.gap" :style="{height: `${entry.gap}`}"/>
        </template>
    </q-timeline-entry>
</template>

<script>
import ProjectEntry from "@/components/atoms/ProjectEntry";
import { colors } from 'quasar';

export default {
    name: "TimelineEntry",
    components: {
        ProjectEntry
    },
    props: {
        side: {
            type: String,
            default: "left"
        },
        entry: {
            required: true,
            type: Object
        }
    },
    methods: {
        getPaletteColor: colors.getPaletteColor
    }
}
</script>

<style lang="scss" scoped>
    .q-timeline {
        &__subtitle {
            margin: -1.3rem 0 0 0;
            width: 100%;
            font-size: 0.7rem;
            font-weight: 400;
        }

        &__descr {
            width: 100%;
            height: 100%;
            font-weight: 300;
            font-size: 12px;
            line-height: 14px;

            @media (min-width: $breakpoint-md-min) {
                width: 80%;
            }
        }

        & ul {
            display: inline-block;
            padding-left: 2rem;
        }
    }
</style>