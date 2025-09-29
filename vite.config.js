import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      data: path.resolve(__dirname, "src/data"),
      utils: path.resolve(__dirname, "src/data/utils"),
      variables: path.resolve(__dirname, "src/data/variables.jsx"),
      atoms: path.resolve(__dirname, "src/components/atoms"),
      icons: path.resolve(__dirname, "src/components/atoms/Icon.jsx"),
      layout: path.resolve(__dirname, "src/components/layout"),
      components: path.resolve(__dirname, "src/components/molecules"),
      metaTags: path.resolve(__dirname, "src/components/meta/MetaTags.jsx"),
      appState: path.resolve(__dirname, "src/AppStateContext.jsx"),
    },
  },
});
