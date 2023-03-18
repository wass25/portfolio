<template>
    <div class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 rounded-xl shadow-lg hover:scale-110 hover:duration-1000 duration-1000 hover:shadow-xl hover:cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark w-auto"
        v-for="categorie in Portfolio" :key="categorie.id_categorie">
        <router-link :to="'/Categories/' + categorie.Nom">
            <img class="rounded-t-xl border-none" :src="categorie.Image">
            <div class="text-center px-4 py-6">
                <p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">{{
                    categorie.Nom
                }}</p>
                <span class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light">{{ categorie.Description
                }}</span>
            </div>
        </router-link>
    </div>
</template>


<script setup>

import { supabase } from "../supabase.js";

let { data: Portfolio, error } = await supabase
    .from("Categories")
    .select("*")

if (error) {
    console.log("erreur données Categories", { error });
}
</script>