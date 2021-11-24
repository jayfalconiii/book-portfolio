<template>
    <div
      class="p-demo-fold"
      ref="foldArea"
    >
            <div class="p-demo-fold__c-first text-center">
                Page 2
            </div>
            <div class="p-demo-fold__c-second text-center">
                Page 1
            </div>
    </div>
</template>

<script>
export default {
    name: "DemoFold",
    data() {
        return {
            animation: 0
        }
    },
    mounted() {
        let foldAnim = this.$anime.timeline({

            autoplay: false
        }).add({
            rotateY: 180,
            translateZ: 1,
            targets: ".p-demo-fold__c-second"
        }).add({
            rotateY: 180,
            translateZ: 1,
            targets: ".p-demo-fold__c-first"
        });

        const el = this.$refs.foldArea;
        el.addEventListener("wheel", (e) => this.onWheel(foldAnim,e));
    },
    methods: {
        onWheel(anim, e) {
            const seek = (anim.duration) * (this.animation / 100);
            anim.seek(seek);

            if(e.deltaY >= 0 && this.animation >= 0) {
                this.animation-=10;
            } else if(this.animation < 100) {
                this.animation+=10;
            }
        }
    }
}
</script>

<style lang="scss">
    .p-demo-fold {
        position: relative;
        height: 100vh;
        width: 100%;
        overflow: none;

        &__c-first,
        &__c-second {
            position: absolute;
            height: 100vh;
            width: 100%;
            background: linear-gradient(92.63deg, rgba(0, 0, 0, 0.3) -55.09%, rgba(0, 0, 0, 0) 100.71%), #FFFFFF;
            box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.15);
            border: rgba(0, 0, 0, 0.5) solid black;

            transform: rotateY(0);
            transform-origin: 0% 0%;
            transition: transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
    }
</style>