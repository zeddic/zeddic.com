import adapter from '@sveltejs/adapter-node';
import importAssets from 'svelte-preprocess-import-assets'
import {vitePreprocess} from '@sveltejs/kit/vite';
import {mdsvex} from 'mdsvex';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		importAssets(),
		vitePreprocess(),
		mdsvex({
			extensions: ['.md', '.svx'],
			// layout: 'src/routes/+layout.svelte',
		}),
	],
	kit: {
		adapter: adapter()
	},
};

export default config;
