import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
		adapter: adapter({
      // Static needs a fallback page.
      fallback: 'index.html'
    }),
	},
  preprocess: [
    preprocess({
      postcss: true,
      typescript: true,
    }),
  ],
};
