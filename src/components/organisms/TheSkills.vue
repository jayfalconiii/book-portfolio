<template>
  <div class="p-skills">
      <div class="l-skills">
            <p class="p-skills__txt-skills text-black u-font-praise u-text-underline u-text-shadow">Skills</p>
            
            <SkillEntry
                class="q-py-md"
                v-for="entry of skillList"
                :entry="entry"
                :key="entry.name"
            />
      </div>
  </div>
</template>

<script>
import SkillEntry from "@/components/molecules/SkillEntry";

export default {
    name: "TheSkills",
    components: {
        SkillEntry
    },
    data() {
        return {
            skillList: [
                {
                    name: "Front-End",
                    skills: [
                        { title: "Vue Js", profeciency: 2 }, 
                        { title: "React Js", profeciency: 1},
                        { title: "Vuex", profeciency: 2},
                        { title: "Vue Router", profeciency: 2},
                        { title: "Quasar", profeciency: 1},
                        { title: "Angular", profeciency: 1},
                        { title: "Vuetify", profeciency: 1},
                        { title: "Three Js", profeciency: 1},
                        { title: "Bootstrap", profeciency: 1},
                        { title: "CSS", profeciency: 2},
                        { title: "SCSS", profeciency: 1},
                        { title: "HTML", profeciency: 2},
                        { title: "Javascript", profeciency: 2},
                    ]
                },
                {
                    name: "Back-End",
                    skills: [
                        { title: "Express", profeciency: 1}, 
                        { title: "Workbox", profeciency: 1},
                        { title: "SW", profeciency: 1},
                        { title: "Mongo DB", profeciency: 1},
                        { title: "Node JS", profeciency: 2},
                        { title: "Firebase", profeciency: 1}
                    ]
                },
                {
                    name: "Testing",
                    skills: [
                        { title: "Jest", profeciency: 2}, 
                        { title: "Selenium", profeciency: 1},
                        { title: "Appium", profeciency: 1},
                        { title: "TestProject.io", profeciency: 2}
                    ]
                },
                {
                    name: "Others",
                    skills: [
                        { title: "Typescript", profeciency: 1}, 
                        { title: "Webpack", profeciency: 1}, 
                        { title: "Java", profeciency: 2},
                        { title: "C#(.NET Framework)", profeciency: 2},
                        { title: "C/C++", profeciency: 1}
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @use "~/src/css/mixins" as *;

    .p-skills {
        @include paperBg;
        @include addPageNumber("4");
        display: flex;
        height: 100vh;
        padding: 2rem;
        box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);
        overflow: scroll;

        @media (min-width: $breakpoint-sm-min) {
            padding: 5rem;
        }

        .l-skills {
            width: 100%;
        }

        &__txt-skills {
            display: block;
            font-size: 3em;
        }
    }
</style>