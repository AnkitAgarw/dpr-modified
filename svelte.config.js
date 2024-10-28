import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			ssr: false,
		}),
		paths: {
			base: '', // Leave this empty if deploying at root
		},
		prerender: {
			entries: ['*']
		},
	}
};

export default config;
