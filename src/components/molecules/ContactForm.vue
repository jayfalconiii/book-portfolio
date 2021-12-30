<template>
  <q-form @submit.prevent="onSubmit" @reset="onReset" ref="contactForm">
    <p class="q-form__label u-font-praise text-white q-ma-none">Name:</p>
    <q-input
      class="q-mb-xs"
      color="black"
      bg-color="white"
      filled
      outlined
      clearable
      v-model="name"
      placeholder="John Doe"
      dense
      :rules="[(val) => !!val || '* Required']"
      lazy-rules
    />

    <p class="q-form__label u-font-praise text-white q-ma-none">Email:</p>
    <q-input
      class="q-mb-xs"
      color="black"
      bg-color="white"
      type="email"
      placeholder="john.doe@gmail.com"
      filled
      outlined
      clearable
      dense
      v-model="email"
      :rules="[(val) => !!val || '* Required', isValidEmail]"
      lazy-rules
    />

    <p class="q-form__label u-font-praise text-white q-ma-none">Message:</p>
    <q-input
      class="q-mb-xs"
      color="black"
      bg-color="white"
      type="textarea"
      placeholder="Enter message..."
      filled
      outlined
      clearable
      dense
      v-model="message"
    />

    <q-checkbox
      class="q-form__checkbox"
      dense
      dark
      v-model="sendCopy"
      label="Send me a copy?"
      color="green"
      size="lg"
    />

    <q-btn
      class="q-form__btn u-font-praise"
      label="Send"
      type="submit"
      color="green"
      text-color="white"
      no-caps
    />
  </q-form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      sendCopy: false,
    };
  },
  methods: {
    isValidEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid email!";
    },
    onReset() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.sendCopy = false;
    },
    async onSubmit() {
      const formData = {
        name: this.name,
        email: this.email,
        message: this.message,
        sendCopy: this.sendCopy,
      };

      try {
        this.$q.loading.show({
          message: "Sending email message...",
        });
        await this.$api.post("contactme", formData);
        this.$q.loading.hide();
        this.$q.dialog({
          title: "Message Sent!",
          message:
            "Message was succesfully sent. Thank you for contacting me! I'll get back to you as soon as possible.",
        });

        this.$refs.contactForm.reset();
      } catch (err) {
        this.$q.dialog({
          title: "Unable to send mail!",
          message: "Please try again.",
        });
        throw err;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.q-form {
  &__label {
    display: block;
    font-size: 2em;

    @media (min-width: $breakpoint-md-min) {
      font-size: 1.2rem;
    }
  }

  &__checkbox {
    font-size: 1.5em;
    color: white;
  }

  &__btn {
    display: block;
    margin: 1rem auto;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    width: 100%;

    @media (min-width: $breakpoint-md-min) {
      width: 50%;
    }
  }
}
</style>
