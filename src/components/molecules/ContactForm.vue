<template>
    <q-form @submit.prevent="onSubmit" ref="contactForm">
        <p class="q-form__label u-font-praise text-white q-ma-none">Name:</p>
        <q-input
            class="q-mb-sm"
            color="black"
            bg-color="white"
            filled
            outlined
            clearable
            v-model="name"
            placeholder="John Doe"
            dense
            :rules="[
                val => !!val || '* Required'
            ]"
            lazy-rules
        />

        <p class="q-form__label u-font-praise text-white q-ma-none">Email:</p>
        <q-input
            class="q-mb-sm"
            color="black"
            bg-color="white"
            type="email"
            placeholder="john.doe@gmail.com"
            filled
            outlined
            clearable
            dense
            v-model="email"
            :rules="[
                val => !!val || '* Required',
                isValidEmail
            ]"
            lazy-rules
        />

        <p class="q-form__label u-font-praise text-white q-ma-none">Message:</p>
        <q-input
            class="q-mb-sm"
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
            message: ""
        }
    },
    methods: {
        isValidEmail (val) {
            const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
            return emailPattern.test(val) || 'Invalid email!';
        },
        onSubmit() {
            this.$q.dialog({
                title: "Men at work!",
                message: "I apologize for the inconvenience. The contact form is currently in progress. Please feel free to contact me using the email address attached. Thank you for understanding!"
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .q-form {
        &__label {
            display: block;
            font-size: 1.4rem;

            @media (min-width: $breakpoint-md-min) {
                font-size: 1.8rem;
            }
        }

        &__btn {
            display: block;
            margin-top: 1rem;
            padding: 0.5rem;
            font-size: 1rem;
            font-weight: 400;
            width: 100%;

            @media (min-width: $breakpoint-md-min) {
                margin: 1rem auto;
                width: 50%;
            }
        }
    }
</style>