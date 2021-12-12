<template>
    <q-carousel
        model-value="skeleton"
        class="bg-none text-black"
        control-color="black"
        arrows
        infinite
        @click.stop
    >
        <q-carousel-slide name="skeleton" class="column no-wrap flex-center">
            <q-skeleton class="q-my-lg" width="50%"/>
            <q-skeleton class="q-my-sm" width="50%"/>
            <q-skeleton class="q-my-sm" width="50%"/>
            <q-skeleton class="q-my-sm" width="50%"/>
        </q-carousel-slide>
    </q-carousel>
</template>

<script>
export default {
    name: "CarouselSkeleton"
}
</script>