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

        <TimelineEntry 
            v-for="entry,i of timelineEntries"
            :key="i"
            :side="i%2||i===timelineEntries.length-1?'right':'left'"
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
                    color: "red",
                    icon: "cake",
                    img: {
                        src: "https://images.unsplash.com/photo-1606761684249-01d88ca3c772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                        height: "10rem",
                        width: "10rem"
                    },
                },
                {
                    title: "College - Computer Engineering",
                    subtitle: "June 6, 2010",
                    icon: "school",
                    color: "black",
                },
                {
                    title: "Internship: Zoog Tech",
                    subtitle: "January 30, 2019",
                    description: "Using ReactJS to create responsive web applications. Was also taught the basics of Appium and Selenium.",
                    color: "blue",
                },
                {
                    title: "Part-time: PhotoUp",
                    subtitle: "January 30, 2019",
                    description: "Real estate photo editing work. Worked part-time on a graveyard shift as a photo editor while working on our research paper for graduation.",
                    color: "brown"
                },
                {
                    title: "College - Graduation",
                    subtitle: "January 30, 2019",
                    color: "red",
                    icon: "celebration"
                },
                {
                    title: "Advanced World Solutions",
                    subtitle: "January 30, 2019",
                    projects: [
                        {
                            title: "ACTION Training",
                            subtitle: "March 2019 - October 2019",
                            descr: "Internal training program by the company to teach recent graduates about Japanese (N5 & N4), Java, Javascript, C#, project management, ISTQB testing, and bussiness practices."
                        },
                        {
                            title: "WMI Developer and Windows Service Support for Lenovo Dock Manager",
                            subtitle: "March 2019 - October 2019",
                            descr: "Created WMI and integrated it into a windows service using .NET Framework to listen for Lenovo docking stations and input devices for communication with the Dock Manager application."
                        },
                        {
                            title: "RSYS Test Project Investigation",
                            subtitle: "November 2020 - February 2019",
                            descr: "Created automation scripts using testproject.io to automate webpages and mobile applications for E2E testing."
                        },
                        {
                            title: "Vue Front-End Web Developer for RSYS",
                            subtitle: "November 2020 - February 2019",
                            descr: "Created web pages and components specifically for  handling user forms for insurance calculations and retrieving user data using VueJS with JEST for unit testing. Uses Vue Router and Vuex for state management and route mapping."
                        },
                    ],
                    color: "blue",
                    icon: "work"
                },
                {
                    title: "Next Step...",
                    subtitle: "???",
                    color: "green",
                    icon: "question_mark",
                    gap: "2rem"
                }
            ],
            propagateWheelEvent: false
        }
    },
    methods: {
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
    @use "./src/css/mixins" as *;

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