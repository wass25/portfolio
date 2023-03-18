<template>
    <section class="pt-10 sm:pt-14">
        <div class="text-center border-b-2 border-t-0 border-primary-light dark:border-secondary-dark">
            Travaux
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 lg:gap-16 sm:gap-8 mt-6 text-center place-items-center">
            <onglet_travaux />
        </div>
    </section>
</template>

<script>
import onglet_travaux from './onglet_travaux.vue'
export default {
    components: {
        onglet_travaux
    },
}
</script>