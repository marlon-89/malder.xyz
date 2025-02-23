// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	app: {
		head: {
			link: [
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Mono:ital,wght@0,200..800;1,200..800&display=swap"
				}
			]
		}
	},
	css: [
		'~/assets/css/main.scss',
		'vuetify/styles'
	],
	build: {
		transpile: [
			"vuetify"
		]
	},
	modules: [
		'@nuxt/image'
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "vuetify/settings" as *;`
				}
			}
		}
	},
	devtools: {enabled: true}
})