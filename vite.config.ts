import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

<<<<<<< HEAD
// https://vitejs.dev/config/
=======
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
<<<<<<< HEAD
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
=======
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
}));
=======
  build: {
    // 1. Minificar o código ao máximo
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        // 2. O segredo: Separar bibliotecas pesadas em arquivos diferentes
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-popover'], // Agrupa UI
          animations: ['gsap', 'framer-motion', 'lucide-react'], // Agrupa animações
        },
      },
    },
    // 3. Avisar se os pedaços ficarem muito grandes
    chunkSizeWarningLimit: 1000, 
  },
}));
>>>>>>> 26d4ed83c33e7cf8dafcce367b8ca697f1a3b2fb
