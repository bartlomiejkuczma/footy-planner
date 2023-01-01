/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'grass-green': '#479A6D',
				'deep-gold': '#C4B27A'
			}
		}
	},
	plugins: [require('daisyui')]
};
