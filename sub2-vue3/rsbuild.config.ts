import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [pluginVue()],
  server: {
    port: 3004,
  },
  dev: {
    assetPrefix: 'http://localhost:3004',
  },
});
