<template>
  <div class="c-header">
    <!-- Header Left - Profile Area -->
    <div class="l-head-prof">
      <q-img
        :src="profilePicture"
        height="12rem"
        width="12rem"
        class="l-head-prof__prof-pic u-box-shadow"
      >
        <template #loading>
          <q-skeleton size="100%" type="circle" />
        </template>
      </q-img>
      <p class="l-head-prof__txt-name u-text-shadow">
        Bienvenido <span class="text-green">"Jay"</span> Falcon III
      </p>
      <p class="l-head-prof__txt-role u-font-praise u-text-shadow">Developer</p>
      <q-btn
        @click="onClickOpen"
        class="l-head-prof__more-btn"
        text-color="brown"
        color="white"
        label="OPEN"
        dense
      >
      </q-btn>
    </div>

    <!-- Header Right - Welcome Area -->
    <div class="l-head-pic">
      <q-img
        :src="headerPicture"
        class="l-head-pic__c-head-pic u-box-shadow--left"
      >
        <template #loading>
          <q-skeleton size="100%" />
        </template>
        <div class="c-head-pic__caption">
          <p class="u-font-praise">
            Hi, I'm <span class="text-green q-ml-sm">Jay!</span>
          </p>
          <p>
            I’m an aspiring software architect who loves to code and learn
            different technologies while having fun. I created this portfolio to
            compile my experiences and show my skills in web development.
            <br /><br />
            I’d love for more feedback to help in my journey, so please feel
            free to
            <span
              :style="{ textDecoration: 'underline', cursor: 'pointer' }"
              @click="$emit('gotoContact')"
              >contact me</span
            >. Also, check out my code on github!
          </p>
        </div>
      </q-img>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      headerPicture:
        "https://drive.google.com/uc?id=1AjR_Q7zUC-HZjt7NnzLnHWeTRDuck5GL",
      profilePicture:
        "https://drive.google.com/uc?id=11mP1uPDlI4oA68h3r_T3pZ1aMGnDiQBu",
    };
  },
  methods: {
    onClickOpen() {
      this.$emit("onClickOpen");
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.q-img) {
  // Erase unecessary padding inside q-img
  & > div:first-of-type {
    padding-bottom: 0 !important;
  }
}
.c-header {
  display: flex;
  flex-direction: column-reverse;
  height: 100vh;
  background: linear-gradient(
      92.63deg,
      rgba(0, 0, 0, 0.3) -55.09%,
      rgba(0, 0, 0, 0) 100.71%
    ),
    $black-cover;
}

.l-head-prof {
  position: relative;
  top: -5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 0;

  &__prof-pic {
    background: white;
    margin-bottom: 1rem;
    border-radius: 50%;
    z-index: 2;
  }

  &__txt-name {
    margin: 0;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
    color: white;
  }

  &__txt-role {
    font-size: 2rem;
    color: $green;
  }

  &__more-btn {
    height: 2rem;
    width: 7rem;
    font-weight: 1000;
    border: "1px solid rgba(0, 0, 0, 0.15)";
  }
}

.l-head-pic {
  position: relative;
  flex: 1.5 0;
  background: white;

  &__c-head-pic {
    height: 100%;
  }

  .c-head-pic__caption {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-align: center;
    font-weight: 300;
    font-size: 80%;

    & > .u-font-praise {
      margin-bottom: 0;
      font-size: 3em;
    }

    @media (max-height: 600px) and (max-width: $breakpoint-sm-max) {
      font-size: 65%;
      justify-content: start;
    }
  }
}

@media (min-width: $breakpoint-md-min) {
  .c-header {
    flex-direction: row;
  }
  .l-head-prof {
    top: 0 !important;

    &__prof-pic {
      height: 18rem !important;
      width: 18rem !important;
    }
  }
  .l-head-pic {
    flex: 1 0 !important;
  }
}
</style>
