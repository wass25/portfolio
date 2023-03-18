<script>
import boutton from '../reusable/boutton.vue';
import champform from '../reusable/champform.vue';
import champinfo from '../reusable/champinfo.vue';
export default { components: { boutton, champform, champinfo } };
</script>

<template>
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
				Formulaire de contact
			</p>
			<form action="#" class="font-general-regular space-y-7">
				<champform label="Nom" inputIdentifier="name" />
				<champform label="Email" inputIdentifier="email" inputType="email" />
				<champform label="Sujet" inputIdentifier="subject" />
				<champinfo label="Message" textareaIdentifier="message" />

				<div>
					<boutton title="Envoyer"
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit" aria-label="Envoyer" />
				</div>
			</form>
		</div>
	</div>
</template>

