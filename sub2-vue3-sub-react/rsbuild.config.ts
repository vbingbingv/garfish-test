import { defineConfig, rspack } from '@rsbuild/core';
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
        chunkLoadingGlobal: 'sub2-vue3-sub-react',
      },
      plugins: [
        new rspack.BannerPlugin({
          banner: 'Sub2 Vue3 Sub React',
        }),
      ],
    },
  },
  html: {
    mountId: process.env.PUBLIC_MOUNT_ID,
  },
  server: {
    port: 3006,
  },
  dev: {
    assetPrefix: 'http://localhost:3006',
  },
});
