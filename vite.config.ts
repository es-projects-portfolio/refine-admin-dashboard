import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tesconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react()],
});
