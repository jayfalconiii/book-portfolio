<template>
  <div class="p-skills">
      <div class="l-skills">
            <p class="p-skills__txt-skills text-black u-font-praise u-text-underline u-text-shadow">Skills</p>
            
            <SkillSkeleton v-if="loading"/>
            <template v-else>
                <SkillEntry
                    class="q-py-md"
                    v-for="entry of skillList"
                    :entry="entry"
                    :key="entry.name"
                />
                <SkillLegend class="q-mt-lg"/>
            </template>            
      </div>
  </div>
</template>

<script>
import SkillEntry from "@/components/molecules/SkillEntry";
import SkillSkeleton from "@/components/molecules/skeletons/SkillSkeleton";
import SkillLegend from "@/components/atoms/SkillLegend";

export default {
    name: "TheSkills",
    components: {
        SkillEntry,
        SkillSkeleton,
        SkillLegend
    },
    data() {
        return {
            skillList: [],
            loading: true
        }
    },
    async mounted() {
        try {
            this.skillList = await this.fetchSkillList();
        } catch(e) {
            throw e;
        } finally {
            this.loading = false;
        }
    },
    methods: {
        async fetchSkillList() {
            // TODO: Add backend, currently using stubs
            const data = await import(/* webpackChunkName: "skills-stub" */ "@/assets/stubs/skills.json");
            return data.default;
        },
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
            padding: 2rem 5rem;
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