/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'grass-green': '#479A6D',
				'deep-gold': '#C4B27A'
			},
			transitionProperty: {
				spacing: 'margin, padding'
			}
		}
	},
	daisyui: {
		themes: [
			{
				default: {
					primary: '#0082AE',
					secondary: '#708199',
					accent: '#479A6D',
					error: '#DF2A36'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
