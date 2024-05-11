import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindiCSS from "vite-plugin-windicss";
import { resolve } from "path"
const VITE_WEB_PORT = '1314';
// https://vitejs.dev/config/
export default defineConfig({
  base: "./react-blog",
  plugins: [
    WindiCSS(),
    react(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  server: {
    host: "0.0.0.0",
    port: Number(VITE_WEB_PORT),
    proxy: {
      "/api": {
        // target: VITE_API_URL.replace(/^\/api/, ""),
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/api/, "");
        }
      }
    }
  },
  clearScreen: false,
  build: {
    outDir: 'docs',
    minify: "esbuild",
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        experimentalMinChunkSize: 256,
        manualChunks(id) {
          // console.log(id)
          if (id.includes('node_modules')) {
            // console.log(id)
            if (id.includes("@ant-design") || id.includes("ant") || id.includes("rc-")) {
              return "element-ui"
            } else if (id.includes("lodash") || id.includes("crypto")) {
              return "chatgpt"
            } else {
              return 'common'
            }

          }
        }
      }

    },

  }
})
