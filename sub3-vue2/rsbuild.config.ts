import { defineConfig, rspack } from '@rsbuild/core';
import { pluginVue2 } from '@rsbuild/plugin-vue2';

export default defineConfig({
  plugins: [pluginVue2()],
  server: {
    port: 3001,
  },
  tools: {
    rspack: {
      output: {
        // 需要配置成 umd 规范
        library: {
          type: 'umd',
        },
        // 修改不规范的代码格式，避免逃逸沙箱
        globalObject: 'window',
        chunkLoadingGlobal: 'sub3-vue2',
      },
      plugins: [
        new rspack.BannerPlugin({
          banner: 'Sub3 Vue2',
        }),
      ],
    },
  },
  html: {
    mountId: process.env.PUBLIC_MOUNT_ID,
  },
  dev: {
    assetPrefix: 'http://localhost:3001',
  },
});
