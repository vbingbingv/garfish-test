import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [pluginVue()],
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
