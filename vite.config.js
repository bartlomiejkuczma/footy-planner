import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			'@lib': path.resolve('./src/lib'),
			'@lib/*': path.resolve('./src/lib/*'),
			'@stores': path.resolve('./src/stores'),
			'@stores/*': path.resolve('./src/stores/*')
		}
	}
};

export default config;
