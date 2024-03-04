import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@icon": path.resolve(__dirname, "src/components/icons/index.tsx"),
      "@component": path.resolve(__dirname, "src/components/index.ts"),
      "@util": path.resolve(__dirname, "src/util"),
      "@type": path.resolve(__dirname, "src/types.ts"),
    },
  },
});
