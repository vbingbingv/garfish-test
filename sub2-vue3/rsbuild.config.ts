import { defineConfig, rspack } from '@rsbuild/core';
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
        chunkLoadingGlobal: 'sub2-vue3',
      },
      plugins: [
        new rspack.BannerPlugin({
          banner: 'Sub2 Vue3',
        }),
      ],
    },
  },
  server: {
    port: 3004,
  },
  html: {
    mountId: process.env.PUBLIC_MOUNT_ID,
  },
  dev: {
    assetPrefix: 'http://localhost:3004',
  },
});
