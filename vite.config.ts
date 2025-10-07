import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// Use a base path when building for GitHub Pages so asset URLs include the repo name.
// Assumption: repository will be published at https://<username>.github.io/my-awesome-folio-96/
export default defineConfig(({ mode }) => ({
  // set base for production builds so generated asset paths are correct on GitHub Pages
  base: mode === "development" ? "/" : "/my-awesome-folio-96/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
