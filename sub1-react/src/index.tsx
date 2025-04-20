import React from 'react';
import ReactDOM from 'react-dom/client';

import { reactBridge } from '@garfish/bridge-react-v18';

export const provider = reactBridge({
  el: `#${process.env.PUBLIC_MOUNT_ID}`,
  loadRootComponent: async () => {
    return (await import('./App.tsx')).RootComponent;
  },
});

// 当既作为子应用，也作为主应用时，注意 window.__GARFISH__ 为 true（只要引入了__GARFISH__就为true）
// 所以一个项目既作为子应用，也作为主应用，此时需要运行时加载子应用才可以
try {
  async function init() {
    if (!window.__GARFISH__) {
      const { RootComponent } = await import('./App.tsx');
      const rootEl = document.getElementById(`${process.env.PUBLIC_MOUNT_ID}`);
      if (rootEl) {
        const root = ReactDOM.createRoot(rootEl);
        root.render(
          <React.StrictMode>
            <RootComponent />
          </React.StrictMode>,
        );
      }
    }
  }
  init();
} catch (e) {
  console.error('single mount error');
}
