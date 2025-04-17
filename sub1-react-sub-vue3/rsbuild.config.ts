import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    rspack: {
      output: {
        // 需要配置成 umd 规范
        library: {
          type: 'umd',
        },
        // 修改不规范的代码格式，避免逃逸沙箱
        globalObject: 'window',
        chunkLoadingGlobal: 'sub1-react-sub-vue3',
      },
    },
  },
  html: {
    mountId: 'sub-vue3-root',
  },
  dev: {
    assetPrefix: 'http://localhost:3003',
  },
  server: {
    port: 3003,
  },
});
