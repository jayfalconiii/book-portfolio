<template>
  <div class="c-error">
    <p class="u-font-praise">
      An error has occured! <br />
      Please try again.
    </p>
    <q-btn
      @click.stop="$emit('onClick')"
      text-color="black"
      color="white"
      label="Try again"
    />
  </div>
</template>

<script>
export default {
  name: "ErrorBlock",
};
</script>

<style lang="scss" scoped>
.c-error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: $negative;
  color: white;
  text-align: center;
  border-radius: 15px;

  p {
    font-size: 5vw;
    line-height: 1em;
  }
}
</style>
