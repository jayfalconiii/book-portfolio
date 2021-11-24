<template>
  <q-layout view="lhr Lpr lfr" class="p-home">

    <div class="l-layout--left" v-if="$q.screen.gt.xs">
        <div class="l-watermark">
            <div class="l-watermark__c-icon"></div>
            <p class="l-watermark__c-name">Jay Falcon</p>
        </div>
    </div>

    <div class="l-layout--right u-box-shadow" ref="foldArea">
        <div class="l-layout--right__c-second text-center">
            <TheExperiences />
        </div>
        <div class="l-layout--right__c-first text-center">
            <TheHeader @onClickOpen="nextPage"/>
        </div>
     </div>
  </q-layout>
</template>

<script>
import TheHeader from "@/components/organisms/TheHeader.vue";
import TheExperiences from "@/components/organisms/TheExperiences.vue";

export default {
    name: "HomePage",
    components: {
        TheHeader,
        TheExperiences
    },
    data() {
        return {
            pageProgress: 0,
            pageTimeline: null,
            animIsPaused: false,
            pauseProgress: 0,

            wheelListener: null
        }
    },
    mounted() {
        let animations = [
            {
                rotateY: 180,
                targets: ".l-layout--right__c-first"
            },{
                rotateY: 180,
                targets: ".l-layout--right__c-second"
            }
        ];

        this.initializeTimeline();
        this.addAnimations(...animations);
        this.addWheelEventListener();        
    },
    watch: {
        pageProgress(newValue) {
            if(!this.animIsPaused) {
                const seek = (this.pageTimeline.duration) * (newValue / 100);
                this.pageTimeline.seek(seek);
            }
        }
    },
    methods: {
        initializeTimeline(option = { autoplay: false }) {
            this.pageTimeline = this.$anime.timeline(option);
        },
        addWheelEventListener() {
            const el = this.$refs.foldArea;
            this.wheelListener = el.addEventListener("wheel", this.onMouseWheel);
        },
        onMouseWheel(e) {
            if(e.deltaY < 0 && this.pageProgress >= 0) {
                this.pageProgress-=10;
            } else if(this.pageProgress < 100) {
                this.pageProgress+=10;
            }
        },
        addAnimations(...options) {
            options.forEach(option => {
                this.pageTimeline.add(option);
            });
        },
        pauseAnimation() {
            if(this.animIsPaused) return;

            this.animIsPaused = true;
            console.log("Paused at", this.pageProgress);
            this.pauseProgress = this.pageProgress; // Store progress
        },
        playAnimation() {
            if(!this.animIsPaused) return;

            this.animIsPaused = false;
            console.log("Resumed at", this.pauseProgress);
            this.pageProgress = this.pauseProgress; // Retrieve saved progress to resume
        },
        nextPage() {
            if(this.pageProgress < 100) {
                this.pageProgress += 50;
            }            
        },
        prevPage() {
            if(this.pageProgress > 0) {
                this.pageProgress -= 50;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .p-home {
        position: fixed;
        display: flex;
    }

    .l-layout--left {
        position: relative;
        display: flex;
        flex: 1 0;
        justify-content: center;
        height: 100vh;
        background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.0446875) 41.15%, rgba(0, 0, 0, 0.13) 100%), $dark-green;
        margin: 0 0 1rem 0;
        z-index: 1;

        .l-watermark {
            position: fixed;
            bottom: 0;
        }

        .l-watermark__c-icon {
            height: 10rem;
            width: 10rem;
            background: $warning;
        }

        .l-watermark__c-name {
            margin-top: .5rem;
            text-align: center;
            color: white;
            font-size: 1rem;
            font-family: 'Praise', cursive;
        }
    }

    .l-layout--right {
        position: relative;
        height: 100vh;
        width: 100%;

        @media (min-width: $breakpoint-md-min) {
            flex: 4 0;
        }

        &__c-first,
        &__c-second {
            position: absolute;
            height: 100vh;
            width: 100%;
            background: linear-gradient(92.63deg, rgba(0, 0, 0, 0.3) -55.09%, rgba(0, 0, 0, 0) 100.71%), #FFFFFF;
            box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);

            transform: rotateY(0deg);
            transform-origin: 0% 0%;
            transition: transform 1000ms cubic-bezier(0.645, 0.045, 0.355, 1);
        }
    }
</style>