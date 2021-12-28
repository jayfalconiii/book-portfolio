<template>
  <div class="p-back">
    <p class="p-back__txt-heading u-text-underline u-font-praise u-text-shadow">
      Get in touch!
    </p>
    <ContactForm @click.stop />
    <Links @click.stop v-if="$q.screen.lt.md" />
    <GotoFirstBtn @click="$emit('gotoFirst')" />
  </div>
</template>

<script>
import ContactForm from "@/components/molecules/ContactForm";
import Links from "@/components/atoms/Links";
import GotoFirstBtn from "@/components/atoms/GotoFirstBtn";

export default {
  name: "TheBack",
  components: {
    ContactForm,
    Links,
    GotoFirstBtn,
  },
};
</script>

<style lang="scss" scoped>
.p-back {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  background: linear-gradient(
      92.63deg,
      rgba(0, 0, 0, 0.3) -55.09%,
      rgba(0, 0, 0, 0) 100.71%
    ),
    $black-cover;
  overflow: scroll;
  font-size: 50%;

  &__txt-heading {
    color: $white;
    font-size: 3em;
  }
}
</style>
