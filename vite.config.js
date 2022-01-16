import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  base: "/a-watched-pot/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
