import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		components,
		directives,
		icons: {
			defaultSet: 'fa',
			aliases,
			sets: {
				fa,
			},
		},
		theme: {
			defaultTheme: 'dark',
			themes: {
				dark: {
					dark: true,
					colors: {
						primary: '#ffff46',
						secondary: '#03a9f4',
						background: '#121212',
						surface: '#1e1e1e',
						error: '#f44336',
						success: '#4caf50',
						warning: '#ffeb3b'
					}
				},
				light: {
					dark: false,
					colors: {
						primary: '#1976d2',
						secondary: '#424242',
						background: '#f5f5f5',
						surface: '#ffffff',
						error: '#d32f2f',
						success: '#388e3c',
						warning: '#ffa000'
					}
				}
			}
		}
	})

	nuxtApp.vueApp.use(vuetify)
})
