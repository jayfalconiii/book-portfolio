<template>
  <div class="footer q-mt-lg">
    <div class="flex q-my-sm">
      <q-icon name="fab fa-github" color="white" size="2em" />
      <a
        href="https://github.com/jayfalconiii/portfolio"
        class="q-ml-sm q-my-auto q-pa-none text-white"
        >https://github.com/jayfalconiii/portfolio</a
      >
    </div>
    <div class="flex q-my-sm">
      <q-icon name="fab fa-linkedin-in" color="white" size="2em" />
      <a
        href="https://www.linkedin.com/in/bienvenido-falcon-iii"
        class="q-ml-sm q-my-auto q-pa-none text-white"
        >linkedin.com/in/bienvenido-falcon-iii</a
      >
    </div>
    <div class="flex q-my-sm">
      <q-icon name="fas fa-envelope" color="white" size="2em" />
      <p class="q-ml-sm q-my-auto q-pa-none text-white">
        bienvenido.falconIII@gmail.com
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactFooter",
};
</script>

<style lang="scss" scoped>
.footer {
  width: fit-content;
  font-size: 10px;
  word-wrap: break-word;

  @media (min-width: $breakpoint-sm-min) {
    font-size: 8px;
  }
}
</style>
