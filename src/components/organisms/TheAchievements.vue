<template>
  <div class="p-achievements text-center">
        <p class="p-achievements__txt-heading u-text-underline u-font-praise u-text-shadow">Achievements</p>
        <q-carousel
            v-model="slide"
            class="bg-yellow-4 text-black shadow-1"
            transition-prev="slide-right"
            transition-next="slide-left"
            control-color="black"
            height="80%"
            autoplay
            swipeable
            animated
            padding
            arrows
            infinite
            @click="onSlide"
        >
            <template v-for="achievement of achievements" :key="achievement.key">
                <q-carousel-slide :name="achievement.key" class="column no-wrap flex-center">
                    <p class="p-achievements__txt-title">{{ achievement.title }}</p>
                    <p class="p-achievements__txt-descr">{{ achievement.descr }}</p>
                </q-carousel-slide>
            </template>
        </q-carousel>
  </div>
</template>

<script>
export default {
    name: "TheAchievements",
    data() {
        return {
            slide: "paper",
            achievements: [
                {
                    key: "paper",
                    title: "Research Paper: “Using Wearable Heart Rate Device To Develop A Stress Level Index”",
                    descr: "Using ReactJS and Java Android to create a heart rate monitoring application that communicates with the Xiaomi Mi-Band via bluetooth LTE; back-end uses firbase cloud functions and realtime database. Data is used for creating a stress level index."
                },
                {
                    key: "cert",
                    title: "Java SE8 OCA Certification",
                    descr: "Java SE8 Oracle Certified Associate Certification"
                },
                {
                    key: "ard",
                    title: "Associate R&D Engineer",
                    descr: "Associate Research and Development Engineer"
                },
                {
                    key: "sard",
                    title: "Senior Associate R&D Engineer",
                    descr: "Senior Associate Research and Development Engineer"
                }
            ]
        }
    },
    methods: {
        onSlide(e) {
            e.stopPropagation();
        }
    }
}
</script>

<style lang="scss" scoped>
    @use "~/src/css/mixins" as *;

    .p-achievements {
        @include paperBg;
        @include addPageNumber("2");
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 2rem;
        box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);
        color: $black;

        &__txt-heading {
            font-size: 3em;
        }

        &__txt-title {
            font-weight: 900;
        }

        @media (min-width: $breakpoint-sm-min) {
            &__txt-title,
            &__txt-descr {
                padding: 0 10rem;

                text-justify: auto;
                text-align: justify;
            }
        }
    }
</style>