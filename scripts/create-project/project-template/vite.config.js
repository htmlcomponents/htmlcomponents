import { resolve } from "path";
import { defineConfig } from "vite";

// import viteHTMLImportPlugin from "./components/imports/viteHTMLImportPlugin/viteHTMLImportPlugin";

export default defineConfig({
  //   plugins: [viteHTMLImportPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        guide: resolve(__dirname, "guide/index.html"),
      },
    },
  },
});
