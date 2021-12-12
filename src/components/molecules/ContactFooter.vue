<template>
    <div class="footer q-mt-lg">
        <div class="flex q-my-sm">
            <q-icon name="fab fa-github" color="white" size="2rem" />
            <p class="q-ml-lg q-my-auto q-pa-none text-white">sample@github.com</p>
        </div>
        <div class="flex q-my-sm">
            <q-icon name="fab fa-linkedin-in" color="white" size="2rem" />
            <p class="q-ml-lg q-my-auto q-pa-none text-white">sample@linkedin.com</p>
        </div>
        <div class="flex q-my-sm">
            <q-icon name="fas fa-envelope" color="white" size="2rem" />
            <p class="q-ml-lg q-my-auto q-pa-none text-white">bienvenido.falconIII@gmail.com</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactFooter"
}
</script>

<style lang="scss" scoped>
    .footer {
        width: fit-content;
        font-size: 0.8rem;
    }
</style>