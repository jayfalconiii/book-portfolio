<template>
  <div class="p-achievements text-center">
    <p
      class="
        p-achievements__txt-heading
        u-text-underline u-font-praise u-text-shadow
      "
    >
      Achievements
    </p>
    <q-carousel
      v-if="!loading"
      v-model="slide"
      class="bg-none text-black"
      transition-prev="slide-right"
      transition-next="slide-left"
      control-color="black"
      animated
      padding
      arrows
      infinite
      @click.stop
    >
      <q-carousel-slide
        v-for="achievement of achievements"
        :key="achievement.id"
        :name="achievement.id"
        class="column no-wrap flex-center"
      >
        <p class="p-achievements__txt-title">{{ achievement.title }}</p>
        <p class="p-achievements__txt-descr">{{ achievement.descr }}</p>
      </q-carousel-slide>
    </q-carousel>
    <CarouselSkeleton v-else />
  </div>
</template>

<script>
import CarouselSkeleton from "@/components/molecules/skeletons/CarouselSkeleton";

export default {
  name: "TheAchievements",
  components: {
    CarouselSkeleton,
  },
  data() {
    return {
      slide: "skeleton",
      achievements: [],
      loading: true,
    };
  },
  async created() {
    try {
      const { data } = await this.fetchAchievements();
      this.achievements = data;
      this.slide = this.achievements[0].id;
    } catch (e) {
      throw e;
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async fetchAchievements() {
      return this.$api.get("json/achievements.json");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "~/src/css/mixins" as *;

.p-achievements {
  @include paperBg;
  @include addPageNumber("2");
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 2rem 0;
  box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);
  color: $black;

  &__txt-heading {
    font-size: 3em;
  }

  &__txt-title {
    font-weight: 900;
  }

  @media (min-width: $breakpoint-sm-min) {
    &__txt-title,
    &__txt-descr {
      padding: 0 10rem;

      text-justify: auto;
      text-align: justify;
    }
  }
}
</style>
