<template>
    <div v-for="i in 3" :key="i">
        <q-skeleton
            class="q-mt-lg q-mb-sm"
            height="1.8rem"
            width="10rem"
        />
        <template v-for="j in 10" :key="j">
            <q-skeleton class="skill-item-skeleton" height="1.8rem" :width="getRandomWidth()"/>
        </template>
    </div>
</template>

<script>
export default {
    name: "SkillSkeleton",
    methods: {
        getRandomWidth(max=10, min=4) {
            let w = Math.floor(Math.random() * (max-min+1)) + min;
            return w + "rem";
        }
    }
}
</script>

<style lang="scss" scoped>
    .skill-item-skeleton {
        display: inline-block;
        margin: 0.2rem;
        border-radius: 50px;
    }
</style>