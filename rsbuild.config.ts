import { defineConfig } from '@rsbuild/core';
import { pluginLess } from '@rsbuild/plugin-less';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSvgr({
      svgrOptions: {
        exportType: 'default',
      },
    }),
    pluginLess(),
  ],
  performance: {
    dnsPrefetch: ['https://r.haier.net'],
    preconnect: ['https://r.haier.net'],
    prefetch: true,
    preload: true,
  },
});
