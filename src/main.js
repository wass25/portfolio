import { createApp } from 'vue'
import './styles/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"
import routesFromPages from "~pages";

library.add(fas, fab)

import { supabase } from "./supabase";
console.log(supabase);

const router = createRouter({
    history: createWebHistory(),
    routes: [

        // possible d'ajouter ses propres routes
        // en plus de celles faites automatiquement
        ...routesFromPages,
    ],
});


const app = createApp(App);
app.use(router);
app.component('fa', FontAwesomeIcon)
app.mount('#app');


