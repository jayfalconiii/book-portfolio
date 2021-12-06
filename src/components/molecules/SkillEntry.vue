<template>
    <div class="c-skills-list">
        <p class="c-skills-list__skill-name">{{ entry.name }}:</p>
        <SkillItem
            v-for="skill of entry.skills"
            :item="skill"
            :key="skill['title']"
        />
    </div>
</template>

<script>
import SkillItem from "@/components/atoms/SkillItem.vue";

export default {
    name: "SkillEntry",
    components: {
        SkillItem
    },
    props: {
        entry: {
            required: true,
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .c-skills-list {  
        &__skill-name {
            margin: 0.2rem 0;
            font-family: Praise;
            font-style: normal;
            font-weight: normal;
            font-size: 1.8rem;
            line-height: 22px;
            color: $black;
        }
    }
</style>