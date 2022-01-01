<template>
  <div
    class="p-experiences"
    @wheel.passive="onWheel"
    @scroll.passive="onScroll"
  >
    <q-timeline
      :layout="$q.screen.lt.sm ? 'dense' : 'loose'"
      class="p-experience__c-timeline text-black"
      v-if="!isError"
    >
      <q-timeline-entry
        heading
        class="u-font-praise u-text-underline u-text-shadow"
      >
        Experiences
      </q-timeline-entry>

      <TimelineSkeleton v-if="loading" />
      <TimelineEntry
        v-else
        v-for="(entry, i) of timelineEntries"
        :key="entry.id"
        :side="i % 2 || i === timelineEntries.length - 1 ? 'right' : 'left'"
        :entry="entry"
      />
    </q-timeline>
    <ErrorBlock @onClick="fetchTimelineEntries" v-else />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
const TimelineEntry = defineAsyncComponent(() =>
  import(
    /* webpackChunkName: "TimelineEntry", webpackPreload: true */ "@/components/molecules/TimelineEntry"
  )
);

import TimelineSkeleton from "@/components/molecules/skeletons/TimelineSkeleton.vue";

export default {
  name: "TheExperiences",
  components: {
    TimelineEntry,
    TimelineSkeleton,
  },
  data() {
    return {
      timelineEntries: [],
      propagateWheelEvent: false,
      loading: true,
      isError: false,
    };
  },
  async mounted() {
    await this.fetchTimelineEntries();
  },
  methods: {
    async fetchTimelineEntries() {
      this.loading = true;
      this.isError = false;

      try {
        const { data } = await this.$api.get("api/experiences.json");
        this.timelineEntries = data;
        this.loading = false;
      } catch (e) {
        this.isError = true;
        throw e;
      }
    },
    onWheel(e) {
      if (!this.propagateWheelEvent && !this.loading) {
        e.stopPropagation();
      }
    },
    onScroll(e) {
      if (this.$q.platform.is.mobile) {
        return;
      }

      let element = e.target;
      if (
        element.scrollHeight - Math.abs(element.scrollTop) ===
          element.clientHeight ||
        Math.abs(element.scrollTop) <= 0
      ) {
        setTimeout(() => {
          this.propagateWheelEvent = true;
        }, 1000);
      } else {
        this.propagateWheelEvent = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "~/src/css/mixins" as *;

.p-experiences {
  @include paperBg;
  @include addPageNumber("1");
  display: flex;
  height: 100%;
  padding: 2rem;
  box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);
  overflow: scroll;
  scroll-behavior: smooth;
}
</style>
