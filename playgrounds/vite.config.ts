import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ds-industry/react": path.resolve(__dirname, "../packages/react"),
      "@ds-industry/scss": path.resolve(__dirname, "../packages/scss"),
    },
  },
});
