<script setup>

import Header from '../src/components/Header.vue'
import Footer from "../src/components/Footer.vue"
</script>

<template>
  <div class="font-inter bg:white dark:bg-slate-900">
    <div>
      <Header></Header>
    </div>
    <Suspense>
      <router-view>

      </router-view>
    </Suspense>
    <div class="mt-20">
      <Footer></Footer>
    </div>
  </div>
</template>