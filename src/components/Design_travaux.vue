<template>
    <div class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 rounded-xl shadow-lg hover:shadow-xl hover:scale-110 hover:duration-1000 duration-1000 cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark w-auto"
        v-for="travail in design" :key="travail.id">
        <router-link :to="'/Description/Design/' + travail.id
        ">
            <img v-if="travail.Image !== null" class="rounded-t-xl border-none object-cover h-48 w-96" :src="travail.Image">
            <video v-if="travail.Video !== null" controls autoplay>
                <source :src="travail.Video" type="video/mp4">
            </video>
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



let { data: design, error } = await supabase
    .from("Design")
    .select("*")


if (error) {
    console.log("erreur données Design", { error });
}


</script>