// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	app: {
		head: {
			link: [
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Mono:ital,wght@0,200..800;1,200..800&display=swap"
				},
				{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
				{rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
				{rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png'},
				{rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
				{rel: 'manifest', href: '/site.webmanifest'}
			],
			htmlAttrs: {
				lang: 'en'
			},
			meta: [
				{property: 'og:site_name', content: 'Malder validator'},
				{key: 'og-type', property: 'og:type', content: 'website'},
				{
					key: 'og-image',
					property: 'og:image',
					content: 'https://malder.xyz/images/og-thumb.png'
				},
				{key: 'og-title', property: 'og:title', content: 'Malder validator'},
				{
					key: 'og-desc',
					property: 'og:description',
					content: 'Cosmos based blockchains validator Malder'
				},
				{
					property: 'og:image:width',
					content: '512'
				},
				{
					property: 'og:image:height',
					content: '512'
				},
				{key: 't-type', name: 'twitter:card', content: 'Cosmos based blockchains validator Malder'},
				{
					property: 'twitter:image',
					content: 'https://malder.xyz/images/og-thumb.png'
				},
				{property: 'twitter:title', content: 'Malder validator'},
				{property: 'twitter:description', content: 'Cosmos based blockchains validator Malder'}
			],
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