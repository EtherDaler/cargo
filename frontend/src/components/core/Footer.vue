<template>
	<v-footer id="core-footer" color="primary" app absolute padless>
		<v-container>
			<v-row class="d-flex align-center mb-2">
				<div class="ma-2">
					<span v-for="link in links" :key="link.name">
						<a :href="link.Link" class="ma-2" target="_blank">{{
							link.name
						}}</a>
					</span>
				</div>
				<v-spacer />
				<span class="font-weight-light copyright">
					&copy;
					{{ new Date().getFullYear() }}
					AjamCargo by
					<a href="https://github.com/EtherDaler" target="_blank">Daler</a>, crafted with
					Vuetify
					<v-icon color="tertiary" size="17">mdi-heart</v-icon>
				</span>
			</v-row>
		</v-container>
	</v-footer>
</template>

<script>
export default {
	data: () => ({
		links: [
			{ name: "Home", Link: "" },
			{
				name: "Docs",
				Link: "https://materialfy.com",
			},
			{
				name: "GitHub",
				Link: "https://github.com/EtherDaler",
			},
			{ name: "Twitter", Link: "https://twitter.com/Materialfy" },
		],
	}),
};
</script>

<style>
#core-footer {
	z-index: 0;
}
</style>
