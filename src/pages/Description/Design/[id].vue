<script setup lang="ts">
import { supabase } from "../../../supabase";

const props = defineProps({ id: String });

console.log("erreur données Design",);



let { data: design, error } = await supabase
    .from("Design")
    .select("*")
    .eq("id", props.id);

if (error) console.log("n'a pas pu charger la description :", props.id);



</script>


<template>
    <div class="container mx-auto mt-10 sm:mt-20">
        <div v-for="travail in design">
            <div v-if="travail.Image2 === null && travail.Image3 === null">
                <div class="block justify-around sm:block lg:flex">
                    <div>
                        <div>
                            <p
                                class="font-general-medium text-center text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
                                {{ travail.Titre }}</p>
                        </div>
                        <div class="flex justify-center">
                            <div class="flex items-center mr-10">
                                <p>{{ travail.date }}</p>
                            </div>
                            <div class="flex item center">
                                <p>{{ travail.ressources }}</p>

                            </div>
                        </div>

                    </div>
                    <img :src="travail.Image" alt="">
                </div>
            </div>
            <div v-else>
                <div>
                    <p
                        class="font-general-medium text-center text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7 lg:text-left sm:text-left">
                        {{ travail.Titre }}</p>
                </div>
                <div class="flex">
                    <div class="flex items-center mr-10  text-primary-dark dark:text-primary-light">
                        <p>{{ travail.date }}</p>
                    </div>
                    <div class="flex item center  text-primary-dark dark:text-primary-light">
                        <p>{{ travail.ressources }}</p>

                    </div>
                </div>
                <div v-if="travail.Image3 === null">
                    <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 mt-12">

                        <img :src="travail.Image2" alt="">
                        <img :src="travail.Image" alt="">

                    </div>
                </div>
                <div v-else>
                    <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">

                        <img :src="travail.Image2" alt="">


                        <img :src="travail.Image" alt="">


                        <img :src="travail.Image3" alt="">

                    </div>

                </div>
            </div>
            <div class="block sm:flex gap-0 sm:gap-10 mt-14">

                <div class="w-full sm:w-1/3 text-left">

                    <div class="mb-7">



                    </div>


                    <div class="mb-7">
                        <p v-for="description in design "
                            class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
                            Outils
                        </p>
                        <p v-for="description in design "
                            class="font-general-regular text-primary-dark dark:text-ternary-light">
                            {{ description.outils }}
                        </p>
                    </div>


                </div>


                <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                    <p v-for="description in design "
                        class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                        Description
                    </p>
                    <p v-for="description in design "
                        class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
                        {{ description.Description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>