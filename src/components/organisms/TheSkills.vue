<template>
  <div class="p-skills" @wheel.passive="onWheel" @scroll.passive="onScroll">
    <div class="l-skills">
      <p
        class="
          p-skills__txt-skills
          text-black
          u-font-praise u-text-underline u-text-shadow
        "
      >
        Skills
      </p>

      <SkillSkeleton v-if="loading" />
      <template v-else>
        <SkillList
          class="q-py-md"
          v-for="entry of skillList"
          :entry="entry"
          :key="entry.name"
        />
        <SkillLegend class="q-my-lg" />
      </template>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
const SkillList = defineAsyncComponent(() =>
  import(
    /* webpackChunkName: "SkillEntry", webpackPreload: true */ "@/components/molecules/SkillList"
  )
);
const SkillLegend = defineAsyncComponent(() =>
  import(
    /* webpackChunkName: "SkillLegend", webpackPreload: true */ "@/components/atoms/SkillLegend"
  )
);
import SkillSkeleton from "@/components/molecules/skeletons/SkillSkeleton";

export default {
  name: "TheSkills",
  components: {
    SkillList,
    SkillSkeleton,
    SkillLegend,
  },
  data() {
    return {
      skillList: [],
      loading: true,
      propagateWheelEvent: false,
    };
  },
  async mounted() {
    try {
      this.skillList = await this.fetchSkillList();
    } catch (e) {
      throw e;
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async fetchSkillList() {
      // TODO: Add backend, currently using stubs
      const data = await import(
        /* webpackChunkName: "skills-stub" */ "@/assets/stubs/skills.json"
      );
      return data.default;
    },
    onWheel(e) {
      if (!this.propagateWheelEvent) {
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

.p-skills {
  @include paperBg;
  @include addPageNumber("4");
  display: flex;
  height: 100%;
  padding: 2rem;
  box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);
  overflow-y: scroll;

  @media (min-width: $breakpoint-sm-min) {
    padding: 3rem 5rem;
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
