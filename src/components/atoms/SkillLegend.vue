<template>
    <div>
        <div v-for="legend of legends" class="c-legend" :key="legend.title">
            <div>
                <p class="c-legend__title u-font-praise" :style="{ color: getPaletteColor(legend.color) }">{{ legend.title }}</p>
                <p class="c-legend__subtitle u-font-praise" :style="{ color: getPaletteColor(legend.color) }">{{ legend.subtitle }}</p>
            </div>
            <div class="c-legend__circle" :style="{ backgroundColor: getPaletteColor(legend.color) }"/>
        </div>
    </div>
</template>

<script>
import { colors } from 'quasar';

export default {
    name: "SkillsLegend",
    methods: {
        getPaletteColor: colors.getPaletteColor
    },
    data() {
        return {
            legends: [
                {
                    title: "Familiar",
                    subtitle: "Personal Projects",
                    color: "black"
                },
                {
                    title: "Experienced",
                    subtitle: "With work experience",
                    color: "brown"
                },
                {
                    title: "Professional",
                    subtitle: "With work experience for more than 3+ years",
                    color: "blue"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

    .c-legend {
        display: flex;
        gap: 1rem;
        flex-direction: row-reverse;
        justify-content: flex-end;
        line-height: 17px;
        font-size: 12px;
        text-align: start;

        &__title {
            margin: 0;
            font-size: 1.8em;
        }

        &__subtitle {
            font-size: 1.2em;
            opacity: 50%;
        }

        &__circle {
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
        }

        @media (min-width: $breakpoint-sm-min) {
            flex-direction: row;
            justify-content: flex-end;
            font-size: 16px;
            text-align: end;
        }
    }
</style>