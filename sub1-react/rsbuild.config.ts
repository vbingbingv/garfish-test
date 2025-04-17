import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      output: {
        // 需要配置成 umd 规范
        library: {
          type: 'umd',
        },
        // 修改不规范的代码格式，避免逃逸沙箱
        globalObject: 'window',
        chunkLoadingGlobal: 'sub1-react',
      },
    },
  },
  html: {
    mountId: 'sub1-react-mount-id',
  },
  server: {
    port: 3000,
  },
  dev: {
    assetPrefix: 'http://localhost:3000',
  },
});
