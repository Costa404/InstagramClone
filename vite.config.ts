import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Abre o relatório no navegador automaticamente
      filename: "stats.html", // Nome do arquivo gerado
      template: "network", // Tipo de visualização (opções: "treemap", "sunburst", "network")
    }),
  ],
  build: {
    chunkSizeWarningLimit: 500, // Exibe aviso para chunks acima de 500 kB
  },
});
