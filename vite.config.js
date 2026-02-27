import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      data: path.resolve(__dirname, 'src/data'),
      media: path.resolve(__dirname, 'src/data/Media.jsx'),
      paths: path.resolve(__dirname, 'src/data/Paths.jsx'),
      utils: path.resolve(__dirname, 'src/data/utils'),
      variables: path.resolve(__dirname, 'src/data/variables.js'),
      hooks: path.resolve(__dirname, 'src/components/hooks'),
      contexts: path.resolve(__dirname, 'src/contexts'),
      atoms: path.resolve(__dirname, 'src/components/atoms'),
      icons: path.resolve(__dirname, 'src/components/atoms/Icon.jsx'),
      layout: path.resolve(__dirname, 'src/components/layout'),
      components: path.resolve(__dirname, 'src/components/molecules'),
      metaTags: path.resolve(__dirname, 'src/components/meta/MetaTags.jsx'),
      appState: path.resolve(__dirname, 'src/hooks/useAppState.js'),
    },
  },
});
