<script setup>

import { ref } from 'vue';

const theme = ref(null)

const setEffectTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        theme.value = 'dark'
    } else {
        theme.value = 'light'
    }
}
setEffectTheme()

const useEffectTheme = () => {
    console.log('works', theme.value);
    if (theme.value === 'dark') {
        document.documentElement.children[1].classList.remove('dark')
    } else {
        document.documentElement.children[1].classList.add('dark')
    }
}

const handleThemeSwitch = () => {
    theme.value === 'dark' ? theme.value = 'light' : theme.value = 'dark'
    useEffectTheme()
}
</script>

<template>
    <button type="button" @click="handleThemeSwitch" class="z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md">
        {{ theme === 'light' ? '🌞' : '🌙' }}
    </button>
</template>