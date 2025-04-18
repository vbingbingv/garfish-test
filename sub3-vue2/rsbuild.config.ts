import { defineConfig } from '@rsbuild/core';
import { pluginVue2 } from '@rsbuild/plugin-vue2';

export default defineConfig({
  plugins: [pluginVue2()],
  server: {
    port: 3001,
  },
  html: {
    mountId: process.env.PUBLIC_MOUNT_ID,
  },
  dev: {
    assetPrefix: 'http://localhost:3001',
  },
});
