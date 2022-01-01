<template>
  <div class="p-achievements text-center">
    <template v-if="!isError">
      <p
        class="
          p-achievements__txt-heading
          u-text-underline u-font-praise u-text-shadow
        "
      >
        Achievements
      </p>
      <q-carousel
        ref="carousel"
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
      >
        <q-carousel-slide
          v-for="achievement of achievements"
          class="column no-wrap flex-center"
          :key="achievement.id"
          :name="achievement.id"
        >
          <p class="p-achievements__txt-title">{{ achievement.title }}</p>
          <p class="p-achievements__txt-descr">{{ achievement.descr }}</p>
        </q-carousel-slide>
      </q-carousel>
      <CarouselSkeleton v-else />
    </template>
    <ErrorBlock
      :style="[
        {
          width: '80%',
          marginInline: 'auto',
        },
      ]"
      @onClick="fetchAchievements"
      v-else
    />
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
      isError: false,
    };
  },
  async created() {
    await this.fetchAchievements();

    // Stop propogation click events on carousel chevrons
    this.$refs.carousel.$el.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
  },
  methods: {
    async fetchAchievements() {
      this.loading = true;
      this.isError = false;

      try {
        const { data } = await this.$api.get("api/achievements.json");
        this.achievements = data;
        this.slide = this.achievements[0].id;
        this.loading = false;
      } catch (e) {
        this.isError = true;
        throw e;
      }
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
