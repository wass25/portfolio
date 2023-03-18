<template>
    <div class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 hover:duration-1000 duration-1000 hover:cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark w-auto"
        v-for="travail in audiovisuel" :key="travail.id">
        <router-link :to="'/Description/Audiovisuel/' + travail.id
        ">
            <iframe width="420" height="315" :src="travail.Video">
            </iframe>
            <div class="text-center px-4 py-6">
                <p class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">{{
                    travail.Titre
                }}</p>
            </div>
        </router-link>
    </div>
</template>


<script setup lang="ts">

import { supabase } from "../supabase.js";

let { data: audiovisuel, error } = await supabase
    .from("Audiovisuel")
    .select("*")


if (error) {
    console.log("erreur données audiovisuel", { error });
}
</script>