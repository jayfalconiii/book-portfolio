<template>
  <div
    class="p-experiences"
    @wheel="onWheel"
    @scroll="onScroll"
  >
      <q-timeline
        :layout="$q.screen.lt.sm ? 'dense': 'loose'"
        class="p-experience__c-timeline text-black"
      >
        <q-timeline-entry heading class="u-font-praise u-text-underline u-text-shadow">
            Experiences
        </q-timeline-entry>

        <TimelineSkeleton v-if="loading"/>
        <TimelineEntry 
            v-else
            v-for="entry,i of timelineEntries"
            :key="i"
            :side="i%2||i===timelineEntries.length-1?'right':'left'"
            :entry="entry"
        />
      </q-timeline>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
const TimelineEntry = defineAsyncComponent(() => import(/* webpackChunkName: "TimelineEntry", webpackPreload: true */ '@/components/molecules/TimelineEntry'));
import TimelineSkeleton from "@/components/molecules/skeletons/TimelineSkeleton.vue";

export default {
    name: "TheExperiences",
    components: {
        TimelineEntry,
        TimelineSkeleton
    },
    data() {
        return {
            timelineEntries: [],
            propagateWheelEvent: false,
            loading: true
        }
    },
    async mounted() {
        try {
            this.timelineEntries = await this.fetchTimelineEntries();
        } catch(e) {
            throw e;
        } finally {
            this.loading = false;
        }
    },
    methods: {
        async fetchTimelineEntries() {
            // TODO: Add backend, currently using stubs
            const data = await import(/* webpackChunkName: "experiences-stub" */ "@/assets/stubs/experiences.json");
            return data.default;
        },
        onWheel(e) {
            if(!this.propagateWheelEvent) {
                e.stopPropagation();
            }
        },
        onScroll(e) {
            if(this.$q.platform.is.mobile) {
                return;
            }

            let element = e.target;
            if (element.scrollHeight - Math.abs(element.scrollTop) === element.clientHeight || Math.abs(element.scrollTop) <= 0)
            {
                setTimeout(() => {
                    this.propagateWheelEvent = true;
                }, 1000);
            } else {
                this.propagateWheelEvent = false;
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    @use "~/src/css/mixins" as *;

    .p-experiences {
        @include paperBg;
        @include addPageNumber("1");
        display: flex;
        height: 100vh;
        padding: 2rem;
        box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);
        overflow: scroll;
        scroll-behavior: smooth;
    }
</style>