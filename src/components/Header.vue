<script setup>
import darkmode from "../components/darkmode.vue"

</script>
<template>
	<nav id="nav" class="sm:container sm:mx-auto">

		<div class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
			<a href="/"
				class="router-link-active router-link-exact-active font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2">Accueil
			</a>
			<a href="../pages/contact.vue"
				class="router-link-active router-link-exact-active font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2">Contact</a>
			<a href="../pages/apropos.vue"
				class="router-link-active router-link-exact-active font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2">A
				propos</a>



		</div>

		<div class="sm:flex justify-between items-center flex-col md:flex-row">

			<div class="md:block">

				<darkmode></darkmode>

			</div>


		</div>



	</nav>
</template>


