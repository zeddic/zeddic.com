import {sveltekit} from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});

// /** @type {import('vite').UserConfig} */
// const config = {
//   plugins: [tailwindcss(), sveltekit()],
//   test: {
//     include: ['src/**/*.{test,spec}.{js,ts}'],
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         api: 'modern',
//       },
//     },
//   },
// };

// export default config;
