<template>
    <li class="c-project q-my-lg">
        <p class="c-project__title q-ma-none">{{ entry.title }}</p>
        <p class="c-project__subtitle q-mb-sm">{{ entry.subtitle }}</p>
        <p class="c-project__descr q-ma-none">{{ entry.descr }}</p>
    </li>
</template>

<script>
export default {
    name: "ProjectItem",
    props: {
        entry: {
            required: true,
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    .c-project {
        font-family: Roboto;
        list-style-type: none;

        &::before {
            content: "-";
            position: absolute;
            display: block;
            transform: translateX(-20px) translateY(-5px);
        }

        &__title {
            font-weight: normal;
            font-size: 14px;
            line-height: 15px;
        }

        &__subtitle {
            font-weight: 200;
            font-size: 11px;
            text-transform: uppercase;
            line-height: 11px;
        }

        &__descr {
            font-weight: 300;
            font-size: 13px;
            line-height: 13px;
        }
    }
</style>