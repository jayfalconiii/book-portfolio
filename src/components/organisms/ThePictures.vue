<template>
  <div
      class="p-pictures"
      @wheel="onWheel"
      @scroll="onScroll"
  >
      <div class="p-pictures__images" v-if="pictures.length > 0">
        <CarouselImages
            v-if="$q.screen.xs"
            :pictures="pictures"
            @click.stop
        />
        <PicturesList
            v-else
            :pictures="pictures"
        />
      </div>
      <div class="p-pictures__quote">
          <p class="u-font-praise text-black">
              “My greatest achievements are the <span>friends</span> I met along the way”
          </p>
      </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
const CarouselImages = defineAsyncComponent(() => import(/* webpackChunkName: "CarouselImages", webpackPrefetch: true */ '@/components/molecules/CarouselImages'));
const PicturesList = defineAsyncComponent(() => import(/* webpackChunkName: "PicturesList", webpackPrefetch: true */ '@/components/molecules/PicturesList'));

export default {
    name: "ThePictures",
    components: {
        CarouselImages,
        PicturesList
    },
    computed: {
        pictures() {
            let friendsPictures = [
                { title: "hiking", src: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80" },
                { title: "adventure", src: "https://images.unsplash.com/photo-1547469447-4afec158715b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" },
                { title: "momento", src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80" },
                { title: "mountains", src: "https://cdn.quasar.dev/img/mountains.jpg" },
                { title: "parallax1", src: "https://cdn.quasar.dev/img/parallax1.jpg" },
                { title: "mountains", src: "https://cdn.quasar.dev/img/parallax2.jpg" }
            ];
            return friendsPictures;
        }
    },
    data() {
        return {
            slide: 1,
            propagateWheelEvent: false
        }
    },
    methods: {
        onWheel(e) {
            if(!this.propagateWheelEvent && Math.abs(e.target.scrollTop) > 0) {
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
    }
}
</script>

<style lang="scss" scoped>
    @use "~/src/css/mixins" as *;

    .p-pictures {
        @include paperBg;
        @include addPageNumber("3");
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        height: 100vh;
        padding: 2rem;
        text-align: center;
        box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);
        padding: 0;
        overflow: scroll;

        @media (min-width: $breakpoint-sm-min) {
            padding: 2rem;

            &__quote > p {
                font-size: 2rem;
                width: 50%;
            }

            &__images {
                flex-grow: 1 !important;
            }
        }

        &__images {
            display: flex;
            flex-grow: 4;
            justify-content: center;
            align-items: center;
        }

        &__quote {
            display: inherit;
            flex-grow: 1;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }

        &__quote > p {
            height: fit-content;
            font-family: Praise;
            font-size: 24px;
            line-height: 29px;
        }

        &__quote > p > span {
            color: $green;
        }
    }
</style>