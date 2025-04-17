import React from 'react';
import ReactDOM from 'react-dom/client';
import { RootComponent } from './App';

import { reactBridge } from '@garfish/bridge-react-v18';

export const provider = reactBridge({
  el: '#root',
  rootComponent: RootComponent,
});

console.log(window.__GARFISH__);

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RootComponent />
    </React.StrictMode>,
  );
}
if (!window.__GARFISH__) {
}
