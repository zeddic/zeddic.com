import adapter from '@sveltejs/adapter-node';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import {mdsvex} from 'mdsvex';

const config = {
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [mdsvex({extensions: ['.md', '.svx']}), vitePreprocess()],
  kit: {adapter: adapter()},
};

export default config;
