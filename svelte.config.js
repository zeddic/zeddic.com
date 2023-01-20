import adapter from '@sveltejs/adapter-node';
import importAssets from 'svelte-preprocess-import-assets'
import {vitePreprocess} from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		importAssets(),
		vitePreprocess(),
	],
	kit: {
		adapter: adapter()
	},
};

export default config;
