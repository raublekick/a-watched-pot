import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
const path = require("path");
const BASE_PATH = process.env.mode === "Production" ? "/a-watched-pot/" : "";
// https://vitejs.dev/config/
export default defineConfig({
  base: BASE_PATH,
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
