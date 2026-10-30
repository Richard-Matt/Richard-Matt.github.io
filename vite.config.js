import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For a repository named USERNAME.github.io, the root base path is correct.
// If you choose a differently named repository, update this to /REPOSITORY-NAME/.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
