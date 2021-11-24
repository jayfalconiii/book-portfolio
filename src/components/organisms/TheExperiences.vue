<template>
  <div class="c-experiences">
      <q-timeline
        :layout="$q.screen.lt.sm ? 'dense': 'loose'"
        class="c-experience__c-timeline text-black"
      >
        <q-timeline-entry heading class="u-font-praise u-text-underline u-text-shadow">
            Experiences
        </q-timeline-entry>

        <TimelineEntry 
            v-for="entry,i of timelineEntries"
            :key="i"
            :side="i%2?'right':'left'"
            :entry="entry"
        />
      </q-timeline>
  </div>
</template>

<script>
import TimelineEntry from "@/components/molecules/TimelineEntry.vue"

export default {
    name: "TheExperiences",
    components: {
        TimelineEntry
    },
    data() {
        return {
            timelineEntries: [
                {
                    title: "Happy Birthday",
                    subtitle: "July 2, 1997",
                    color: "negative",
                    img: {
                        src: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                        height: "10rem",
                        width: "10rem"
                    },
                    gap: "1rem"
                },
                {
                    title: "College",
                    subtitle: "June 6, 2010",
                    description: "Met many wonderful people, especially my best friend whom I love very much!",
                    color: "black",
                },
                {
                    title: "Advanced World Solutions",
                    subtitle: "January 30, 2019",
                    color: "blue",
                },
                {
                    title: "Test",
                    subtitle: "January 30, 2019",
                    color: "blue",
                },
                {
                    title: "Test",
                    subtitle: "January 30, 2019",
                    color: "blue",
                },
                {
                    title: "Test",
                    subtitle: "January 30, 2019",
                    color: "blue",
                },
                {
                    title: "Test",
                    subtitle: "January 30, 2019",
                    color: "blue",
                },
                {
                    title: "Test",
                    subtitle: "January 30, 2019",
                    color: "blue",
                },
                {
                    title: "Test",
                    subtitle: "January 30, 2019",
                    color: "blue",
                },
                {
                    title: "Next Step",
                    subtitle: "???",
                    color: "green",
                },
            ]
        }
    }
}
</script>

<style lang="scss">
    .c-experiences {
        display: flex;
        min-height: 100vh;
        padding: 2rem;
        background: linear-gradient(92.63deg, rgba(0, 0, 0, 0.3) -55.09%, rgba(0, 0, 0, 0) 100.71%), #FFFFFF;
    }
</style>