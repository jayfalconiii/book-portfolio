<template>
    <q-timeline-entry color="black" side="right">
        <template #title>
            <q-skeleton/>
        </template>
        <q-skeleton :style="{ margin: '-0.5rem 0 1rem 0' }" class="u-opacity-50" width="8rem"/>
        <q-skeleton class="q-mt-sm"/>
        <q-skeleton class="q-mt-sm"/>
        <q-skeleton class="q-mt-sm"/>
    </q-timeline-entry>
    <q-timeline-entry color="black" side="left">
        <template #title>
            <q-skeleton/>
        </template>
        <q-skeleton :style="{ margin: '-0.5rem 0 1rem 0' }" class="u-opacity-50" :class="{ 'float-right': $q.screen.gt.sm }" width="8rem"/>
        <q-skeleton class="q-mt-sm" width="100%"/>
        <q-skeleton class="q-mt-sm"/>
        <q-skeleton class="q-mt-sm"/>
    </q-timeline-entry>
    <q-timeline-entry color="black" side="right">
        <template #title>
            <q-skeleton/>
        </template>
        <q-skeleton :style="{ margin: '-0.5rem 0 1rem 0' }" class="u-opacity-50" width="8rem"/>
        <q-skeleton class="q-mt-sm"/>
        <q-skeleton class="q-mt-sm"/>
        <q-skeleton class="q-mt-sm"/>
    </q-timeline-entry>
</template>

<script>
export default {
    name: "TimelineSkeleton"
}
</script>