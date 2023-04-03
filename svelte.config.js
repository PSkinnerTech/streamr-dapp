import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";

const config = {
  kit: {
    preprocess: vitePreprocess(),
  },
  preprocess: preprocess(), // Add this line
};

export default config;
