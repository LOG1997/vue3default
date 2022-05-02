import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";

const {resolve} = require("path");
// element-plus
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS(),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    host:"localhost",
    port: 8080,
    proxy: {
      '^/api/.*': {
        // 请求地址
        // 默认后端地址
              target: 'http://localhost:4000',
              // 是否跨域
              changeOrigin: true,
              // 路径重写
              // rewrite: (path) => path.replace(/^\/api/, '')
            },
      },
      origin: 'http://127.0.0.1:8080/'
  },
  resolve: {
    alias: {
      
      "@": resolve(__dirname, "./src"),
    },
  },
});

