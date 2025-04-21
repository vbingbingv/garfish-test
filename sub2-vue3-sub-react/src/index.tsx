import React from 'react';
import ReactDOM from 'react-dom/client';
import { RootComponent } from './App.tsx';

import { reactBridge } from '@garfish/bridge-react-v18';

export const provider = reactBridge({
  el: `#${process.env.PUBLIC_MOUNT_ID}`,
  rootComponent: RootComponent,
});

try {
  if (!window.__GARFISH__) {
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
} catch (e) {
  console.error('single mount error');
}
