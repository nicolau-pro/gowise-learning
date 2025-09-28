import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      atoms: path.resolve(__dirname, "src/components/atoms"),
      layout: path.resolve(__dirname, "src/components/layout"),
      components: path.resolve(__dirname, "src/components/molecules"),
      meta: path.resolve(__dirname, "src/components"),
    },
  },
});
