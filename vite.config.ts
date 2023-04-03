import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import preprocess from "svelte-preprocess";
import path from "path";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  return {
    plugins: [
      svelte({
        preprocess: preprocess(),
        emitCss: true,
        compilerOptions: {
          // enable run-time checks when not in production
          dev: !isProduction,
        },
      }),
    ],
    resolve: {
      alias: {
        $lib: path.resolve(__dirname, "src/lib"),
      },
    },
    build: {
      minify: isProduction,
    },
  };
});
