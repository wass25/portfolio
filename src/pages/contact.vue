<script>
import contactform from "../contact/ContactForm.vue";
import ContactDetails from "../contact/ContactDetails.vue"

export default {
    components: {
        contactform,
        ContactDetails,
    },
    data: () => {
        return {
            contacts: [
                {
                    id: 1,
                    name: 'wassel.azzouz@edu.univ-fcomte.fr',

                },
            ],
        };
    },

    methods: {},
};
</script>

<template>
    <div class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10">

        <contactform />


        <ContactDetails :contacts="contacts" />
    </div>
</template>
