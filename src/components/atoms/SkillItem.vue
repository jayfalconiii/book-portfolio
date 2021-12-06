<template>
    <p
        class="skill-item"
        :key="item.title"
        :class="{
            'bg-brown': item.profeciency === 2,
            'bg-blue': item.profeciency === 3
        }"
    >
    {{ item.title }}
    </p>
</template>

<script>
export default {
    name: "SkillItem",
    props: {
        item: {
            required: true,
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .skill-item {
        display: inline-block;
        width: fit-content;
        height: fit-content;
        margin: 0.2rem;
        padding: 0.5rem 2rem;
        background: $black;
        color: white;
        
        font-family: Roboto;
        font-weight: 300;
        font-size: 13px;
        line-height: 15px;

        text-align: center;
        text-transform: uppercase;

        border-radius: 50px;
    }
</style>